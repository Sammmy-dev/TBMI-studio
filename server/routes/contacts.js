const express = require('express')
const Contact = require('../models/Contact')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).lean()
    res.json({ success: true, items: contacts })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    res.status(500).json({ success: false, error: 'Failed to fetch contact requests' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { fullName, email, phone, serviceType, message } = req.body

    if (!fullName || !email) {
      return res.status(400).json({ success: false, error: 'Missing required fields' })
    }

    const contact = await Contact.create({
      fullName, email,
      phone: phone || undefined,
      serviceType: serviceType || undefined,
      message: message || undefined,
    })

    res.json({ success: true, id: contact._id })
  } catch (error) {
    console.error('Error saving contact:', error)
    res.status(500).json({ success: false, error: 'Failed to save contact request' })
  }
})

module.exports = router
