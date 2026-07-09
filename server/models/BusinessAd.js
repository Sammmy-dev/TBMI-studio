const mongoose = require('mongoose')

const businessAdSchema = new mongoose.Schema(
  {
    businessName: String,
    contactPerson: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    socialMediaHandles: { type: String, required: true },
    website: String,
    logoFileName: String,
    logoSize: Number,
    logoType: String,
    logoUrl: String,
    logoPublicId: String,
  },
  { timestamps: true }
)

module.exports = mongoose.model('BusinessAd', businessAdSchema)