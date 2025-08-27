'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import { useTranslation } from '../../lib/i18n'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useTranslation()

  const navigationItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.process'), href: '#process' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.contact'), href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
          scrolled ? 'glass-nav border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative cursor-pointer"
              >
                <div className="text-3xl sm:text-4xl font-bold tracking-tight logo-cinebyte">
                  <span className="font-space">
                    Cine<span className="logo-byte-accent">byte</span>
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="text-foreground hover:text-brand-primary transition-colors duration-200 font-medium relative group cursor-pointer"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-150 group-hover:w-full" />
                  </motion.div>
                </Link>
              ))}
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                <Dialog.Trigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-foreground hover:text-brand-primary transition-colors p-2 rounded-md hover:bg-accent"
                    aria-label="Open navigation menu"
                  >
                    <Menu size={24} />
                  </motion.button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50" />
                  <Dialog.Content className="fixed inset-x-4 top-4 z-50 origin-top rounded-lg border border-border bg-card p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-[425px] sm:inset-x-auto sm:left-[50%] sm:top-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:slide-in-from-bottom-0">
                    <div className="flex items-center justify-between mb-6">
                      <Dialog.Title className="text-lg font-semibold">
                        <span className="logo-cinebyte text-xl">Cinebyte</span>
                      </Dialog.Title>
                      <Dialog.Close asChild>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-foreground hover:text-brand-primary transition-colors p-2 rounded-md hover:bg-accent"
                          aria-label="Close navigation menu"
                        >
                          <X size={20} />
                        </motion.button>
                      </Dialog.Close>
                    </div>
                    <nav className="space-y-4">
                      {navigationItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Dialog.Close asChild>
                            <Link
                              href={item.href}
                              className="block text-foreground hover:text-brand-primary transition-colors duration-200 font-medium py-2 px-3 rounded-md hover:bg-accent"
                              onClick={handleNavClick}
                            >
                              {item.name}
                            </Link>
                          </Dialog.Close>
                        </motion.div>
                      ))}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: navigationItems.length * 0.1 }}
                        className="pt-4 border-t border-border"
                      >
                        <LanguageSwitcher />
                      </motion.div>
                    </nav>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  )
} 