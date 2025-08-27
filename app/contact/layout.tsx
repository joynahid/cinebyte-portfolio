import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | CineByte - Professional Reel Editing Agency',
  description: 'Get in touch with CineByte for professional reel editing services. Book a consultation for Instagram Reels, TikTok videos, YouTube Shorts, and short-form content creation.',
  keywords: 'contact cinebyte, reel editing consultation, book video editing, instagram reels booking, tiktok editing contact, youtube shorts editing, video editing agency contact',
  authors: [{ name: 'CineByte' }],
  openGraph: {
    title: 'Contact | CineByte - Professional Reel Editing Agency',
    description: 'Ready to create viral content? Contact CineByte for professional reel editing services and book your consultation today.',
    type: 'website',
    siteName: 'CineByte',
    url: '/contact',
    images: [
      {
        url: '/assets/cinebytecover.png',
        width: 1200,
        height: 630,
        alt: 'Contact CineByte - Professional Reel Editing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | CineByte - Professional Reel Editing Agency',
    description: 'Ready to create viral content? Contact CineByte for professional reel editing services and book your consultation today.',
    images: ['/assets/cinebytecover.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  alternates: {
    canonical: '/contact'
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
