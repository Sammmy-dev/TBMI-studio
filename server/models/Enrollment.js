const mongoose = require('mongoose')

const enrollmentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    whatsappNumber: String,
    ageRange: String,
    gender: String,
    hearAbout: String,
    selectedCourse: { type: String, required: true },
    paymentReceiptFileName: String,
    paymentReceiptSize: Number,
    paymentReceiptType: String,
    paymentReceiptPath: String,
  },
  { timestamps: true }
)

module.exports = mongoose.model('Enrollment', enrollmentSchema)
