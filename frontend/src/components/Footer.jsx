import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Heart, Mail, Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-cyber-blue/20 bg-cyber-gray/30 backdrop-blur-sm">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,240,255,0.02)_50%,transparent_75%)] bg-[size:20px_20px]"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-cyber-dark" />
              </div>
              <span className="font-tech text-xl font-bold text-cyber-blue">
               Noba
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Building the future with code, creativity, and cutting-edge technology.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center space-x-4 mb-4">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Mail, href: '#', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-cyber-dark border border-cyber-blue/30 rounded-lg flex items-center justify-center text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Let's connect and build something amazing
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <div className="flex flex-wrap justify-center md:justify-end gap-4 mb-4">
              {['Projects', 'About', 'Certifications', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-cyber-blue transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple text-cyber-dark rounded-lg font-tech text-sm hover:scale-105 transition-transform">
              Get In Touch
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-cyber-blue/20 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-cyber-pink fill-current" />
            <span>by Noba • {currentYear}</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
