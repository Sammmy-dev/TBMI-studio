import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Home from './pages/Home'
import Enroll from './pages/Enroll'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Submissions from './pages/Submissions'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/submissions" element={<Submissions />} />
      </Routes>
      <Analytics />
    </Router>
  )
}
