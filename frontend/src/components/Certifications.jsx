import React from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, BookOpen, Star, Zap } from 'lucide-react'

const Certifications = ({ certifications, loading }) => {
  if (loading) {
    return (
      <section id="certifications" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading certifications...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="certifications" className="py-20 relative bg-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-20 text-blue-400 opacity-10"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <BookOpen size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-24 text-gray-600 opacity-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <Star size={40} />
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
              CERTIFICATIONS
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional certifications and courses that validate my expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Certificate Header */}
              <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
                {/* Certificate Icon */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Status Badge */}
                  {cert.status === 'Verified' && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>

                {/* Certificate Title */}
                <h3 className="font-bold text-gray-800 text-center line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {cert.name}
                </h3>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                {/* Issuer */}
                <p className="text-gray-600 text-sm text-center mb-3 font-semibold">
                  {cert.issuer}
                </p>

                {/* Duration */}
                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs mb-4">
                  <Calendar className="w-3 h-3" />
                  {cert.duration}
                </div>

                {/* Skills Gained */}
                {cert.skills && (
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {cert.skills.slice(0, 2).map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md border border-gray-300 font-mono hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 2 && (
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 text-xs rounded-md border border-gray-400 font-mono">
                        +{cert.skills.length - 2}
                      </span>
                    )}
                  </div>
                )}

                {/* View Certificate Button */}
                {cert.credentialUrl && (
                  <motion.a 
                    href={cert.credentialUrl}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-all duration-300 group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    View Certificate
                  </motion.a>
                )}
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
            { value: certifications.length, label: 'Certifications', icon: <Award className="w-5 h-5" /> },
            { value: '5+', label: 'Years Learning', icon: <Calendar className="w-5 h-5" /> },
            { value: '98%', label: 'Completion Rate', icon: <Star className="w-5 h-5" /> },
            { value: '10+', label: 'Skills Mastered', icon: <Zap className="w-5 h-5" /> }
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

export default Certifications