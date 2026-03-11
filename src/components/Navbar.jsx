import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          className="flex items-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.location.href = '/'}
        >
          <img
            alt="TBMI Logo"
            className="h-auto w-40"
            src="/tbmi-removebg-preview.png"
          />
        </motion.div>
        <div className="hidden md:flex items-center gap-10">
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1}}
            whileHover={{ color: '#bf3a2b' }}
            className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors cursor-pointer"
            onClick={() => window.location.href = '/'}
          >
            Home
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1}}
            whileHover={{ color: '#bf3a2b'}}
            className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors cursor-pointer"
            onClick={() => window.location.href = '/services'}
          >
            Services
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1}}
            whileHover={{ color: '#bf3a2b'}}
            className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors cursor-pointer"
            onClick={() => window.location.href = '/gallery'}
          >
            Gallery
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1}}
            whileHover={{ color: '#bf3a2b' }}
            className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors cursor-pointer"
            onClick={() => window.location.href = '/about'}
          >
            About
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            whileHover={{ color: '#bf3a2b' }}
            className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors cursor-pointer"
            onClick={() => window.location.href = '/contact'}
          >
            Contact
          </motion.a>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-primary transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>

        {/* Get Started Button (Desktop) */}
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2}}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-primary hover:bg-primary/90 text-white px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all"
          onClick={() => window.location.href = '/services'}
        >
          Get Started
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden border-t border-white/10 bg-background-dark/95"
      >
        <div className="px-6 py-4 space-y-4">
          <motion.a
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="block text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors cursor-pointer py-2"
            onClick={() => {
              window.location.href = '/'
              closeMenu()
            }}
          >
            Home
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="block text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors cursor-pointer py-2"
            onClick={() => {
              window.location.href = '/services'
              closeMenu()
            }}
          >
            Services
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="block text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors cursor-pointer py-2"
            onClick={() => {
              window.location.href = '/gallery'
              closeMenu()
            }}
          >
            Gallery
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="block text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors cursor-pointer py-2"
            onClick={() => {
              window.location.href = '/about'
              closeMenu()
            }}
          >
            About
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
            transition={{ duration: 0.2, delay: 0.25 }}
            className="block text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors cursor-pointer py-2"
            onClick={() => {
              window.location.href = '/contact'
              closeMenu()
            }}
          >
            Contact
          </motion.a>
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-xs font-bold uppercase tracking-widest transition-all mt-4"
            onClick={() => {
              window.location.href = '/services'
              closeMenu()
            }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  )
}
