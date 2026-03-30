const express = require('express')
const multer = require('multer')
const { Readable } = require('stream')
const cloudinary = require('../cloudinary')
const Enrollment = require('../models/Enrollment')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const enrollments = await Enrollment.find().sort({ createdAt: -1 }).lean()
    res.json({ success: true, items: enrollments })
  } catch (error) {
    console.error('Error fetching enrollments:', error)
    res.status(500).json({ success: false, error: 'Failed to fetch enrollments' })
  }
})

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf']
    if (allowed.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, WebP, and PDF are allowed.'))
    }
  },
})

const uploadToCloudinary = (buffer, options) =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(options, (error, result) => {
      if (error) return reject(error)
      resolve(result)
    })
    Readable.from(buffer).pipe(stream)
  })

router.post('/', upload.single('paymentReceipt'), async (req, res) => {
  try {
    const { fullName, email, phone, whatsappNumber, ageRange, gender, hearAbout, selectedCourse } = req.body

    if (!fullName || !email || !phone || !selectedCourse) {
      return res.status(400).json({ success: false, error: 'Missing required fields' })
    }

    let receiptData = {}
    if (req.file) {
      const resourceType = req.file.mimetype === 'application/pdf' ? 'raw' : 'image'
      const result = await uploadToCloudinary(req.file.buffer, {
        folder: 'tbmi/payment-receipts',
        resource_type: resourceType,
        public_id: `receipt_${Date.now()}`,
      })
      receiptData = {
        paymentReceiptFileName: req.file.originalname,
        paymentReceiptSize: req.file.size,
        paymentReceiptType: req.file.mimetype,
        paymentReceiptUrl: result.secure_url,
        paymentReceiptPublicId: result.public_id,
      }
    }

    const enrollment = await Enrollment.create({
      fullName, email, phone,
      whatsappNumber: whatsappNumber || undefined,
      ageRange: ageRange || undefined,
      gender: gender || undefined,
      hearAbout: hearAbout || undefined,
      selectedCourse,
      ...receiptData,
    })

    res.json({ success: true, id: enrollment._id })
  } catch (error) {
    console.error('Error saving enrollment:', error)
    res.status(500).json({ success: false, error: 'Failed to save enrollment' })
  }
})

module.exports = router
