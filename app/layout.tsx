import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

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
  title: 'CineByte Portfolio - Modern Creative Studio',
  description: 'Professional portfolio showcasing cutting-edge creative solutions and digital experiences.',
  keywords: 'portfolio, creative, digital, design, development, professional',
  authors: [{ name: 'CineByte' }],
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
        {children}
      </body>
    </html>
  )
} 