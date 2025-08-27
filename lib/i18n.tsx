'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

// Define supported locales and their display names with country codes for flags
export const locales = {
  en: { name: 'English', countryCode: 'us' },
  de: { name: 'Deutsch', countryCode: 'de' },
  fr: { name: 'Français', countryCode: 'fr' }, 
  es: { name: 'Español', countryCode: 'es' },
  ja: { name: '日本語', countryCode: 'jp' },
  ko: { name: '한국어', countryCode: 'kr' },
  bn: { name: 'বাংলা', countryCode: 'bd' }
} as const

export type Locale = keyof typeof locales

// Translation type for type safety
type TranslationKey = string
type TranslationValue = string | Record<string, any>
type Translations = Record<TranslationKey, TranslationValue>

// Translation cache
const translationCache: Record<Locale, Translations> = {} as Record<Locale, Translations>

// Load translations function with better error handling
async function loadTranslations(locale: Locale): Promise<Translations> {
  if (translationCache[locale]) {
    return translationCache[locale]
  }

  try {
    const translations = await import(`../locales/${locale}/common.json`)
    translationCache[locale] = translations.default
    return translations.default
  } catch (error) {
    console.warn(`Failed to load translations for locale: ${locale}`, error)
    // Fallback to English
    if (locale !== 'en') {
      try {
        const fallbackTranslations = await import(`../locales/en/common.json`)
        translationCache['en'] = fallbackTranslations.default
        return fallbackTranslations.default
      } catch (fallbackError) {
        console.error('Failed to load fallback English translations', fallbackError)
      }
    }
    return {}
  }
}

// Preload common translations
async function preloadTranslations() {
  try {
    // Preload English (default) and a few common languages
    const commonLocales: Locale[] = ['en', 'de', 'fr', 'es']
    await Promise.allSettled(
      commonLocales.map(locale => loadTranslations(locale))
    )
  } catch (error) {
    console.warn('Failed to preload translations', error)
  }
}

// Detect browser language
function detectBrowserLanguage(): Locale {
  if (typeof window === 'undefined') return 'en'
  
  const saved = localStorage.getItem('cinebyte-language')
  if (saved && saved in locales) return saved as Locale
  
  const browserLang = navigator.language.split('-')[0]
  return (browserLang in locales) ? browserLang as Locale : 'en'
}

// I18n Context
interface I18nContextType {
  locale: Locale
  translations: Translations
  isLoading: boolean
  t: (key: string, fallback?: string) => string
  changeLanguage: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

// I18n Provider Component
export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')
  const [translations, setTranslations] = useState<Translations>({})
  const [isLoading, setIsLoading] = useState(true)

  // Initialize and detect locale on mount
  useEffect(() => {
    const detectedLocale = detectBrowserLanguage()
    setLocale(detectedLocale)
    // Start preloading common translations in background
    preloadTranslations()
  }, [])

  // Load translations when locale changes
  useEffect(() => {
    async function fetchTranslations() {
      setIsLoading(true)
      const t = await loadTranslations(locale)
      setTranslations(t)
      setIsLoading(false)
    }
    
    fetchTranslations()
  }, [locale])

  // Translation function with dot notation support
  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.')
    let value: any = translations
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return fallback || key
      }
    }
    
    return typeof value === 'string' ? value : fallback || key
  }

  const changeLanguage = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem('cinebyte-language', newLocale)
  }

  const value = {
    locale,
    translations,
    isLoading,
    t,
    changeLanguage
  }

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  )
}

// Custom hook for translations
export function useTranslation() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18nProvider')
  }
  return {
    ...context,
    locales
  }
}

// Helper function to get translations on the server side (for metadata, etc.)
export async function getTranslations(locale: Locale): Promise<Translations> {
  return loadTranslations(locale)
}

// Helper function to get translated metadata
export async function getLocalizedMetadata(locale: Locale) {
  const translations = await getTranslations(locale)
  const meta = translations.meta as { title?: string; description?: string; keywords?: string } | undefined
  
  return {
    title: meta?.title || 'CineByte - Professional Reel & Short-Form Video Editing Agency',
    description: meta?.description || 'Professional reel editing agency specializing in viral Instagram Reels, TikTok videos, and YouTube Shorts.',
    keywords: meta?.keywords || 'reel editing, instagram reels, tiktok editing, youtube shorts'
  }
}