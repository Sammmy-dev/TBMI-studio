import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Transform Your Creative
          <br />
          Vision Into Reality
        </motion.h2>
        <motion.p 
          className="text-white/80 max-w-xl mx-auto mb-12 font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Whether you want to learn, get professional production, or set up your studio—we have the solution.
        </motion.p>
        <motion.button 
          className="bg-white text-primary hover:bg-slate-100 px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] transition-all shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/enroll'}
          viewport={{ once: true, margin: '-100px' }}
        >
          Enroll Today
        </motion.button>
      </div>
    </section>
  )
}
