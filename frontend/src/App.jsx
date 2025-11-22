import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code2, Globe, MessageCircle, Video, User, Award, Send } from 'lucide-react'

// Components
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import VideoSection from './components/VideoSection'
import Footer from './components/Footer'
import ChatWidgets from './components/ChatWidgets'

function App() {
  const [projects, setProjects] = useState([])
  const [certifications, setCertifications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [projectsRes, certsRes] = await Promise.all([
        fetch('http://localhost:5000/api/projects'),
        fetch('http://localhost:5000/api/certifications')
      ])
      
      const projectsData = await projectsRes.json()
      const certsData = await certsRes.json()
      
      setProjects(projectsData)
      setCertifications(certsData)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-cyber-dark text-white font-main">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyber-dark via-cyber-gray to-cyber-dark opacity-50"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-blue/10 via-transparent to-transparent"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <VideoSection />
        <Projects projects={projects} loading={loading} />
        <Certifications certifications={certifications} loading={loading} />
        <Footer />
      </div>

      {/* Chat Widget */}
      <ChatWidgets />
    </div>
  )
}

export default App