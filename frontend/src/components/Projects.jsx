import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2, Cpu, Database, Zap } from 'lucide-react'

const Projects = ({ projects, loading }) => {
  if (loading) {
    return (
      <section id="projects" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading projects...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 relative bg-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-20 right-20 text-blue-400 opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Cpu size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-gray-600 opacity-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <Database size={40} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              FEATURED PROJECTS
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Building digital solutions with modern technologies and clean architecture
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Project Header */}
              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden border-b border-gray-200">
                {/* Project Image/Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5"></div>
                
                {/* Tech Stack Indicator */}
                <div className="absolute top-4 left-4 flex gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                      className="w-2 h-2 bg-blue-500 rounded-full"
                    />
                  ))}
                </div>
                
                {/* Project Type Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-gray-300 shadow-xs">
                    <Zap className="w-3 h-3 text-blue-600" />
                    <span className="text-xs font-semibold text-gray-700">PRODUCTION</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <a 
                      href={project.github}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm border border-gray-300 hover:border-blue-600"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm border border-gray-300 hover:border-blue-600"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Project Title Overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg font-bold text-gray-800 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-gray-300">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md border border-gray-300 font-mono hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 text-xs rounded-md border border-gray-400 font-mono">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* View Project Button */}
                <motion.button 
                  className="w-full py-3 bg-gray-900 text-white rounded-lg font-semibold text-sm hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Code2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                  View Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { value: projects.length, label: 'Projects Completed', icon: <Code2 className="w-5 h-5" /> },
            { value: '10+', label: 'Technologies', icon: <Cpu className="w-5 h-5" /> },
            { value: '50K+', label: 'Lines of Code', icon: <Database className="w-5 h-5" /> },
    
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-3 text-blue-600">
                {stat.icon}
              </div>
              <motion.div 
                className="text-2xl font-bold text-gray-800 font-mono mb-1"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
