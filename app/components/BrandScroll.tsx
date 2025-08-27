'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BrandScroll() {
  const brands = [
    { name: 'Brand 1', src: '/assets/brands/1.png' },
    { name: 'Brand 2', src: '/assets/brands/2.png' },
    { name: 'Brand 3', src: '/assets/brands/3.png' },
    { name: 'Brand 4', src: '/assets/brands/4.png' },
    { name: 'Brand 5', src: '/assets/brands/5.png' },
    { name: 'Brand 6', src: '/assets/brands/6.png' },
  ]

  return (
    <section className="py-16 overflow-hidden bg-surface-glass-light backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl font-bold text-text-primary mb-12"
        >
          Trusted by Leading <span className="text-brand-gradient">Brands</span>
        </motion.h2>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {brands.concat(brands).map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 md:mx-6"
              >
                <div className="relative group">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={100}
                    height={100}
                    className="object-contain max-w-[90px] max-h-[90px] opacity-100 transition-all duration-150 rounded-lg filter contrast-110 brightness-95 drop-shadow-sm hover:drop-shadow-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 to-brand-secondary/8 rounded-lg group-hover:from-brand-primary/4 group-hover:to-brand-secondary/4 transition-all duration-150" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 