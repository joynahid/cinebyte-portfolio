'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '../../lib/i18n'

export default function VideoSection() {
  const { t } = useTranslation()
  
  // Framer Motion animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }
  
  const imageVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }
  
  const floatingVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (index: number) => ({
      opacity: 0.6,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 0.3 + index * 0.05,
        ease: "easeOut"
      }
    })
  }

  return (
    <motion.section 
      className="relative w-full py-20 lg:py-32 overflow-hidden bg-hero-gradient"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Lightweight Gradient Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-hero-gradient"></div>
        {/* Subtle animated patterns for visual interest */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(62,88,121,0.15),transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(33,53,85,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(62,88,121,0.1),transparent_50%)]"></div>
        </div>
      </div>

      {/* Enhanced Backdrop Overlay with Blur */}
      <div className="absolute inset-0 w-full h-full z-10">
        {/* Primary gradient overlay with backdrop blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60 backdrop-blur-sm"></div>
        
        {/* Radial gradient for focus with stronger blur */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/40 backdrop-blur-md"></div>
        
        {/* Subtle texture overlay with light blur */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container-padding max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
        
        <motion.h1
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight tracking-tight font-[family-name:var(--font-space-grotesk)]"
        >
          {t('hero.title')} <span className="text-brand-gradient">{t('hero.titleHighlight')}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-[family-name:var(--font-inter)]"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center lg:items-start"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-gradient hover:shadow-lg hover:shadow-primary/25 text-primary-foreground px-8 py-3 rounded-xl font-semibold text-base flex items-center gap-3 transition-all duration-150"
            >
              {t('hero.getStarted')} <ArrowRight size={18} />
            </motion.button>
          </Link>

          <Link href="#gallery">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border border-border text-foreground px-8 py-3 rounded-xl font-semibold text-base flex items-center gap-3 hover:bg-accent hover:border-primary transition-all duration-150"
            >
              <Play size={18} /> {t('hero.viewWork')}
            </motion.button>
          </Link>
        </motion.div>
          </div>

          {/* Right Side - Cover Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              <motion.img
                variants={imageVariants}
                src="/assets/cinebytecover.png"
                alt="CineByte Cover"
                className="w-full h-auto rounded-2xl object-cover relative z-10"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Floating Decorative Elements */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Sparkle 1 */}
                <motion.div 
                  className="absolute top-8 left-8 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-sm"
                  variants={floatingVariants}
                  custom={0}
                  animate={{
                    y: [0, -3, 0],
                    x: [0, 2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Sparkle 2 */}
                <motion.div 
                  className="absolute top-16 right-12 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-sm"
                  variants={floatingVariants}
                  custom={1}
                  animate={{
                    y: [0, 4, 0],
                    x: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Floating Circle */}
                <motion.div 
                  className="absolute bottom-20 left-4 w-6 h-6 border-2 border-primary/30 rounded-full"
                  variants={floatingVariants}
                  custom={2}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Diamond Shape */}
                <motion.div 
                  className="absolute top-1/3 right-4 w-5 h-5 bg-gradient-to-r from-pink-400 to-red-500 transform rotate-45 blur-sm opacity-70"
                  variants={floatingVariants}
                  custom={3}
                  animate={{
                    y: [0, 3, 0],
                    rotate: [45, 60, 45],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Floating Triangle */}
                <motion.div 
                  className="absolute bottom-12 right-8 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-cyan-400/60"
                  variants={floatingVariants}
                  custom={4}
                  animate={{
                    y: [0, -4, 0],
                    x: [0, 2, 0],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Glowing Dot */}
                <motion.div 
                  className="absolute top-1/2 left-2 w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                  variants={floatingVariants}
                  custom={5}
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Star Shape */}
                <motion.div 
                  className="absolute bottom-32 right-2 text-yellow-400 text-lg opacity-60"
                  variants={floatingVariants}
                  custom={6}
                  animate={{
                    y: [0, -3, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ✦
                </motion.div>
                
                {/* Plus Shape */}
                <motion.div 
                  className="absolute top-24 right-20 text-purple-400 text-xl opacity-50 font-bold"
                  variants={floatingVariants}
                  custom={7}
                  animate={{
                    y: [0, 4, 0],
                    rotate: [0, 15, 0],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  +
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}