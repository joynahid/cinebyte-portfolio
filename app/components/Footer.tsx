'use client'

import { motion } from 'framer-motion'
import { Instagram, Twitter, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="glass-backdrop border-t border-glass-light">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold text-brand-gradient mb-4 font-[family-name:var(--font-space-grotesk)]">
              CineByte
            </div>
            <p className="text-muted-foreground max-w-md mx-auto font-[family-name:var(--font-inter)]">
              Crafting viral reels and short-form content that captivates audiences worldwide.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { Icon: Instagram, href: "https://instagram.com/cinebyte.official", label: "Instagram" },
              { Icon: Twitter, href: "https://twitter.com/cinebyte_", label: "Twitter" },
              { Icon: Mail, href: "mailto:hello@cinebyte.com", label: "Email" }
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : "_blank"}
                rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                whileHover={{ y: -3, scale: 1.1 }}
                className="bg-card/50 hover:bg-card border border-border hover:border-primary rounded-full p-3 transition-all duration-150 group backdrop-blur-sm"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-150" />
              </motion.a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex justify-center space-x-8 text-sm">
            {[
              { name: 'Contact', href: '/contact' },
              { name: 'Privacy', href: '/privacy' },
              { name: 'Terms', href: '/terms' }
            ].map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-muted-foreground hover:text-primary transition-colors duration-150"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Copyright & Love Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-t border-border/30 pt-8 space-y-3"
          >
            <p className="text-muted-foreground/70 text-sm">
              © 2025 CineByte. All rights reserved.
            </p>
                          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
                Handcrafted with 
                <motion.span
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="text-red-500"
                >
                  <Heart className="w-4 h-4 fill-current" />
                </motion.span>
                in the heart of Bangladesh
              </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}