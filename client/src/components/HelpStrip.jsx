import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'

export default function HelpStrip() {
  return (
    <section className="w-full bg-primary/10 border-y border-primary/20 py-8 px-6">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <h3 className="font-display text-2xl text-white uppercase tracking-wider">
            Need assistance with enrollment?
          </h3>
          <p className="text-slate-400">
            Our support team is available 24/7 to help you out.
          </p>
        </motion.div>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.button
            className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={20} />
            WhatsApp
          </motion.button>
          <motion.button
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={20} />
            Call Us
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
