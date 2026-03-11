import { motion } from 'framer-motion'

export default function Hero() {
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
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgWIC7_DPi3u0oRQ-NPMa6sil_3TMLyZFxJ7oVBqoXjZBpjrsu2Qg9CfSUxe_n8lnLDuH10bsTan9Z0xzDfGZ5aIGeIg00EU6Ur5VY_VTmU5r5D3kq7Cn1PtVIMM7xOi1MC4WoQ7Qs8pybdxlGnW8Lhr5kr4SUJTAKjVRS5C7QWT6gCIFReOH1bF9FxvX_LUhim8Ijvll1nJEoHDs4I9oqP2SODyxZqcg8eBLuJ53ulBMIeVqMI919354sMQQ_ZL3Skd4jtWSEvEYC')`,
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
        className="absolute bottom-0 left-0 w-full overflow-hidden py-10 border-t border-white/5 bg-background-dark/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex whitespace-nowrap gap-20 animate-marquee items-center opacity-30">
          <span className="text-2xl font-bold uppercase tracking-widest">
            Video Editing Training
          </span>
          <span className="text-2xl font-bold uppercase tracking-widest">
            Photography Training
          </span>
          <span className="text-2xl font-bold uppercase tracking-widest">
            Film Making
          </span>
          <span className="text-2xl font-bold uppercase tracking-widest">
            Content Creation
          </span>
          <span className="text-2xl font-bold uppercase tracking-widest">
            Podcasting
          </span>
          <span className="text-2xl font-bold uppercase tracking-widest">
            Social Media Management
          </span>
          <span className="text-2xl font-bold uppercase tracking-widest">
            Content Studio Setup
          </span>
          <span className="text-2xl font-bold uppercase tracking-widest">
            Media Coverage
          </span>
          <span className="text-2xl font-bold uppercase tracking-widest">
            Video Editing
          </span>
          <span className="text-2xl font-bold uppercase tracking-widest">
            Photography
          </span>
        </div>
      </motion.div>
    </section>
  );
}
