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
    quote: "TBMI Studios helped us launch our YouTube channel with professional production quality. Their content creation service is absolutely game-changing.",
    author: "Sarah Jenkins",
    role: "Content Creator & YouTuber",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAga1EXkMnNlXAaQQHeIskpVFe9QhoAH6EnAH4X0D3JUqvf1e7VsCXQX_BKsyKMsBaEKWaVWcuNso-IAtBv2Ytq-803P7Oduerz7uq4PEVGl7MmO0RAT6GUufPytLWi-ZmDRlDrtmscxJIp4-FC0vMRGkHZNS_2Ag9rzqWoyADWqU6xrHXMqPDHSX2tZLXVD43X9NHTREyBRzk9SSQqcUY1SkJFuLaRPKhrm4fFQBxKob4E9EI3bb7cth4GV2laq3r2ESh8DmW83XUd",
  },
  {
    quote: "Their studio setup consultation was invaluable. They helped us build a professional podcast studio from scratch, and the results speak for themselves.",
    author: "David Chen",
    role: "Podcast Producer",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjzAh3JORnxVa8FNXGytOwEAx_cThJEVrfjSOBe0Tg88tKH0c1zkR9w5mUcXKJvxWiJEW-7tbGNMRBbk_HpIgdx9yfodf5U1whuaHE4RJLqrYIVrZj0Lv4C-3iCHDqPrm5mCw7An3sfHA1mgnekeqQ_gKkhhbXDgB0OLDElsJ-PHaS5BBwgJr72J6YkNLian4AzPqJl6j-1wyVGbYBHJb7BKcbNkEWfuZKcKAT3o0VgIcICx1sB-zXdyv41AoECHZDqxVRqPkJMzHW",
  },
  {
    quote: "Their photography training combined with their professional photo shoot service made our product launch perfect. Highly recommended!",
    author: "Marcus Reed",
    role: "E-commerce Brand Owner",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6Sitnr2fVDoGb0mLFfDzKJXiaFsEpo1vJ9ATAa4jk6Ytp6TiSZWbKemhyU2yZS26YdOC8MB2s3L6-QK6n8u02HDeN5RuDCehPF-zAwQKmxFWML6RggBHFHErUQONAOWsCLXOQ4vZnWO1hFLJbBXZ6yupMv1ITGwkh1lYVDQbx6b8iD7xcjm6r1nQ-Qyqx0Wmnc8-Xpwv-kv9i0XSAh_YbFJp72ITHDByCHccMmWmQoGWtIEjlWiam7HbXKqYmjDI0tEdUgztnCXEh",
  },
]

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
