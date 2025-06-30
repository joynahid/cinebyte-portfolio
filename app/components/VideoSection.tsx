'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, Pause } from 'lucide-react'
import { useState } from 'react'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const videos = [
    {
      title: "Creative Process",
      description: "Behind the scenes of our creative workflow",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    },
    {
      title: "Innovation Lab",
      description: "Where ideas come to life",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    },
    {
      title: "Client Success",
      description: "Stories from our satisfied clients",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    }
  ]

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background Video Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Experience Our <span className="text-brand-gradient">Work</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Dive into our portfolio of exceptional projects and creative solutions
          </p>
        </motion.div>

        {/* Main Featured Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-video bg-brand-gradient relative">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop"
              alt="Featured Project"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-surface-glass-medium flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="glass-light rounded-full p-6 hover:glass-medium transition-all duration-300 border border-surface-overlay-border"
              >
                {isPlaying ? (
                  <Pause className="w-12 h-12 text-text-primary" />
                ) : (
                  <Play className="w-12 h-12 text-text-primary ml-1" />
                )}
              </motion.button>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-text-primary mb-2">Featured Project</h3>
              <p className="text-text-secondary">Our latest creative masterpiece showcasing innovation and design excellence</p>
            </div>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-surface-glass-medium group-hover:bg-surface-glass-light transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="glass-light rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <Play className="w-8 h-8 text-text-primary ml-0.5" />
                    </motion.div>
                  </div>
                </div>
                <div className="p-6 glass-light border-t border-glass-light">
                  <h4 className="text-xl font-bold text-text-primary mb-2">{video.title}</h4>
                  <p className="text-text-secondary text-sm">{video.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Auto-scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-2 text-text-tertiary text-sm">
            <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse"></div>
            <span>Auto-playing content</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}