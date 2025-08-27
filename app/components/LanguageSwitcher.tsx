'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, ChevronDown, Loader2 } from 'lucide-react'
import { useTranslation, locales, type Locale } from '../../lib/i18n'

export default function LanguageSwitcher() {
  const { locale, changeLanguage, t, isLoading } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (newLocale: Locale) => {
    changeLanguage(newLocale)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-white transition-colors duration-200"
        aria-label={t('common.language')}
      >
        <span className={`fi fi-${locales[locale].countryCode} w-5 h-4 rounded-sm`} />
        <span className="text-sm font-medium hidden sm:inline">{locales[locale].name}</span>
        {isLoading ? (
          <Loader2 size={16} className="text-muted-foreground animate-spin" />
        ) : (
          <ChevronDown 
            size={16} 
            className={`text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full right-0 mt-2 py-2 min-w-[140px] bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg z-50"
            >
              {Object.entries(locales).map(([code, { name, countryCode }]) => (
                <motion.button
                  key={code}
                  onClick={() => handleLanguageChange(code as Locale)}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 flex items-center gap-3 ${
                    locale === code 
                      ? 'text-white font-medium bg-primary' 
                      : 'text-foreground hover:text-white hover:bg-primary'
                  }`}
                >
                  <span className={`fi fi-${countryCode} w-5 h-4 rounded-sm flex-shrink-0`} />
                  <span>{name}</span>
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
