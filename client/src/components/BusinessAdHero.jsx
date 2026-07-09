import { motion } from 'framer-motion'

export default function BusinessAdHero() {
  return (
    <section className="pt-16 pb-12 px-6 text-center">
      <motion.span
        className="inline-block py-1 px-3 bg-primary/10 text-primary font-space text-xs font-bold tracking-[0.2em] mb-4 uppercase"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Promote Your Business
      </motion.span>
      <motion.h1
        className="font-display text-5xl md:text-7xl text-white mb-4 uppercase leading-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Business Ad Video
      </motion.h1>
      <motion.p
        className="max-w-xl mx-auto text-slate-400 font-body text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Share your details and let us create a stunning ad video for your brand.
      </motion.p>
    </section>
  )
}