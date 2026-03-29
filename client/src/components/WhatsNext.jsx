import { motion } from 'framer-motion'
import { ClipboardCheck, Phone, Building } from 'lucide-react'

const steps = [
  {
    Icon: ClipboardCheck,
    title: 'Review',
    description: 'Our team reviews your application within 12 hours.',
  },
  {
    Icon: Phone,
    title: 'Onboarding Call',
    description: 'A quick chat to confirm your goals and schedule.',
  },
  {
    Icon: Building,
    title: 'Class Access',
    description: 'Get your keys to the studio and start learning.',
  },
]

function StepCard({ Icon, title, description, index }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center relative z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.div
        className="size-24 rounded-full bg-card-dark border border-primary flex items-center justify-center text-primary mb-6 shadow-[0_0_20px_rgba(191,58,43,0.2)]"
        whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(191,58,43,0.4)' }}
        transition={{ duration: 0.3 }}
      >
        <Icon size={40} />
      </motion.div>
      <h4 className="text-white font-display text-xl uppercase mb-2">{title}</h4>
      <p className="text-slate-500 text-sm">{description}</p>
    </motion.div>
  )
}

export default function WhatsNext() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 border-t border-border-dark">
      <motion.h3
        className="font-display text-3xl text-center text-white mb-16 uppercase tracking-widest"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        What Happens Next
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {/* Connectors for Desktop */}
        <motion.div
          className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] border-t border-dashed border-primary/40 -z-0"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          style={{ originX: 0 }}
        ></motion.div>

        {steps.map((step, index) => (
          <StepCard key={index} {...step} index={index} />
        ))}
      </div>
    </section>
  )
}
