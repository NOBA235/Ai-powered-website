import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Cpu, Database, GitBranch, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Floating Tech Elements */}
      <motion.div
        className="absolute top-20 left-20 text-blue-400 opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Cpu size={32} />
      </motion.div>
      <motion.div
        className="absolute top-40 right-32 text-green-400 opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <Database size={32} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-32 text-purple-400 opacity-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      >
        <GitBranch size={32} />
      </motion.div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-[100px] opacity-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px] opacity-10"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Professional Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-mono">Available for new projects</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Noba
          </motion.h1>

          {/* Typing Animation Subtitle */}
          <motion.div
            className="text-xl md:text-2xl text-slate-400 mb-8 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <span className="text-green-400">&gt; </span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
              className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-green-400"
            >
              Full-Stack Engineer & AI Specialist
            </motion.span>
          </motion.div>

          {/* Tech Stack */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            {['React', 'JavaScript', 'Node.js', 'Python', 'Express', 'AWS'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 font-mono text-sm"
                whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Professional Description */}
          <motion.p 
            className="text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
          >
            Building scalable, high-performance applications with modern technologies. 
            Passionate about solving complex problems through clean architecture and innovative AI solutions.
          </motion.p>

          {/* Professional CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <motion.button 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 border border-blue-500 hover:border-blue-400 flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Code2 className="w-5 h-5" />
              View Portfolio
            </motion.button>
            
            <motion.button 
              className="px-8 py-4 border-2 border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="w-5 h-5" />
              Start a Project
            </motion.button>
          </motion.div>

          {/* Social Proof / Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-slate-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            {[
              { value: '2+', label: 'Years Experience' },
              { value: '200+', label: 'Projects Delivered' },
              
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-white font-mono"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2 + index * 0.2, duration: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero