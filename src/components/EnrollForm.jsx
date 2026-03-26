import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, X } from 'lucide-react'
import { saveEnrollment } from '../services/firebaseService'

export default function EnrollForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    whatsappNumber: '',
    ageRange: '',
    gender: 'Male',
    hearAbout: '',
    selectedCourse: 'Video Editing Training',
    paymentReceipt: null,
  })
  const [submitted, setSubmitted] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, files } = e.target
    if (type === 'file') {
      setFormData((prev) => ({ ...prev, [name]: files[0] }))
      // Create image preview
      if (files[0]) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setImagePreview(reader.result)
        }
        reader.readAsDataURL(files[0])
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleRemoveImage = () => {
    setFormData((prev) => ({ ...prev, paymentReceipt: null }))
    setImagePreview(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Save to Firebase
    const result = await saveEnrollment(formData)
    
    if (result.success) {
      setSubmitted(true)
    } else {
      alert('Error submitting form. Please try again.')
      console.error(result.error)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  if (submitted) {
    return (
      <section className="px-6 pb-24">
        <motion.div
          className="max-w-[680px] mx-auto bg-card-dark border border-border-dark shadow-2xl overflow-hidden p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="text-center space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex justify-center"
              variants={itemVariants}
            >
              <motion.div
                className="bg-primary/20 p-6 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6 }}
              >
                <CheckCircle className="text-primary" size={64} />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-white text-3xl font-display uppercase tracking-wider mb-2">
                Application Submitted!
              </h2>
              <p className="text-slate-400 text-lg">
                Thank you for enrolling in {formData.selectedCourse}
              </p>
            </motion.div>

            <motion.div
              className="bg-primary/10 border border-primary/20 p-6 rounded-lg text-left"
              variants={itemVariants}
            >
              <h3 className="text-primary font-bold mb-3">What happens next?</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Confirmation email will be sent to {formData.email}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Our team will review your application within 12 hours</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Schedule your onboarding call</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Get instant access to your course materials</span>
                </li>
              </ul>
            </motion.div>

            <motion.button
              className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-display text-lg uppercase tracking-[0.2em] transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = '/'}
              variants={itemVariants}
            >
              Back to Home
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="px-6 pb-24">
      <motion.div
        className="max-w-[680px] mx-auto bg-card-dark border border-border-dark shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Form Header */}
        <div className="px-8 md:px-12 pt-8 md:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-white text-2xl font-display uppercase tracking-wider mb-2">
              Start Your Journey
            </h2>
            <p className="text-slate-500 text-sm">
              Fill out the form below to complete your enrollment.
            </p>
          </motion.div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Course Selection */}
            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
              <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                Select Training Program
              </label>
              <motion.select
                className="w-full bg-[#222222] border-none text-white p-4 rounded-none input-focus-glow font-body appearance-none"
                name="selectedCourse"
                value={formData.selectedCourse}
                onChange={handleChange}
                required
              >
                <option>Video Editing Training</option>
                <option>Photography Training</option>
              </motion.select>
            </motion.div>

            {/* Full Name */}
            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
              <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                Full Name
              </label>
              <motion.input
                className="w-full bg-[#222222] border-none text-white p-4 rounded-none input-focus-glow font-body"
                placeholder="John Doe"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                whileFocus={{ boxShadow: '0 0 10px rgba(191, 58, 43, 0.4)' }}
              />
            </motion.div>

            {/* Email */}
            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
              <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                Email Address
              </label>
              <motion.input
                className="w-full bg-[#222222] border-none text-white p-4 rounded-none input-focus-glow font-body"
                placeholder="john@example.com"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ boxShadow: '0 0 10px rgba(191, 58, 43, 0.4)' }}
              />
            </motion.div>

            {/* Phone */}
            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
              <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                Phone Number
              </label>
              <div className="flex">
                <span className="bg-primary/20 border-r border-primary/30 text-primary px-4 flex items-center text-sm font-bold">
                  +234
                </span>
                <motion.input
                  className="w-full bg-[#222222] border-none text-white p-4 rounded-none input-focus-glow font-body"
                  placeholder="800 000 0000"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  whileFocus={{ boxShadow: '0 0 10px rgba(191, 58, 43, 0.4)' }}
                />
              </div>
            </motion.div>

            {/* WhatsApp Number */}
            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
              <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                WhatsApp Number
              </label>
              <div className="flex">
                <span className="bg-primary/20 border-r border-primary/30 text-primary px-4 flex items-center text-sm font-bold">
                  +234
                </span>
                <motion.input
                  className="w-full bg-[#222222] border-none text-white p-4 rounded-none input-focus-glow font-body"
                  placeholder="800 000 0000"
                  type="tel"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  required
                  whileFocus={{ boxShadow: '0 0 10px rgba(191, 58, 43, 0.4)' }}
                />
              </div>
            </motion.div>

            {/* Age Range */}
            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
              <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                Age Range
              </label>
              <motion.select
                className="w-full bg-[#222222] border-none text-white p-4 rounded-none input-focus-glow font-body appearance-none"
                name="ageRange"
                value={formData.ageRange}
                onChange={handleChange}
                required
              >
                <option>Select range</option>
                <option>18 - 24</option>
                <option>25 - 34</option>
                <option>35+</option>
              </motion.select>
            </motion.div>

            {/* Gender */}
            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
              <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                Gender
              </label>
              <div className="flex bg-[#222222] p-1 h-[56px]">
                <motion.button
                  type="button"
                  className={`flex-1 text-sm font-bold uppercase tracking-wider transition-all ${
                    formData.gender === 'Male'
                      ? 'bg-primary text-white'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, gender: 'Male' }))
                  }
                  whileHover={{ scale: 1.02 }}
                >
                  Male
                </motion.button>
                <motion.button
                  type="button"
                  className={`flex-1 text-sm font-bold uppercase tracking-wider transition-all ${
                    formData.gender === 'Female'
                      ? 'bg-primary text-white'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, gender: 'Female' }))
                  }
                  whileHover={{ scale: 1.02 }}
                >
                  Female
                </motion.button>
              </div>
            </motion.div>

            {/* How did you hear about us */}
            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
              <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                How did you hear about us?
              </label>
              <motion.select
                className="w-full bg-[#222222] border-none text-white p-4 rounded-none input-focus-glow font-body appearance-none"
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleChange}
                required
              >
                <option>Select source</option>
                <option>Instagram</option>
                <option>Twitter (X)</option>
                <option>Friend Referral</option>
                <option>Youtube</option>
              </motion.select>
            </motion.div>

            {/* Payment Receipt Upload */}
            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
              <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                Payment Receipt (Image Only)
              </label>
              {imagePreview ? (
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative bg-[#222222] p-4 border-2 border-primary/50">
                    <img
                      src={imagePreview}
                      alt="Payment Receipt Preview"
                      className="w-full h-64 object-cover rounded"
                    />
                    <motion.button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute top-2 right-2 bg-primary hover:bg-primary/90 text-white p-2 rounded-full transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <X size={20} />
                    </motion.button>
                    <p className="text-xs text-slate-400 mt-2 text-center">
                      {formData.paymentReceipt?.name}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="relative border-2 border-dashed border-primary/30 hover:border-primary/50 transition-colors p-6 bg-[#222222]"
                  whileHover={{ borderColor: 'rgba(191, 58, 43, 0.5)' }}
                >
                  <input
                    type="file"
                    name="paymentReceipt"
                    onChange={handleChange}
                    accept="image/*"
                    required
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="text-center">
                    <p className="text-slate-400 text-sm font-light">
                      Drag and drop your payment receipt or <span className="text-primary">click to upload</span>
                      <br />
                      <span className="text-xs text-slate-500">(JPG, PNG max 5MB)</span>
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-display text-xl uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Submit Application
            <CheckCircle size={20} />
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}
