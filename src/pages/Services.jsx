import { motion } from 'framer-motion'
import { Video, Camera, Mic, Users, Palette, Lightbulb, Music, Share2, Settings, Film, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ServiceCard({ Icon, title, description, features, index, buttonText = "Get Started", buttonAction = '/enroll' }) {
  const handleButtonClick = () => {
    if (typeof buttonAction === 'function') {
      buttonAction()
    } else {
      window.location.href = buttonAction
    }
  }

  return (
    <motion.div
      className="bg-surface p-8 border border-white/5 hover:border-primary/50 transition-all group"
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
        <Icon className="text-primary" size={36} />
      </motion.div>

      <h3 className="text-2xl font-bold uppercase mb-3 tracking-tight">{title}</h3>
      <p className="text-slate-400 font-light leading-relaxed mb-6">{description}</p>

      <div className="mb-6">
        <h4 className="text-sm uppercase font-bold text-primary mb-3 tracking-widest">What's Included</h4>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
              <ArrowRight size={14} className="text-primary flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <motion.button
        className="bg-primary hover:bg-primary/80 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors w-full"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleButtonClick}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  )
}

export default function Services() {
  const services = [
    {
      Icon: Video,
      title: "Video Editing Training",
      description: "Master professional video editing with industry-standard tools and techniques.",
      features: [
        "Premiere Pro & DaVinci Resolve mastery",
        "Advanced color grading techniques",
        "Motion graphics and effects",
        "Real-world project workflows",
        "Portfolio building assistance",
      ],
    },
    {
      Icon: Camera,
      title: "Photography Training",
      description: "Develop your photography skills from composition to post-processing.",
      features: [
        "Camera fundamentals and settings",
        "Composition and lighting theory",
        "Portrait and landscape techniques",
        "Post-processing workflows",
        "Building a photography portfolio",
      ],
    },
    {
      Icon: Film,
      title: "Film Making",
      description: "Complete filmmaking services from concept to distribution.",
      features: [
        "Scriptwriting and storyboarding",
        "Pre-production planning",
        "Professional production crew",
        "Post-production editing",
        "Distribution strategy",
      ],
    },
    {
      Icon: Camera,
      title: "Professional Photo Shoot",
      description: "High-quality photography sessions for all occasions and purposes.",
      features: [
        "Studio or on-location shoots",
        "Professional lighting setup",
        "Candid and posed photography",
        "Digital color corrections",
        "Fast turnaround delivery",
      ],
    },
    {
      Icon: Lightbulb,
      title: "Content Creation",
      description: "Strategic content creation tailored to your brand and audience.",
      features: [
        "Content planning and strategy",
        "Video production for social media",
        "YouTube-ready content",
        "Reels and short-form videos",
        "Brand storytelling",
      ],
    },
    {
      Icon: Mic,
      title: "Podcast Production",
      description: "Full-service podcast production from recording to distribution.",
      features: [
        "Professional recording setup",
        "Audio editing and mixing",
        "Mastering and loudness optimization",
        "Distribution to all platforms",
        "Graphic design for episodes",
      ],
    },
    {
      Icon: Music,
      title: "Karaoke Services",
      description: "Professional karaoke setups for events, parties, and corporate functions.",
      features: [
        "Professional sound system rental",
        "Karaoke track library (10,000+)",
        "Sound technician support",
        "Lighting options available",
        "Event coordination",
      ],
    },
    {
      Icon: Share2,
      title: "Social Media Management",
      description: "Complete social media strategy, content, and community management.",
      features: [
        "Content calendar planning",
        "Daily posting schedule",
        "Community engagement",
        "Analytics and reporting",
        "Growth strategy optimization",
      ],
    },
    {
      Icon: Settings,
      title: "Studio Setup Consultation",
      description: "Professional guidance for setting up your creative studio.",
      features: [
        "Space planning and layout",
        "Equipment recommendations",
        "Installation and setup",
        "Acoustic treatment advice",
        "Training on your equipment",
      ],
    },
    {
      Icon: Users,
      title: "Media Coverage",
      description: "Professional media coverage and videography for your events.",
      features: [
        "Event videography",
        "Multi-camera setup",
        "Live streaming capabilities",
        "Post-event editing",
        "Highlight reel creation",
      ],
    },
  ]

  return (
    <div className="dark bg-background-dark dark:text-slate-100">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-20 overflow-hidden">
          <motion.div
            className="absolute inset-0 -z-10 opacity-20"
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(191, 58, 43, 0.3), transparent 70%)',
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
                What We Offer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-6"
            >
              Our <span className="text-primary">Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Comprehensive creative solutions covering training, production, and studio services to elevate your creative journey.
            </motion.p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-surface border-b border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h2 className="text-3xl font-bold uppercase mb-6 tracking-tight">
                Everything You Need to Create <span className="text-primary">Professionally</span>
              </h2>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                TBMI Studios offers 10 core services designed to meet every creative need. Whether you're looking to learn, hire us for production, or get your studio equipped, we have the expertise and experience to deliver exceptional results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32 bg-background-dark">
          <div className="max-w-7xl mx-auto px-6">
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
              {services.map((service, index) => {
                const isTraining = service.title.includes('Training')
                const buttonText = isTraining ? 'Enroll Now' : 'Hire Us'
                const buttonAction = isTraining ? '/enroll' : '/contact'

                return (
                  <ServiceCard
                    key={service.title}
                    Icon={service.Icon}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                    index={index}
                    buttonText={buttonText}
                    buttonAction={buttonAction}
                  />
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Service Categories Section */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="mb-20 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">
                Service <span className="text-primary">Categories</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Our services are organized into three main categories to help you find exactly what you need.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  category: "Training",
                  services: ["Video Editing Training", "Photography Training"],
                  description: "Learn from industry experts through hands-on training programs designed for all skill levels.",
                  Icon: Video,
                },
                {
                  category: "Production",
                  services: ["Film Making", "Podcast Production", "Media Coverage"],
                  description: "Professional production services that bring your creative vision to life with expert execution.",
                  Icon: Film,
                },
                {
                  category: "Services",
                  services: ["Photo Shoot", "Content Creation", "Social Media Management", "Studio Setup", "Karaoke"],
                  description: "Complete service offerings from content creation to event support and technical setup.",
                  Icon: Settings,
                },
              ].map((cat, idx) => (
                <motion.div
                  key={cat.category}
                  className="bg-background-dark border border-primary/20 p-8 hover:border-primary/50 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="mb-4 p-3 bg-primary/10 w-fit rounded-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <cat.Icon className="text-primary" size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-bold uppercase mb-3 tracking-tight">{cat.category}</h3>
                  <p className="text-slate-400 font-light mb-6">{cat.description}</p>
                  <ul className="space-y-2">
                    {cat.services.map((service) => (
                      <li key={service} className="flex items-center gap-2 text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 bg-background-dark border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="mb-20 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">
                How We <span className="text-primary">Work</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Our streamlined process ensures quality, transparency, and results at every step.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6 relative">
              {[
                { step: "Consultation", desc: "Initial discussion to understand your needs and goals" },
                { step: "Planning", desc: "Detailed strategy and timeline for your project" },
                { step: "Execution", desc: "Professional team delivers your service with excellence" },
                { step: "Delivery", desc: "Final handoff with support and training" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                    {idx + 1}
                  </div>
                  <h4 className="text-lg font-bold uppercase text-center mb-2 tracking-tight">{item.step}</h4>
                  <p className="text-sm text-slate-400 text-center font-light">{item.desc}</p>
                </motion.div>
              ))}
              <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary to-transparent -z-0" />
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
              viewport={{ once: true, margin: '-100px' }}
              className="text-4xl font-bold uppercase tracking-tighter mb-6"
            >
              Find Your Perfect <span className="text-primary">Service</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-xl text-slate-400 mb-8 font-light"
            >
              Ready to get started? Enroll in a training program, book a service, or contact us for custom solutions.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all"
              onClick={() => window.location.href = '/enroll'}
            >
              Enroll Now
            </motion.button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
