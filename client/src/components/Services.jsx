import React from "react"
import { motion } from 'framer-motion'
import { Video, Camera, Mic, Users, Palette, Lightbulb, Music, Share2, Settings, Film } from 'lucide-react'

function ServiceCard({ Icon, title, description, index }) {
  return (
    <motion.div 
      className="bg-surface p-8 group border border-white/5 hover:border-primary/50 transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(191, 58, 43, 0.2)' }}
    >
      <motion.div 
        className="mb-6 p-4 bg-primary/10 w-fit rounded-lg group-hover:bg-primary/20 transition-colors"
        whileHover={{ scale: 1.1 }}
      >
        <Icon className="text-primary" size={32} />
      </motion.div>
      <h3 className="text-xl font-bold uppercase mb-3 tracking-tight">{title}</h3>
      <p className="text-sm text-slate-400 font-light leading-relaxed">{description}</p>
      <motion.button 
        className="mt-6 bg-primary hover:bg-primary/80 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = '/services'}
      >
        Learn More
      </motion.button>
    </motion.div>
  )
}

const services = [
  {
    Icon: Video,
    title: "Video Editing Training",
    description: "Master professional video editing with Professional Software (Premiere Pro, CapCut Pro etc.), From basics to advanced techniques.",
    category: "training",
  },
  {
    Icon: Camera,
    title: "Photography Training",
    description: "Learn composition, lighting, and post-processing. Develop your eye for stunning visuals that tell powerful stories.",
    category: "training",
  },
  {
    Icon: Film,
    title: "Film Making",
    description: "Complete filmmaking services from concept to final cut. Scriptwriting, production, post-production, and distribution.",
    category: "production",
  },
  {
    Icon: Camera,
    title: "Photo Shoot",
    description: "Professional photography sessions for events, products, portraits, and corporate needs. Studio or on-location shoots.",
    category: "service",
  },
  {
    Icon: Lightbulb,
    title: "Content Creation",
    description: "Strategic content creation for brands. Social media content, YouTube videos, reels, and viral-worthy productions.",
    category: "service",
  },
  {
    Icon: Mic,
    title: "Podcast Production",
    description: "Full podcast production suite: recording, editing, mixing, mastering, and distribution to all major platforms.",
    category: "production",
  },
  {
    Icon: Music,
    title: "Karaoke",
    description: "Professional karaoke setups for events, parties, and corporate gatherings. Complete sound system and entertainment.",
    category: "service",
  },
  {
    Icon: Share2,
    title: "Social Media Management",
    description: "End-to-end social media strategy, content creation, posting, and community management across all platforms.",
    category: "service",
  },
  {
    Icon: Settings,
    title: "Content Studio Setup",
    description: "Turn your space into a professional studio. Consultation, equipment selection, installation, and training included.",
    category: "service",
  },
  {
    Icon: Users,
    title: "Media Coverage",
    description: "Professional media coverage and videography for events, conferences, and broadcasts. Live streaming available.",
    category: "production",
  },
]

export default function Services() {
  const [activeCategory, setActiveCategory] = React.useState("all")

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(s => s.category === activeCategory)

  return (
    <section className="py-32 bg-background-dark relative" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-slate-400">Complete creative solutions for your vision. From training to production.</p>
          </motion.div>
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <button
              onClick={() => setActiveCategory("all")}
              className={`text-xs uppercase font-bold tracking-[0.2em] px-4 py-2 border transition-all ${
                activeCategory === "all" 
                  ? "bg-primary text-white border-primary" 
                  : "border-white/20 text-slate-400 hover:text-white"
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveCategory("training")}
              className={`text-xs uppercase font-bold tracking-[0.2em] px-4 py-2 border transition-all ${
                activeCategory === "training" 
                  ? "bg-primary text-white border-primary" 
                  : "border-white/20 text-slate-400 hover:text-white"
              }`}
            >
              Training
            </button>
            <button
              onClick={() => setActiveCategory("production")}
              className={`text-xs uppercase font-bold tracking-[0.2em] px-4 py-2 border transition-all ${
                activeCategory === "production" 
                  ? "bg-primary text-white border-primary" 
                  : "border-white/20 text-slate-400 hover:text-white"
              }`}
            >
              Production
            </button>
            <button
              onClick={() => setActiveCategory("service")}
              className={`text-xs uppercase font-bold tracking-[0.2em] px-4 py-2 border transition-all ${
                activeCategory === "service" 
                  ? "bg-primary text-white border-primary" 
                  : "border-white/20 text-slate-400 hover:text-white"
              }`}
            >
              Services
            </button>
          </motion.div>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.06,
              },
            },
          }}
        >
          {filteredServices.map((service, index) => (
            <ServiceCard 
              key={service.title}
              Icon={service.Icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
