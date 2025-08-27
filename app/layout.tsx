import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import StructuredData from './components/StructuredData'
import { I18nProvider } from '../lib/i18n'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'CineByte - Professional Reel & Short-Form Video Editing Agency',
    template: '%s | CineByte'
  },
  description: 'Professional reel editing agency specializing in viral Instagram Reels, TikTok videos, and YouTube Shorts. We transform your content into scroll-stopping, engagement-driving short-form videos that captivate audiences worldwide.',
  keywords: 'reel editing, instagram reels, tiktok editing, youtube shorts, short-form videos, viral content, social media editing, reel agency, content creation, mobile video, cinebyte, professional video editing, dhaka bangladesh',
  authors: [{ name: 'CineByte' }],
  creator: 'CineByte',
  publisher: 'CineByte',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cinebyte.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'de': '/de',
      'fr': '/fr',
      'es': '/es',
      'ja': '/ja',
      'ko': '/ko',
      'bn': '/bn',
    }
  },
  openGraph: {
    title: 'CineByte - Professional Reel Editing Agency',
    description: 'Creating viral reels and short-form content that stops the scroll and drives engagement. Professional video editing services for Instagram, TikTok, and YouTube.',
    type: 'website',
    siteName: 'CineByte',
    locale: 'en_US',
    url: '/',
    images: [
      {
        url: '/assets/cinebytecover.png',
        width: 1200,
        height: 630,
        alt: 'CineByte - Professional Reel Editing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CineByte - Professional Reel Editing Agency',
    description: 'Creating viral reels and short-form content that stops the scroll and drives engagement.',
    images: ['/assets/cinebytecover.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        <StructuredData />
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
} 