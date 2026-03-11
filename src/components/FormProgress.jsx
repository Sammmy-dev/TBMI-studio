import { motion } from 'framer-motion'

export default function FormProgress({ currentStep = 1 }) {
  const steps = [
    { number: 1, label: 'Info' },
    { number: 2, label: 'Course' },
    { number: 3, label: 'Review' },
  ]

  return (
    <div className="p-8 border-b border-border-dark bg-black/20">
      <div className="flex justify-between items-center relative">
        {/* Progress line */}
        <div className="absolute top-5 left-0 w-full h-[2px] bg-border-dark -z-0"></div>

        {/* Steps */}
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="flex flex-col items-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <motion.div
              className={`size-10 rounded-full flex items-center justify-center font-bold shadow-lg ${
                step.number <= currentStep
                  ? 'bg-gradient-to-br from-primary to-accent text-white shadow-primary/20'
                  : 'bg-[#333333] border border-border-dark text-slate-500'
              }`}
              animate={{
                boxShadow:
                  step.number <= currentStep
                    ? '0 0 20px rgba(191, 58, 43, 0.4)'
                    : 'none',
              }}
              transition={{ duration: 0.3 }}
            >
              {step.number}
            </motion.div>
            <motion.span
              className={`mt-2 text-[10px] uppercase font-bold tracking-widest ${
                step.number <= currentStep ? 'text-primary' : 'text-slate-500'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            >
              {step.label}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
