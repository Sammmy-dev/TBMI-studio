import { motion } from 'framer-motion'
import { Grid, List } from 'lucide-react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function GalleryImage({ image, title, category, index }) {
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
        alt={title}
        className="w-full h-full object-cover"
        src={image}
      />
      <motion.div
        className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-white font-bold uppercase text-lg tracking-wide mb-2">{title}</h3>
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
    {
      id: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaAwDjctdxbZaeGTGlHbrsb_2oQkZyZlx1_Z_ValkRVPO93GULDBGQoJsgxP2sgs61ZCXWITZBSattKnsN0vYIpW8ZhxHYOAAU6GEPhcHXm99-Lv3b7wppROdUt4tBs5m_SpBhe55qAewjzvKqCImlCQUQ1ky6BA8N3urHOc5rFKl8GNXuEgW4ZUzrLLTh3ZLv6LUtS3LKMhL2FJ9jjgDVcFsN1b3yOg6eTnAMZTDz7AaGEW58juTEHx5U94mrRTr7Xq9Mbd46az_a',
      title: 'Cinematic Montage',
      category: 'video-editing',
    },
    {
      id: 2,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4OskEwu8rFZsQYmUHt1Q-Re196D1GMQWdh_ei8Hsc5ht-10p7LQsVCQdjfyPi9BIwNfTLseqX2fRbGqC-fRRZ7WmhOJEbfxxbCh5KLhjlf4WBmPsHG1BPdY8jCHgfFj3wovAmvAQlqyArNHb56uowifptrdhHaB1uUMEoGvP-P5gc3FjCnTlVwnj-ej6WcFaZc1sErZOaD4Kyv1k26Mmak3dWKTh4ob79DuBlHAm1xWnN5k0CEkmZmvToBdi4he3hxUQz97lpCsTf',
      title: 'Product Photography',
      category: 'photography',
    },
    {
      id: 3,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4lIzLpRN_2W-ydVtSqYN_M54pEb8uBmhQaZ11B6AhCx0EKDXy0lFCQPa097ZiiCxqj9v1UxpkfyOPmckZQlOs5HFQkl1iWAP9Yx-EhpY0fcsHK0XrpuPOF2Ln22Nhej5fUnWSMOs7au_kQSF5ZZK0JtoMfdwcafRJ157oDx3zigeluP7rw3pusiMXLIsO_kZTXQI1o5-rB3Uw3NGVQUMG1CJEA0bhYFeoK3-ZSWBcj4msphuz6uAl25EbnDpJBImZH1_4VNrG8q45',
      title: 'Motion Graphics Design',
      category: 'video-editing',
    },
    {
      id: 4,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgWIC7_DPi3u0oRQ-NPMa6sil_3TMLyZFxJ7oVBqoXjZBpjrsu2Qg9CfSUxe_n8lnLDuH10bsTan9Z0xzDfGZ5aIGeIg00EU6Ur5VY_VTmU5r5D3kq7Cn1PtVIMM7xOi1MC4WoQ7Qs8pybdxlGnW8Lhr5kr4SUJTAKjVRS5C7QWT6gCIFReOH1bF9FxvX_LUhim8Ijvll1nJEoHDs4I9oqP2SODyxZqcg8eBLuJ53ulBMIeVqMI919354sMQQ_ZL3Skd4jtWSEvEYC',
      title: 'Film Production',
      category: 'filmmaking',
    },
    {
      id: 5,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo1niMkbmAaoiSqt_FoyRzelEH8rGdZwVTtUanfelOb193QitR-agdqKG9lsPQV2yItVKbX_RmwPpb1ZH714s1S3-8YaMOjOPZlIaNGiVHk-hsL1H10e3jjEruHDbWP2rKtCWAZQxvyYKUXithUVYkcU1aUcHHxuyk3iplEqUKtSf4Ni5BcpChKtdPcZvsp1UcrXTV7S_ivHxDgJ01-R7lIKxu0yXU8i0ERSrlZPXiIpUjucCmD8-UfWv69Uy0NSPK3aSzu0DB7VOj',
      title: 'Portrait Photography',
      category: 'photography',
    },
    {
      id: 6,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD-65YvWu5HOFu3tOf3YcLFv0JK42ye2GnTkfX2kgTeeADa39cJuudB49cQ39K4GbUFJ8mgOja6SHysdGg3hJyYGr-_Xppu8_1YFDNJhgVeJ4KjXzsW-039yRrhhdno2LtscUoxNaLZvLD2CQGGMs98hxkTG4C_XBZn0efcJWlunci7Sej2cTFupAi8Q4oaiV5abtGlhHygdIf6dKP-3IpzhsEr75ArJt8Gmm9Hutwa47mxQmEy3I2amDt-0i3YRMdfrqC0JIQ1Y9Y',
      title: 'Podcast Studio',
      category: 'podcast',
    },
    {
      id: 7,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgeh9QX0h8S-SBSUJ4gG5CaWfbpSxvX9oKtHdgx1DwKuNrD6BxKXq_3CdZgxP3lcfV6ALZ3gdRKaoxy23rqc--FOk2dEQVgA1qdCe05MdZW1B09WBJ9LuAryDo_gN1MXGE5oKJ9PmC3QXvjZxZ_3ahQq8CkWKFZtIzGl09gJrCFheqmDWJ8zcqFN2f8HAekJgLbBTZYmfAr5DJarnJ1XtL7N0MQpLRW3XE5VTHFghs3VDa_pxKdEgaxZAaTwjyjFSOq_anvvixFgRV',
      title: 'Content Creation Setup',
      category: 'studio-setup',
    },
    {
      id: 8,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjzAh3JORnxVa8FNXGytOwEAx_cThJEVrfjSOBe0Tg88tKH0c1zkR9w5mUcXKJvxWiJEW-7tbGNMRBbk_HpIgdx9yfodf5U1whuaHE4RJLqrYIVrZj0Lv4C-3iCHDqPrm5mCw7An3sfHA1mgnekeqQ_gKkhhbXDgB0OLDElsJ-PHaS5BBwgJr72J6YkNLian4AzPqJl6j-1wyVGbYBHJb7BKcbNkEWfuZKcKAT3o0VgIcICx1sB-zXdyv41AoECHZDqxVRqPkJMzHW',
      title: 'Color Grading Showcase',
      category: 'video-editing',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'video-editing', label: 'Video Editing' },
    { id: 'photography', label: 'Photography' },
    { id: 'filmmaking', label: 'Film Making' },
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
                  title={item.title}
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
