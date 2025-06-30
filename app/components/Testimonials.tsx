'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'
import { useState } from 'react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nusrat Meraji",
    role: "Digital Content Creator",
    company: "Nusrattalks",
    content: "I am enormously thankful and eternally grateful for the CineByte team and all the hard work they put into making my podcast episodes happen. This was my first experience working with professionals on this, and they made it so beautiful. This would not have been possible without them - they truly delivered beyond expectations.",
    rating: 5,
    avatar: "NM"
  },
  {
    id: 2,
    name: "Neyon",
    role: "Digital Content Creator",
    company: "Neyon",
    content: "Wouldn't have been possible without the team. They made the process so smooth and easy.",
    rating: 5,
    avatar: "NY"
  },
  
]

export default function Testimonials() {
  const [testimonialRef, testimonialInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={testimonialRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzNiODJmNiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNkb3RzKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={testimonialInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-surface-overlay-light rounded-full px-6 py-3 mb-6 border border-surface-overlay-border"
          >
            <Star className="w-5 h-5 text-accent-blue fill-accent-blue" />
            <span className="text-text-secondary font-medium">Client Testimonials</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 font-space">
            What Our <span className="text-brand-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the amazing clients who've experienced the CineByte difference.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={testimonialInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              onHoverStart={() => setHoveredCard(testimonial.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className="glass-light rounded-2xl p-8 border border-glass-light hover:glass-medium transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                {/* Hover Gradient Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredCard === testimonial.id ? 0.1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl"
                />

                {/* Quote Icon */}
                <motion.div
                  initial={{ rotate: 0, scale: 1 }}
                  animate={{ 
                    rotate: hoveredCard === testimonial.id ? 10 : 0,
                    scale: hoveredCard === testimonial.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 bg-accent-blue/20 rounded-full flex items-center justify-center mb-6 relative z-10"
                >
                  <Quote className="w-6 h-6 text-accent-blue" />
                </motion.div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={testimonialInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + i * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <Star className="w-5 h-5 text-accent-blue fill-accent-blue" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Content */}
                <motion.p
                  animate={{
                    color: hoveredCard === testimonial.id ? '#ffffff' : '#cbd5e1'
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-text-secondary mb-6 leading-relaxed flex-grow relative z-10"
                >
                  "{testimonial.content}"
                </motion.p>

                {/* Author Info */}
                <div className="flex items-center gap-4 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center font-bold text-text-primary"
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <motion.h4
                      animate={{
                        color: hoveredCard === testimonial.id ? '#ffffff' : '#ffffff'
                      }}
                      className="font-semibold text-text-primary"
                    >
                      {testimonial.name}
                    </motion.h4>
                    <motion.p
                      animate={{
                        color: hoveredCard === testimonial.id ? '#cbd5e1' : '#94a3b8'
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-sm text-text-tertiary"
                    >
                      {testimonial.role} at {testimonial.company}
                    </motion.p>
                  </div>
                </div>

                {/* Animated Border */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: hoveredCard === testimonial.id ? 1 : 0,
                    opacity: hoveredCard === testimonial.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 border-2 border-accent-blue rounded-2xl"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary mb-6">
            Ready to join our satisfied clients?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-gradient hover:from-primary-700 hover:to-secondary-700 text-text-primary px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 