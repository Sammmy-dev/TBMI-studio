import { motion } from 'framer-motion'
import { Grid, List } from 'lucide-react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function GalleryImage({ image, category, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden aspect-square cursor-pointer group"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, margin: '-100px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <img
        alt="Gallery item"
        className="w-full h-full object-cover"
        src={image}
      />
      <motion.div
        className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="bg-primary text-white px-4 py-1 text-xs uppercase font-semibold tracking-widest">
          {category}
        </span>
      </motion.div>
    </motion.div>
  )
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')

  const galleryItems = [
    { id: 1, image: '/IMG-20260228-WA0012.jpg.jpeg', category: 'photography' },
    { id: 2, image: '/IMG-20260228-WA0015.jpg.jpeg', category: 'photography' },
    { id: 3, image: '/IMG-20260228-WA0017.jpg.jpeg', category: 'photography' },
    { id: 5, image: '/TBM_831.jpeg', category: 'photography' },
    { id: 6, image: '/TBM_832.jpeg', category: 'photography' },
    { id: 7, image: '/TBM_833.jpeg', category: 'photography' },
    { id: 8, image: '/TBM_834.jpeg', category: 'photography' },
    { id: 9, image: '/TBM_835.jpeg', category: 'photography' },
    { id: 10, image: '/TBM_836.jpeg', category: 'photography' },
    { id: 11, image: '/TBM_837.jpeg', category: 'photography' },
    { id: 13, image: '/Untitled-03.jpg.jpeg', category: 'photography' },
    { id: 14, image: '/Untitled-05.jpg.jpeg', category: 'photography' },
    { id: 15, image: '/Untitled-06.jpg.jpeg', category: 'photography' },
    { id: 16, image: '/Untitled-09.jpg.jpeg', category: 'photography' },
    { id: 17, image: '/Untitled-10.jpg.jpeg', category: 'photography' },
    { id: 18, image: '/Untitled-13.jpg.jpeg', category: 'photography' },
    { id: 19, image: '/Untitled-14.jpg.jpeg', category: 'photography' },
    { id: 20, image: '/Untitled-15.jpg.jpeg', category: 'photography' },
    { id: 22, image: '/Untitled-16.jpg.jpeg', category: 'photography' },
    { id: 23, image: '/Untitled-01.jpg.jpeg', category: 'photography' },
  ]

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'photography', label: 'Photography' },
    { id: 'podcast', label: 'Podcast' },
    { id: 'studio-setup', label: 'Studio Setup' },
  ]

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

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
                Our Work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-6"
            >
              Project <span className="text-primary">Gallery</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Explore our portfolio of professional productions, creative content, and studio setups across all service categories.
            </motion.p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-background-dark border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2 text-xs uppercase font-bold tracking-widest border transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary border-primary text-white'
                      : 'border-white/20 text-slate-400 hover:text-white hover:border-white/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-32 bg-background-dark">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {filteredItems.map((item, index) => (
                <GalleryImage
                  key={item.id}
                  image={item.image}
                  category={item.category}
                  index={index}
                />
              ))}
            </motion.div>
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
              Ready to Create <span className="text-primary">Your Next Project?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-xl text-slate-400 mb-8 font-light"
            >
              Let's work together to bring your creative vision to life.
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
              Start Your Project
            </motion.button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
