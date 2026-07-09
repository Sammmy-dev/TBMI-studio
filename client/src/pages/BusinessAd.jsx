import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Upload, X } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BusinessAdHero from '../components/BusinessAdHero'
import HelpStrip from '../components/HelpStrip'
import { saveBusinessAd } from '../services/apiService'

export default function BusinessAd() {
  const [formData, setFormData] = useState({
    logo: null,
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    socialMediaHandles: '',
    website: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [logoPreview, setLogoPreview] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, files } = e.target
    setSubmitError('')

    if (type === 'file') {
      const file = files[0] || null
      setFormData((prev) => ({ ...prev, [name]: file }))

      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setLogoPreview(reader.result)
        }
        reader.readAsDataURL(file)
      } else {
        setLogoPreview(null)
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleRemoveLogo = () => {
    setFormData((prev) => ({ ...prev, logo: null }))
    setLogoPreview(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    const result = await saveBusinessAd(formData)

    if (result.success) {
      setSubmitted(true)
    } else {
      console.error(result.error)
      setSubmitError(result.error || 'Error submitting form. Please try again.')
    }

    setIsSubmitting(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  if (submitted) {
    return (
      <div className="bg-background-dark text-slate-100">
        <div
          className="film-grain fixed top-0 left-0 w-full h-full pointer-events-none z-50 opacity-[0.03]"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAomo0IOQDeaTwW1uDJM8cJJrHBiCcBu4zqdBGaW5GNb0C3qp4SQtEFhgkav_nf8Vb-9Iwuy12tKde_bOo9CFIfBgjk_tLsUpXcTQbhRfyHHUUyU6cRavqrQGtv8GuzDAfWk6D2PLTUSA1k-Qfnp1EKLhtwTGHkE81RU0-l6X9PzKcCrKLhYXM_XGmGaClzLDyFTtp1HJRnmvm616iKzSbft3OdTB-qMj6Tc5gfzVoVMgT7UgpvkuCjv9Jaa5hLZLspX0rC2xa1CG4G')`,
          }}
        ></div>
        <Navbar />
        <main className="relative z-10">
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
                <motion.div className="flex justify-center" variants={itemVariants}>
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
                    Submission Received!
                  </h2>
                  <p className="text-slate-400 text-lg">
                    Thank you{formData.businessName ? `, ${formData.businessName}` : ''}! We'll be in touch soon.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-primary/10 border border-primary/20 p-6 text-left"
                  variants={itemVariants}
                >
                  <h3 className="text-primary font-bold mb-3">What happens next?</h3>
                  <ul className="text-sm text-slate-400 space-y-2">
                    <li className="flex gap-2">
                      <span className="text-primary">{'\u2713'}</span>
                      <span>Our team reviews your submission within 24 hours</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">{'\u2713'}</span>
                      <span>We contact you via email or phone to discuss your ad</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">{'\u2713'}</span>
                      <span>We create a stunning ad video for your business</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.button
                  className="w-full py-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-display text-lg uppercase tracking-[0.2em] transition-all"
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
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-background-dark text-slate-100">
      <div
        className="film-grain fixed top-0 left-0 w-full h-full pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAomo0IOQDeaTwW1uDJM8cJJrHBiCcBu4zqdBGaW5GNb0C3qp4SQtEFhgkav_nf8Vb-9Iwuy12tKde_bOo9CFIfBgjk_tLsUpXcTQbhRfyHHUUyU6cRavqrQGtv8GuzDAfWk6D2PLTUSA1k-Qfnp1EKLhtwTGHkE81RU0-l6X9PzKcCrKLhYXM_XGmGaClzLDyFTtp1HJRnmvm616iKzSbft3OdTB-qMj6Tc5gfzVoVMgT7UgpvkuCjv9Jaa5hLZLspX0rC2xa1CG4G')`,
        }}
      ></div>

      <Navbar />

      <main className="relative z-10">
        <BusinessAdHero />

        <section className="px-6 pb-24">
          <motion.div
            className="max-w-[680px] mx-auto bg-card-dark border border-border-dark shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="px-8 md:px-12 pt-8 md:pt-12">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-white text-2xl font-display uppercase tracking-wider mb-2">
                  Tell Us About Your Business
                </h2>
                <p className="text-slate-500 text-sm">
                  Fill out the form below and we'll create a professional ad video for you.
                </p>
              </motion.div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
              <motion.div
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Logo Upload */}
                <motion.div className="flex flex-col gap-2" variants={itemVariants}>
                  <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                    Business Logo
                  </label>
                  {logoPreview ? (
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative bg-[#222222] p-4 border-2 border-primary/50">
                        <img
                          src={logoPreview}
                          alt="Logo Preview"
                          className="w-full h-48 object-contain"
                        />
                        <motion.button
                          type="button"
                          onClick={handleRemoveLogo}
                          className="absolute top-2 right-2 bg-primary hover:bg-primary/90 text-white p-2 transition-all"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <X size={20} />
                        </motion.button>
                        <p className="text-xs text-slate-400 mt-2 text-center">
                          {formData.logo?.name}
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
                        name="logo"
                        onChange={handleChange}
                        accept="image/*"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="text-center">
                        <Upload className="mx-auto text-primary mb-2" size={28} />
                        <p className="text-slate-400 text-sm font-light">
                          Upload your logo or{' '}
                          <span className="text-primary">click to browse</span>
                          <br />
                          <span className="text-xs text-slate-500">
                            (JPEG, PNG, WebP — max 5MB)
                          </span>
                        </p>
                        {formData.logo && !logoPreview && (
                          <p className="text-xs text-slate-400 mt-3">
                            Selected file: {formData.logo.name}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                {/* Business Name */}
                <motion.div className="flex flex-col gap-2" variants={itemVariants}>
                  <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                    Business Name
                  </label>
                  <motion.input
                    className="w-full bg-[#222222] border-none text-white p-4 input-focus-glow font-body"
                    placeholder="Your Business Name"
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    whileFocus={{ boxShadow: '0 0 10px rgba(191, 58, 43, 0.4)' }}
                  />
                </motion.div>

                {/* Contact Person */}
                <motion.div className="flex flex-col gap-2" variants={itemVariants}>
                  <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                    Contact Person *
                  </label>
                  <motion.input
                    className="w-full bg-[#222222] border-none text-white p-4 input-focus-glow font-body"
                    placeholder="Your Full Name"
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    whileFocus={{ boxShadow: '0 0 10px rgba(191, 58, 43, 0.4)' }}
                  />
                </motion.div>

                {/* Phone */}
                <motion.div className="flex flex-col gap-2" variants={itemVariants}>
                  <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                    Phone Number *
                  </label>
                  <div className="flex">
                    <span className="bg-primary/20 border-r border-primary/30 text-primary px-4 flex items-center text-sm font-bold">
                      +234
                    </span>
                    <motion.input
                      className="w-full bg-[#222222] border-none text-white p-4 input-focus-glow font-body"
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

                {/* Email */}
                <motion.div className="flex flex-col gap-2" variants={itemVariants}>
                  <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                    Email Address *
                  </label>
                  <motion.input
                    className="w-full bg-[#222222] border-none text-white p-4 input-focus-glow font-body"
                    placeholder="business@example.com"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    whileFocus={{ boxShadow: '0 0 10px rgba(191, 58, 43, 0.4)' }}
                  />
                </motion.div>

                {/* Social Media Handles */}
                <motion.div className="flex flex-col gap-2" variants={itemVariants}>
                  <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                    Social Media Handle(s) *
                  </label>
                  <motion.input
                    className="w-full bg-[#222222] border-none text-white p-4 input-focus-glow font-body"
                    placeholder="Instagram, TikTok, YouTube, etc."
                    type="text"
                    name="socialMediaHandles"
                    value={formData.socialMediaHandles}
                    onChange={handleChange}
                    required
                    whileFocus={{ boxShadow: '0 0 10px rgba(191, 58, 43, 0.4)' }}
                  />
                </motion.div>

                {/* Website */}
                <motion.div className="flex flex-col gap-2" variants={itemVariants}>
                  <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                    Website (if any)
                  </label>
                  <motion.input
                    className="w-full bg-[#222222] border-none text-white p-4 input-focus-glow font-body"
                    placeholder="https://yourbusiness.com"
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    whileFocus={{ boxShadow: '0 0 10px rgba(191, 58, 43, 0.4)' }}
                  />
                </motion.div>

                {submitError && (
                  <motion.p
                    className="text-sm text-red-400"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {submitError}
                  </motion.p>
                )}
              </motion.div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-display text-xl uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
                <CheckCircle size={20} />
              </motion.button>
            </form>
          </motion.div>
        </section>

        <HelpStrip />
      </main>

      <Footer />
    </div>
  )
}