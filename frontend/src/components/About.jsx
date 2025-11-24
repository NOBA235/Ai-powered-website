import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Code2, Users, Database, Cloud, Terminal, Server } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Code2, number: '200+', label: 'Projects Completed' },
    { icon: Users, number: '2+', label: 'Years Experience' },   
    { icon: Cpu, number: '24/7', label: 'Code Enthusiasm' }
  ]

  return (
    <section id="about" className="py-20 bg-slate-50 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Floating Tech Icons */}

      <motion.div
        className="absolute top-20 right-20 text-blue-400 opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Terminal size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-gray-600 opacity-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <Server size={40} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Title */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              ABOUT ME
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Full-Stack Developer & AI Enthusiast , Aspiring Software Engineer
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I'm Noba, a dedicated full-stack developer with a passion for creating 
              innovative digital solutions. My journey in tech is driven by curiosity and 
              the desire to build applications that make a difference.
              I started my coding journey during my 10th standard and it came from my curiosity to build something that could 
              solve problems and it has become my biggest passion.
              
              I'm continuosly learning and exploring new technologies every day.
              When i'm not coding I can be seen watching tutorials or reading articles related to my craft.
              For me coding is as much fun as watching movies or sports.

            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              <h1>My Skills</h1>
              Specializing in modern web technologies, I bring ideas to life with clean code, 
              intuitive design, and cutting-edge features. From AI-powered applications to 
              responsive web platforms, I thrive on technical challenges.
            </p>

            {/* My Skills Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'React & JavaScript',
                'Node.js & Express',
                'MongoDB & Postman',
                'Python & AI/ML',
                'Tailwind CSS',
                'RESTful APIs',
                'Git & Github',
               
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-sm font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl text-center border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800 font-mono mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/*My  Additional Tech Stack */}
        <motion.div 
          className="mt-20 pt-12 border-t border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Code2 className="w-6 h-6" />, label: 'Frontend', tech: 'React, Html5, CSS3, JavaScript' },
              { icon: <Server className="w-6 h-6" />, label: 'Backend', tech: 'Node.js, Express' },
              { icon: <Database className="w-6 h-6" />, label: 'Database', tech: 'MongoDB, Postman' },
              { icon: <Cloud className="w-6 h-6" />, label: 'DevOps', tech: 'AWS, Vercel, Render, Git' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-blue-300 transition-all duration-300 shadow-sm"
              >
                <div className="text-blue-600 flex justify-center mb-3">
                  {item.icon}
                </div>
                <div className="font-semibold text-gray-800 mb-2">{item.label}</div>
                <div className="text-gray-600 text-sm">{item.tech}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About