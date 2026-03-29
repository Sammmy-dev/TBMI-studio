const express = require('express')
const path = require('path')
const multer = require('multer')
const Enrollment = require('../models/Enrollment')

const router = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'))
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase()
    cb(null, `receipt_${Date.now()}${ext}`)
  },
})

const upload = multer({
  storage,
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

router.post('/', upload.single('paymentReceipt'), async (req, res) => {
  try {
    const { fullName, email, phone, whatsappNumber, ageRange, gender, hearAbout, selectedCourse } = req.body

    if (!fullName || !email || !phone || !selectedCourse) {
      return res.status(400).json({ success: false, error: 'Missing required fields' })
    }

    const enrollment = await Enrollment.create({
      fullName, email, phone,
      whatsappNumber: whatsappNumber || undefined,
      ageRange: ageRange || undefined,
      gender: gender || undefined,
      hearAbout: hearAbout || undefined,
      selectedCourse,
      paymentReceiptFileName: req.file ? req.file.originalname : undefined,
      paymentReceiptSize: req.file ? req.file.size : undefined,
      paymentReceiptType: req.file ? req.file.mimetype : undefined,
      paymentReceiptPath: req.file ? req.file.filename : undefined,
    })

    res.json({ success: true, id: enrollment._id })
  } catch (error) {
    console.error('Error saving enrollment:', error)
    res.status(500).json({ success: false, error: 'Failed to save enrollment' })
  }
})

module.exports = router
