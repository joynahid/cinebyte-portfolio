'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'
import Image from 'next/image'

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
    role: "Content Creator",
    company: "Nusrattalks",
    content: "Working with CineByte has been great. They really know how to edit videos that grab attention. My content feels much more polished now.",
    rating: 5,
    avatar: "/assets/clients/nusrat.png"
  },
  {
    id: 3,
    name: "Neyon",
    role: "Instagram Influencer",
    company: "Neyon",
    content: "They're quick with edits and always deliver on time. The team knows what works on social media and my videos look way better now.",
    rating: 5,
    avatar: "/assets/clients/neyon.png"
  },
  {
    id: 6,
    name: "Sameer",
    role: "Social Media Strategist",
    company: "Sameer Digital",
    content: "Solid work and reliable team. They understand the brief well and the final videos always match what I had in mind.",
    rating: 5,
    avatar: "/assets/clients/sameer.png"
  }
]

export default function Testimonials() {
  const [testimonialRef, testimonialInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={testimonialRef} className="section-padding container-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzNiODJmNiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNkb3RzKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center content-spacing"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={testimonialInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6 border border-primary/20"
          >
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-muted-foreground font-medium">Client Testimonials</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground content-spacing-sm font-[family-name:var(--font-space-grotesk)]">
            What Our <span className="text-brand-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-inter)]">
            Here's what creators have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-gap content-spacing">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card border border-border rounded-lg card-padding h-full flex flex-col"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 content-spacing-sm">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-muted-foreground content-spacing-sm leading-relaxed flex-grow font-[family-name:var(--font-inter)]">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground font-[family-name:var(--font-space-grotesk)]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground font-[family-name:var(--font-inter)]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center content-spacing"
        >
          <motion.a
            href="https://www.trustpilot.com/review/cinebyte.co"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#00B67A] hover:bg-[#00A169] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-150 shadow-lg hover:shadow-xl"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>Read our reviews on Trustpilot</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </motion.a>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6 font-[family-name:var(--font-inter)]">
            Want to work with us?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-gradient hover:opacity-90 text-primary-foreground px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-150 shadow-lg hover:shadow-xl hover:shadow-primary/25"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 