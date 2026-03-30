import { useState } from 'react'
import { saveQuoteRequest } from '../services/apiService'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaYoutube, FaTiktok, FaCheckCircle, FaWhatsapp } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setSubmitError('')
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    const result = await saveQuoteRequest(formData)

    if (result.success) {
      setSubmitted(true)
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          serviceType: '',
          message: '',
        })
        setSubmitted(false)
      }, 3000)
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
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="dark bg-background-dark dark:text-slate-100">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 -z-10 opacity-20"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(191, 58, 43, 0.3), transparent 70%)",
            }}
          />
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-4 py-2 border border-primary/50 rounded-full"
            >
              <span className="text-primary text-xs uppercase font-semibold tracking-widest">
                Get In Touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-6"
            >
              Let's <span className="text-primary">Work Together</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Have a project in mind? Get in touch with our team and let's
              create something amazing together.
            </motion.p>
          </div>
        </section>

        {/* Contact & Form Section */}
        <section className="py-20 bg-background-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div>
                  <h2 className="text-4xl font-bold uppercase tracking-tighter mb-6">
                    Contact <span className="text-primary">Information</span>
                  </h2>
                  <p className="text-slate-400 text-lg font-light">
                    Reach out to us directly or follow us on social media. We're
                    always happy to hear from you!
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  {[
                    {
                      Icon: FaEnvelope,
                      title: "Email",
                      value: "tbmi.studios@gmail.com",
                      link: "mailto:tbmi.studios@gmail.com",
                    },
                    {
                      Icon: FaPhone,
                      title: "Phone",
                      value: "+234 800 000 0000",
                      link: "tel:+234800000000",
                    },
                    {
                      Icon: FaWhatsapp,
                      title: "WhatsApp",
                      value: "+234 901 543 3132",
                      link: "https://wa.me/2349015433132",
                    },
                    {
                      Icon: FaMapMarkerAlt,
                      title: "Location",
                      value:
                        "1st Floor Damilat building, directly opposite First Bank, Aregbe junction, Osogbo-Osun state, Nigeria",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                          <item.Icon className="text-primary" size={24} />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-slate-400 hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-slate-400">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg font-bold mb-4 uppercase tracking-widest">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    {[
                      {
                        Icon: FaInstagram,
                        href: "https://www.instagram.com/tbmi.studios",
                        label: "Instagram",
                      },
                      {
                        Icon: FaYoutube,
                        href: "https://youtube.com/@tbmi.studios?si=uKyF59WfksURzOdg",
                        label: "YouTube",
                      },
                      {
                        Icon: FaTiktok,
                        href: "https://www.tiktok.com/@thebrooksmediaint",
                        label: "TikTok",
                      },
                    ].map((social, idx) => (
                      <motion.a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.Icon className="text-primary" size={24} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Quote Request Form */}
              <motion.div
                className="bg-surface border border-white/5 p-8 md:p-12"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {submitted ? (
                  <motion.div
                    className="h-full flex flex-col items-center justify-center text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="bg-primary/20 p-6 rounded-full mb-6"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.6 }}
                    >
                      <FaCheckCircle className="text-primary" size={64} />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-slate-400">
                      We've received your request and will get back to you
                      shortly with a quote.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <motion.div
                      className="space-y-6"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.div variants={itemVariants}>
                        <h2 className="text-2xl font-bold uppercase tracking-wider mb-2">
                          Request a Quote
                        </h2>
                        <p className="text-slate-500 text-sm">
                          Tell us about your project and we'll provide a
                          customized quote.
                        </p>
                      </motion.div>

                      {/* Full Name */}
                      <motion.div
                        className="flex flex-col gap-2"
                        variants={itemVariants}
                      >
                        <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                          Full Name
                        </label>
                        <motion.input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="w-full bg-[#222222] border-none text-white p-4 rounded-none input-focus-glow font-body"
                          whileFocus={{
                            boxShadow: "0 0 10px rgba(191, 58, 43, 0.4)",
                          }}
                        />
                      </motion.div>

                      {/* Email */}
                      <motion.div
                        className="flex flex-col gap-2"
                        variants={itemVariants}
                      >
                        <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                          Email Address
                        </label>
                        <motion.input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="w-full bg-[#222222] border-none text-white p-4 rounded-none input-focus-glow font-body"
                          whileFocus={{
                            boxShadow: "0 0 10px rgba(191, 58, 43, 0.4)",
                          }}
                        />
                      </motion.div>

                      {/* Phone */}
                      <motion.div
                        className="flex flex-col gap-2"
                        variants={itemVariants}
                      >
                        <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                          Phone Number
                        </label>
                        <div className="flex">
                          <span className="bg-primary/20 border-r border-primary/30 text-primary px-4 flex items-center text-sm font-bold">
                            +234
                          </span>
                          <motion.input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="800 000 0000"
                            required
                            className="w-full bg-[#222222] border-none text-white p-4 rounded-none input-focus-glow font-body"
                            whileFocus={{
                              boxShadow: "0 0 10px rgba(191, 58, 43, 0.4)",
                            }}
                          />
                        </div>
                      </motion.div>

                      {/* Service Type */}
                      <motion.div
                        className="flex flex-col gap-2"
                        variants={itemVariants}
                      >
                        <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                          Service Interested In
                        </label>
                        <motion.select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#222222] border-none text-white p-4 rounded-none input-focus-glow font-body appearance-none"
                        >
                          <option>Select a service</option>
                          <option>Film Making</option>
                          <option>Professional Photo Shoot</option>
                          <option>Content Creation</option>
                          <option>Podcast Production</option>
                          <option>Karaoke Services</option>
                          <option>Social Media Management</option>
                          <option>Studio Setup Consultation</option>
                          <option>Media Coverage</option>
                        </motion.select>
                      </motion.div>

                      {/* Message */}
                      <motion.div
                        className="flex flex-col gap-2"
                        variants={itemVariants}
                      >
                        <label className="text-xs uppercase font-bold text-slate-500 tracking-widest">
                          Project Details
                        </label>
                        <motion.textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project, timeline, and budget..."
                          rows={5}
                          required
                          className="w-full bg-[#222222] border-none text-white p-4 rounded-none input-focus-glow font-body resize-none"
                          whileFocus={{
                            boxShadow: "0 0 10px rgba(191, 58, 43, 0.4)",
                          }}
                        />
                      </motion.div>

                      {submitError && (
                        <motion.p
                          className="text-sm text-red-400"
                          variants={itemVariants}
                        >
                          {submitError}
                        </motion.p>
                      )}

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-display text-lg uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        variants={itemVariants}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                        <FaEnvelope size={20} />
                      </motion.button>
                    </motion.div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-r from-primary/10 to-primary/5 border-t border-primary/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl font-bold uppercase tracking-tighter mb-6"
            >
              Ready to Get <span className="text-primary">Started?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-slate-400 mb-8 font-light"
            >
              Submit your quote request above or check out our training programs
              if you'd like to learn from us.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all"
              onClick={() => (window.location.href = "/services")}
            >
              View All Services
            </motion.button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
