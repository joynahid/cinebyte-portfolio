import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | CineByte - Professional Reel Editing Agency',
  description: 'Terms and conditions for CineByte\'s professional video editing services. Read our service agreements for Instagram Reels, TikTok videos, YouTube Shorts, and short-form content creation.',
  keywords: 'terms and conditions, video editing terms, reel editing agreement, CineByte terms, Instagram Reels editing terms, TikTok editing agreement, YouTube Shorts terms',
  authors: [{ name: 'CineByte' }],
  openGraph: {
    title: 'Terms and Conditions | CineByte - Reel Editing Agency',
    description: 'Terms and conditions for CineByte\'s professional video editing services including Instagram Reels, TikTok videos, and YouTube Shorts.',
    type: 'website',
    siteName: 'CineByte',
    url: '/terms'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions | CineByte - Reel Editing Agency',
    description: 'Terms and conditions for CineByte\'s professional video editing services including Instagram Reels, TikTok videos, and YouTube Shorts.'
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
    canonical: '/terms'
  }
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
