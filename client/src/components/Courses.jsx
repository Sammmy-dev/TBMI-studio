import React from "react"
import { motion } from 'framer-motion'

function CourseCard({ image, title, description, price, isPopular, index }) {
  return (
    <motion.div 
      className="bg-surface overflow-hidden group border border-white/5 hover:border-primary/50 transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(191, 58, 43, 0.2)' }}
    >
      <div className="aspect-video bg-slate-800 relative overflow-hidden">
        <motion.img
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          src={image}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        {isPopular && (
          <motion.div 
            className="absolute top-4 right-4 bg-primary text-[10px] font-bold uppercase px-3 py-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Popular
          </motion.div>
        )}
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold uppercase mb-2">{title}</h3>
        <p className="text-sm text-slate-400 mb-6 font-light">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white">${price}</span>
          <motion.button 
            className="bg-primary hover:bg-primary/80 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

const courses = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaAwDjctdxbZaeGTGlHbrsb_2oQkZyZlx1_Z_ValkRVPO93GULDBGQoJsgxP2sgs61ZCXWITZBSattKnsN0vYIpW8ZhxHYOAAU6GEPhcHXm99-Lv3b7wppROdUt4tBs5m_SpBhe55qAewjzvKqCImlCQUQ1ky6BA8N3urHOc5rFKl8GNXuEgW4ZUzrLLTh3ZLv6LUtS3LKMhL2FJ9jjgDVcFsN1b3yOg6eTnAMZTDz7AaGEW58juTEHx5U94mrRTr7Xq9Mbd46az_a",
    title: "Premiere Pro Mastery",
    description: "From first cut to final export. The complete guide to professional storytelling.",
    price: 199,
    isPopular: true,
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4OskEwu8rFZsQYmUHt1Q-Re196D1GMQWdh_ei8Hsc5ht-10p7LQsVCQdjfyPi9BIwNfTLseqX2fRbGqC-fRRZ7WmhOJEbfxxbCh5KLhjlf4WBmPsHG1BPdY8jCHgfFj3wovAmvAQlqyArNHb56uowifptrdhHaB1uUMEoGvP-P5gc3FjCnTlVwnj-ej6WcFaZc1sErZOaD4Kyv1k26Mmak3dWKTh4ob79DuBlHAm1xWnN5k0CEkmZmvToBdi4he3hxUQz97lpCsTf",
    title: "Cinematic Color Grading",
    description: "Master DaVinci Resolve and learn the science behind movie-quality color.",
    price: 249,
    isPopular: false,
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4lIzLpRN_2W-ydVtSqYN_M54pEb8uBmhQaZ11B6AhCx0EKDXy0lFCQPa097ZiiCxqj9v1UxpkfyOPmckZQlOs5HFQkl1iWAP9Yx-EhpY0fcsHK0XrpuPOF2Ln22Nhej5fUnWSMOs7au_kQSF5ZZK0JtoMfdwcafRJ157oDx3zigeluP7rw3pusiMXLIsO_kZTXQI1o5-rB3Uw3NGVQUMG1CJEA0bhYFeoK3-ZSWBcj4msphuz6uAl25EbnDpJBImZH1_4VNrG8q45",
    title: "VFX & Motion Graphics",
    description: "Elevate your stories with high-end visual effects and dynamic motion typography.",
    price: 299,
    isPopular: false,
  },
]

export default function Courses() {
  const [activeTab, setActiveTab] = React.useState("all")

  return (
    <section className="py-32 bg-background-dark relative" id="courses">
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
              Our <span className="text-primary">Courses</span>
            </h2>
            <p className="text-slate-400">Master the tools of the trade with our specialized modules.</p>
          </motion.div>
          <motion.div 
            className="flex gap-4 border-b border-white/10 pb-2 overflow-x-auto"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <button
              onClick={() => setActiveTab("all")}
              className={`text-xs uppercase font-bold tracking-[0.2em] border-b-2 px-4 pb-2 ${
                activeTab === "all" ? "border-primary" : "border-transparent text-slate-500 hover:text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("beginner")}
              className={`text-xs uppercase font-bold tracking-[0.2em] border-b-2 px-4 pb-2 ${
                activeTab === "beginner" ? "border-primary" : "border-transparent text-slate-500 hover:text-white"
              }`}
            >
              Beginner
            </button>
            <button
              onClick={() => setActiveTab("advanced")}
              className={`text-xs uppercase font-bold tracking-[0.2em] border-b-2 px-4 pb-2 ${
                activeTab === "advanced" ? "border-primary" : "border-transparent text-slate-500 hover:text-white"
              }`}
            >
              Advanced
            </button>
          </motion.div>
        </motion.div>
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
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
