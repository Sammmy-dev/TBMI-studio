import { motion } from 'framer-motion'

export default function Hero() {
  const services = [
    'Video Editing Training',
    'Photography Training',
    'Film Making',
    'Content Creation',
    'Podcasting',
    'Social Media Management',
    'Content Studio Setup',
    'Media Coverage',
    'Video Editing',
    'Photography',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center film-grain overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark z-0"></div>
      <motion.div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1554941829-202a0b2403b8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 0.8 }}
      ></motion.div>
      <motion.div
        className="relative z-10 max-w-5xl px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl font-bold leading-none tracking-tighter uppercase mb-6 text-glow"
        >
          Create. Produce.
          <br />
          <span className="text-primary">Transform Ideas Into Reality.</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light"
        >
          Your one-stop creative studio for video editing, photography, content
          creation, podcasting, and complete studio setup solutions.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/20 hover:bg-white/5 text-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] backdrop-blur-sm"
            onClick={() => (window.location.href = "/services")}
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/5 bg-background-dark/50 py-6 md:py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="hero-marquee">
          <div className="hero-marquee-track opacity-30">
            {[0, 1].map((groupIndex) => (
              <div key={groupIndex} className="hero-marquee-content" aria-hidden={groupIndex === 1}>
                {services.map((service) => (
                  <span key={`${groupIndex}-${service}`} className="hero-marquee-item">
                    {service}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
