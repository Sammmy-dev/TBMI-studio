import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

function TestimonialCard({ quote, author, role, image, index }) {
  return (
    <motion.div 
      className="bg-surface p-10 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(191, 58, 43, 0.1)' }}
    >
      <motion.div 
        className="text-primary/20 absolute top-4 right-8"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <Quote size={56} fill="currentColor" />
      </motion.div>
      <motion.div 
        className="flex gap-1 text-primary mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
      </motion.div>
      <motion.p 
        className="text-slate-300 italic mb-8 font-light leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        "{quote}"
      </motion.p>
      <motion.div 
        className="flex items-center gap-4"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden">
          <img alt={author} className="w-full h-full object-cover" src={image} />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest">{author}</p>
          <p className="text-[10px] text-slate-500 uppercase">{role}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

const testimonials = [
  {
    quote:
      "TBMI Studios helped us launch our YouTube channel with professional production quality. Their content creation service is absolutely game-changing.",
    author: "Sarah Johnson",
    role: "Content Creator & YouTuber",
    image: "/Untitled-17.jpg.jpeg",
  },
  {
    quote:
      "Their studio setup consultation was invaluable. They helped us build a professional podcast studio from scratch, and the results speak for themselves.",
    author: "Grace Okafor",
    role: "Podcast Producer",
    image: "/Untitled-18.jpg.jpeg",
  },
  {
    quote:
      "Their photography training combined with their professional photo shoot service made our product launch perfect. Highly recommended!",
    author: "Oluwatosin Adeyemi",
    role: "E-commerce Brand Owner",
    image: "/Untitled-19.jpg.jpeg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
