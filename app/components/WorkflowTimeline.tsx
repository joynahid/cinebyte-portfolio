'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, Edit3, MessageSquare, CheckCircle } from 'lucide-react'

interface WorkflowStep {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  details: string[]
}

const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: 'Brief & Strategy',
    description: 'We analyze your content goals and identify the perfect viral formula for your brand.',
    icon: <FileText className="w-6 h-6" />,
    details: [
      'Content strategy discussion',
      'Target audience analysis',
      'Platform-specific planning',
      'Trend research & hooks'
    ]
  },
  {
    id: 2,
    title: 'Reel Creation',
    description: 'Fast-paced editing with trending effects, perfect timing, and viral optimization.',
    icon: <Edit3 className="w-6 h-6" />,
    details: [
      'Dynamic reel editing',
      'Trending effects & transitions',
      'Music sync & beat matching',
      'Hook creation & pacing'
    ]
  },
  {
    id: 3,
    title: 'Review & Polish',
    description: 'Quick collaborative feedback rounds to perfect your reel before going live.',
    icon: <MessageSquare className="w-6 h-6" />,
    details: [
      'Instant draft delivery',
      'Real-time feedback',
      'Fast revision cycles',
      'Final optimization'
    ]
  },
  {
    id: 4,
    title: 'Launch Ready',
    description: 'Platform-optimized delivery with captions, hashtags, and posting strategy.',
    icon: <CheckCircle className="w-6 h-6" />,
    details: [
      'Multi-platform exports',
      'Optimized thumbnails',
      'Caption & hashtag suggestions',
      'Posting time recommendations'
    ]
  }
]

export default function WorkflowTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 font-[family-name:var(--font-space-grotesk)]">
            Reel <span className="text-brand-gradient">Production</span> Process
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
            Our streamlined 4-step process gets your content from concept to viral-ready in record time.
          </p>
        </motion.div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden lg:block">
          <div className="relative">
            
            {/* Timeline Steps */}
            <div className="relative grid grid-cols-4 gap-4 xl:gap-6">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Step Number & Icon */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative z-10 w-12 h-12 xl:w-14 xl:h-14 bg-card border-2 border-primary rounded-full flex items-center justify-center mb-4 shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-150"
                  >
                    <div className="text-primary">
                      {React.cloneElement(step.icon as React.ReactElement, { 
                        className: "w-4 h-4 xl:w-5 xl:h-5" 
                      })}
                    </div>
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                      {step.id}
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-sm xl:text-base font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
                      {step.title}
                    </h3>
                    <p className="text-xs xl:text-sm text-muted-foreground mb-3 font-[family-name:var(--font-inter)] leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Details as compact tags */}
                    <div className="space-y-1">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.1 + detailIndex * 0.05 }}
                          className="text-xs text-muted-foreground bg-background/50 rounded-md px-2 py-1 border border-border/30"
                        >
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>
            
            {/* Timeline Steps */}
            <div className="space-y-6">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start"
                >
                  {/* Step Circle */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative z-10 w-12 h-12 bg-card border-2 border-primary rounded-full flex items-center justify-center mr-4 shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-150 flex-shrink-0"
                  >
                    <div className="text-primary">
                      {React.cloneElement(step.icon as React.ReactElement, { 
                        className: "w-4 h-4" 
                      })}
                    </div>
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                      {step.id}
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 font-[family-name:var(--font-inter)] leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Details as compact tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.1 + detailIndex * 0.05 }}
                          className="text-xs text-muted-foreground bg-background/50 rounded-md px-2 py-1 border border-border/30"
                        >
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8 sm:mt-12"
        >
          <div className="bg-card/40 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3 font-[family-name:var(--font-space-grotesk)]">
              Ready to go viral?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 font-[family-name:var(--font-inter)]">
              Let's create reels that capture attention, drive engagement, and grow your audience.
            </p>
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-gradient hover:opacity-90 text-primary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-150 shadow-lg hover:shadow-xl hover:shadow-primary/20"
            >
              Create Your First Reel
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
