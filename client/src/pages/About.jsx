import { motion } from 'framer-motion'
import { CheckCircle, Award, Zap } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MissionCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      className="bg-surface p-8 border-l-4 border-primary"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ translateX: 10 }}
    >
      <div className="flex items-start gap-4">
        <Icon className="text-primary flex-shrink-0 mt-1" size={28} />
        <div>
          <h3 className="text-xl font-bold uppercase mb-2 tracking-tight">{title}</h3>
          <p className="text-slate-400 font-light leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

function TeamMember({ name, role, image }) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/30 hover:border-primary transition-colors">
        <img
          alt={name}
          className="w-full h-full object-cover"
          src={image}
        />
      </div>
      <h4 className="text-lg font-bold uppercase tracking-widest mb-1">{name}</h4>
      <p className="text-primary text-sm uppercase font-semibold">{role}</p>
    </motion.div>
  )
}

export default function About() {
  const missions = [
    {
      icon: CheckCircle,
      title: "Complete Creative Hub",
      description: "We're not just a training platform—we're a full-service creative studio offering training, production, and managed services.",
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Industry experts delivering world-class solutions in video editing, photography, filmmaking, content creation, and studio setup.",
    },
    {
      icon: Zap,
      title: "Empower Creators",
      description: "Whether you want to learn, hire us to produce, or get your studio setup, we've got solutions for every creative ambition.",
    },
  ]

  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & Lead Instructor",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAga1EXkMnNlXAaQQHeIskpVFe9QhoAH6EnAH4X0D3JUqvf1e7VsCXQX_BKsyKMsBaEKWaVWcuNso-IAtBv2Ytq-803P7Oduerz7uq4PEVGl7MmO0RAT6GUufPytLWi-ZmDRlDrtmscxJIp4-FC0vMRGkHZNS_2Ag9rzqWoyADWqU6xrHXMqPDHSX2tZLXVD43X9NHTREyBRzk9SSQqcUY1SkJFuLaRPKhrm4fFQBxKob4E9EI3bb7cth4GV2laq3r2ESh8DmW83XUd",
    },
    {
      name: "Jordan Hayes",
      role: "DaVinci Specialist",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAga1EXkMnNlXAaQQHeIskpVFe9QhoAH6EnAH4X0D3JUqvf1e7VsCXQX_BKsyKMsBaEKWaVWcuNso-IAtBv2Ytq-803P7Oduerz7uq4PEVGl7MmO0RAT6GUufPytLWi-ZmDRlDrtmscxJIp4-FC0vMRGkHZNS_2Ag9rzqWoyADWqU6xrHXMqPDHSX2tZLXVD43X9NHTREyBRzk9SSQqcUY1SkJFuLaRPKhrm4fFQBxKob4E9EI3bb7cth4GV2laq3r2ESh8DmW83XUd",
    },
    {
      name: "Sam Pierce",
      role: "Premiere Pro Expert",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAga1EXkMnNlXAaQQHeIskpVFe9QhoAH6EnAH4X0D3JUqvf1e7VsCXQX_BKsyKMsBaEKWaVWcuNso-IAtBv2Ytq-803P7Oduerz7uq4PEVGl7MmO0RAT6GUufPytLWi-ZmDRlDrtmscxJIp4-FC0vMRGkHZNS_2Ag9rzqWoyADWqU6xrHXMqPDHSX2tZLXVD43X9NHTREyBRzk9SSQqcUY1SkJFuLaRPKhrm4fFQBxKob4E9EI3bb7cth4GV2laq3r2ESh8DmW83XUd",
    },
  ]

  return (
    <div className="dark bg-background-dark dark:text-slate-100">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-0 overflow-hidden">
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
                Our Story
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-6"
            >
              About <span className="text-primary">TBMI Studios</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Your one-stop creative studio providing professional training, content production, and studio solutions for creators, brands, and organizations.
            </motion.p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-32 bg-background-dark">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">
                Our <span className="text-primary">Mission</span>
              </h2>
              <div className="w-20 h-1 bg-primary"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {missions.map((mission, index) => (
                <MissionCard
                  key={index}
                  icon={mission.icon}
                  title={mission.title}
                  description={mission.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-32 bg-surface">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h2 className="text-4xl font-bold uppercase tracking-tighter mb-12">
                How We <span className="text-primary">Started</span>
              </h2>

              <div className="space-y-6 text-slate-400 font-light leading-relaxed text-lg">
                <p>
                  TBMI Studios began as a video editing training platform, but we quickly realized our clients needed more. Creators weren't just looking for education—they needed complete solutions: professional production, content strategy, equipment, and ongoing support.
                </p>

                <p>
                  What started in 2019 as a single editing course has evolved into a comprehensive creative studio. We now offer 10 core services: video editing training, photography training, filmmaking, professional photo shoots, content creation, podcast production, karaoke services, social media management, media coverage, and complete studio setup consultation.
                </p>

                <p>
                  Whether you're an aspiring creator looking to learn, a brand needing professional content, or a business wanting to set up an in-house studio, TBMI Studios is your partner. We've trained over 2,000 creators, produced hundreds of projects, and equipped dozens of studios across the region.
                </p>

                <p>
                  Today, TBMI Studios stands as the premier creative hub in the industry, dedicated to transforming ideas into professional-grade reality through education, production, and innovation.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 bg-background-dark">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">
                Our <span className="text-primary">Values</span>
              </h2>
              <div className="w-20 h-1 bg-primary"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Quality Delivery",
                  description: "Every project, course, and solution meets the highest professional standards. Excellence isn't negotiable.",
                },
                {
                  title: "Creative Partnership",
                  description: "We don't just provide services—we become partners in your creative journey, invested in your success.",
                },
                {
                  title: "Accessibility",
                  description: "Professional-grade creative solutions should be accessible. We make it possible for everyone to create at the highest level.",
                },
                {
                  title: "Innovation",
                  description: "We stay ahead of industry trends and continuously evolve our services to meet the changing creative landscape.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-card-dark p-8 border border-primary/20 hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-2xl font-bold uppercase mb-4 tracking-wider">{value.title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-32 bg-surface">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="mb-20 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">
                Meet Our <span className="text-primary">Team</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-16">
              {team.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                />
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-r from-primary/10 to-primary/5 border-y border-primary/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-4xl font-bold uppercase tracking-tighter mb-6"
            >
              Ready to Bring Your <span className="text-primary">Creative Vision to Life?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-xl text-slate-400 mb-8 font-light"
            >
              Whether you want to learn, get professional production, or set up your studio, we have the solution.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all"
              onClick={() => window.location.href = '/services'}
            >
              Explore Our Services
            </motion.button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
