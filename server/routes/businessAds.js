const express = require('express')
const multer = require('multer')
const { Readable } = require('stream')
const cloudinary = require('../cloudinary')
const BusinessAd = require('../models/BusinessAd')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const ads = await BusinessAd.find().sort({ createdAt: -1 }).lean()
    res.json({ success: true, items: ads })
  } catch (error) {
    console.error('Error fetching business ads:', error)
    res.status(500).json({ success: false, error: 'Failed to fetch business ads' })
  }
})

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp']
    if (allowed.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, and WebP are allowed.'))
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

router.post('/', upload.single('logo'), async (req, res) => {
  try {
    const { businessName, contactPerson, phone, email, socialMediaHandles, website } = req.body

    if (!contactPerson || !phone || !email || !socialMediaHandles) {
      return res.status(400).json({ success: false, error: 'Missing required fields' })
    }

    let logoData = {}
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, {
        folder: 'tbmi/business-ads',
        resource_type: 'image',
        public_id: `logo_${Date.now()}`,
      })
      logoData = {
        logoFileName: req.file.originalname,
        logoSize: req.file.size,
        logoType: req.file.mimetype,
        logoUrl: result.secure_url,
        logoPublicId: result.public_id,
      }
    }

    const ad = await BusinessAd.create({
      businessName: businessName || undefined,
      contactPerson,
      phone,
      email,
      socialMediaHandles,
      website: website || undefined,
      ...logoData,
    })

    res.json({ success: true, id: ad._id })
  } catch (error) {
    console.error('Error saving business ad:', error)
    res.status(500).json({ success: false, error: 'Failed to save business ad info' })
  }
})

module.exports = router