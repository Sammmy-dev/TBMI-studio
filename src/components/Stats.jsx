import { motion } from 'framer-motion'

function StatCard({ number, label, index }) {
  return (
    <motion.div 
      className="flex flex-col items-center md:items-start md:border-l md:border-primary pl-0 md:pl-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.span 
        className="text-4xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {number}
      </motion.span>
      <motion.span 
        className="text-xs uppercase tracking-widest text-slate-500 font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {label}
      </motion.span>
    </motion.div>
  )
}

const stats = [
  { number: "1600+", label: "Creators Trained" },
  { number: "200+", label: "Projects Completed" },
  { number: "70+", label: "Brands Served" },
  { number: "10", label: "Services Offered" },
]

export default function Stats() {
  return (
    <section className="py-24 bg-background-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
