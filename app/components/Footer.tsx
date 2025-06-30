'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="glass-backdrop border-t border-glass-light">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-brand-gradient mb-4">
              CineByte
            </div>
            <p className="text-text-secondary mb-6">
              Creating exceptional digital experiences that inspire and engage.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="glass-medium hover:glass-strong rounded-lg p-2 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-text-secondary" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-text-primary font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Team', 'Careers', 'Portfolio', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-text-secondary hover:text-accent-purple transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-text-primary font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-text-secondary">
                <Mail className="w-4 h-4" />
                <span>hello@cinebyte.com</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <Phone className="w-4 h-4" />
                <span>+880 13 0405 1550</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <MapPin className="w-4 h-4" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-glass-light mt-12 pt-8 text-center"
        >
          <p className="text-text-tertiary">
            © 2025 CineByte. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}