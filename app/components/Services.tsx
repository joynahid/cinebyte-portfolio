'use client'

import React from 'react'
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
  CheckCircle,
  Lightbulb,
  PenTool,
  Camera,
  Clapperboard,
  Clock,
  TrendingUp,
  Music,
  Target,
  BarChart3,
  Palette,
  Monitor,
  Smartphone as Mobile,
  Users,
  Search,
  Film,
  Sparkles,
  LineChart
} from 'lucide-react'
import Link from 'next/link'

const Services = () => {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Feature icons with colors
  const getFeatureIcon = (feature: string, serviceIndex: number) => {
    const iconMap: { [key: string]: { icon: React.ReactNode; color: string } } = {
      // Instagram Reels
      'Trending Effects': { icon: <Sparkles className="w-4 h-4" />, color: 'text-blue-500' },
      'Music Sync': { icon: <Music className="w-4 h-4" />, color: 'text-purple-500' },
      'Hook Creation': { icon: <Target className="w-4 h-4" />, color: 'text-green-500' },
      'Fast-Paced Editing': { icon: <Zap className="w-4 h-4" />, color: 'text-orange-500' },

      // TikTok Videos
      'Viral Trends': { icon: <TrendingUp className="w-4 h-4" />, color: 'text-purple-600' },
      'Beat Matching': { icon: <Music className="w-4 h-4" />, color: 'text-pink-500' },
      'Captions & Text': { icon: <PenTool className="w-4 h-4" />, color: 'text-cyan-500' },
      'Transition Effects': { icon: <Zap className="w-4 h-4" />, color: 'text-violet-500' },

      // YouTube Shorts
      'Thumbnail Design': { icon: <Image className="w-4 h-4" />, color: 'text-red-500' },
      'Hook Strategy': { icon: <Target className="w-4 h-4" />, color: 'text-orange-500' },
      'Pacing & Timing': { icon: <Clock className="w-4 h-4" />, color: 'text-blue-500' },
      'CTA Placement': { icon: <ArrowRight className="w-4 h-4" />, color: 'text-green-500' },

      // Brand Content Reels
      'Brand Guidelines': { icon: <CheckCircle className="w-4 h-4" />, color: 'text-amber-600' },
      'Product Showcases': { icon: <Camera className="w-4 h-4" />, color: 'text-purple-500' },
      'Story-Driven': { icon: <Film className="w-4 h-4" />, color: 'text-blue-500' },
      'Professional Polish': { icon: <Sparkles className="w-4 h-4" />, color: 'text-emerald-500' },
    }

    return iconMap[feature] || { icon: <CheckCircle className="w-4 h-4" />, color: 'text-primary' }
  }

  const services = [
    {
      icon: <Film className="w-8 h-8" />,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      title: "Instagram Reels",
      description: "Viral-ready Instagram Reels optimized for maximum engagement and reach",
      features: ["Trending Effects", "Music Sync", "Hook Creation", "Fast-Paced Editing"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      title: "TikTok Videos",
      description: "Platform-optimized TikTok content that captures attention in the first second",
      features: ["Viral Trends", "Beat Matching", "Captions & Text", "Transition Effects"]
    },
    {
      icon: <Youtube className="w-8 h-8" />,
      iconColor: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      title: "YouTube Shorts",
      description: "Engaging YouTube Shorts that drive subscribers and views",
      features: ["Thumbnail Design", "Hook Strategy", "Pacing & Timing", "CTA Placement"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      iconColor: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      title: "Brand Content Reels",
      description: "Professional brand storytelling in short-form content that converts",
      features: ["Brand Guidelines", "Product Showcases", "Story-Driven", "Professional Polish"]
    }
  ]

  return (
    <section ref={servicesRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==')] "></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 font-[family-name:var(--font-space-grotesk)]">
            Our <span className="text-brand-gradient">Services</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
            Professional reel editing services for Instagram, TikTok, YouTube Shorts, and brand content
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-5 transition-all duration-150 relative overflow-hidden"
            >
              {/* Compact background accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 ${service.bgColor} rounded-full opacity-20 blur-2xl -translate-y-4 translate-x-4`}></div>

              <div className="relative z-10">
                {/* Compact icon and title in same row */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 ${service.bgColor} ${service.borderColor} border rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <div className={service.iconColor}>
                      {React.cloneElement(service.icon as React.ReactElement, {
                        className: "w-4 h-4 sm:w-5 sm:h-5"
                      })}
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground mb-3 font-[family-name:var(--font-inter)] leading-relaxed">
                  {service.description}
                </p>

                {/* Compact features as tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feature, featureIndex) => {
                    const { icon, color } = getFeatureIcon(feature, index)
                    return (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.05 + featureIndex * 0.02 }}
                        className="flex items-center gap-1 text-xs bg-background/50 backdrop-blur-sm border border-border/50 rounded-md px-2 py-1 text-muted-foreground"
                      >
                        <div className={`${color} flex-shrink-0`}>
                          {React.cloneElement(icon as React.ReactElement, {
                            className: "w-3 h-3"
                          })}
                        </div>
                        <span className="truncate">{feature}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8 sm:mt-12"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-gradient hover:opacity-90 text-primary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base flex items-center gap-2 mx-auto transition-all duration-150 shadow-lg hover:shadow-xl hover:shadow-primary/20"
            >
              Start Creating Reels <ArrowRight size={16} className="sm:w-4 sm:h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 