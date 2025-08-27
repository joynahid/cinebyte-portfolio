import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | CineByte - Professional Reel Editing Agency',
  description: 'Privacy policy for CineByte\'s video editing services. Learn how we protect your personal information and project data when creating Instagram Reels, TikTok videos, and YouTube Shorts.',
  keywords: 'privacy policy, data protection, video editing privacy, CineByte privacy, Instagram Reels privacy, TikTok editing privacy, YouTube Shorts privacy, client data protection',
  authors: [{ name: 'CineByte' }],
  openGraph: {
    title: 'Privacy Policy | CineByte - Reel Editing Agency',
    description: 'Privacy policy for CineByte\'s video editing services. Learn how we protect your personal information and project data.',
    type: 'website',
    siteName: 'CineByte',
    url: '/privacy'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | CineByte - Reel Editing Agency',
    description: 'Privacy policy for CineByte\'s video editing services. Learn how we protect your personal information and project data.'
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
    canonical: '/privacy'
  }
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
