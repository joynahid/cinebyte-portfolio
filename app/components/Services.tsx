'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Video, 
  Edit3,
  Image,
  Smartphone,
  Youtube,
  Zap,
  Play,
  Mic,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Services = () => {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Production",
      description: "Professional cinematic storytelling with cutting-edge production techniques"
    },
    {
      icon: <Edit3 className="w-6 h-6" />,
      title: "Reel Editing",
      description: "Dynamic social media reels that capture attention and drive engagement"
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Thumbnail Design",
      description: "Eye-catching thumbnails that boost click-through rates and viewer engagement"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Short Form Videos",
      description: "Viral-ready content optimized for TikTok, Instagram, and other platforms"
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      title: "YouTube Videos",
      description: "Long-form content creation with professional editing and optimization"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Ad Creatives",
      description: "High-converting video advertisements for digital marketing campaigns"
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: "Demo Videos",
      description: "Product demonstrations and explainer videos that showcase your offerings"
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Podcasts",
      description: "Professional podcast production from recording to final edit and distribution"
    }
  ]

  return (
    <section ref={servicesRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iI2ZmZmZmZiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNkb3RzKSIvPjwvc3ZnPg==')] "></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 font-space">
            Our <span className="text-brand-gradient">Services</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Comprehensive video production services that bring your vision to life
          </p>
        </motion.div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={servicesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="group glass-light rounded-2xl p-6 hover:glass-medium transition-all duration-300 border border-glass-light cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 text-accent-purple group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-all duration-300">
                  {service.icon}
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2 font-space group-hover:text-brand-gradient transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA at the bottom of services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-gradient hover:from-primary-700 hover:to-secondary-700 text-text-primary px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 