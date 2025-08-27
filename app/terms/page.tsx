'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'
import Script from 'next/script'

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Terms and Conditions | CineByte - Professional Reel Editing Agency'
  }, [])

  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions",
    "description": "Terms and conditions for CineByte's professional video editing services including Instagram Reels, TikTok videos, and YouTube Shorts.",
    "url": "https://cinebyte.com/terms",
    "datePublished": new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0],
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "CineByte",
      "url": "https://cinebyte.com"
    },
    "about": {
      "@type": "Organization", 
      "name": "CineByte"
    }
  }

  return (
    <>
      <Script
        id="terms-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(termsSchema),
        }}
      />
      <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-backdrop border-b border-glass-light">
        <div className="max-w-4xl mx-auto container-padding py-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-purple transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto container-padding section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-brand-gradient mb-8">
            Terms and Conditions
          </h1>
          
          <div className="space-y-8 text-text-secondary">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-light rounded-xl p-6"
            >
              <p className="text-sm text-text-tertiary mb-4">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="leading-relaxed">
                Welcome to CineByte. These terms and conditions outline the rules and regulations for the use of CineByte's website and services.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">1. Acceptance of Terms</h2>
              <div className="glass-light rounded-xl p-6">
                <p className="leading-relaxed">
                  By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">2. Services Description</h2>
              <div className="glass-light rounded-xl p-6 space-y-4">
                <p className="leading-relaxed">
                  CineByte provides professional video editing services, specializing in:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Instagram Reels editing</li>
                  <li>TikTok video creation</li>
                  <li>YouTube Shorts production</li>
                  <li>Short-form content optimization</li>
                  <li>Social media video marketing</li>
                </ul>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">3. Client Responsibilities</h2>
              <div className="glass-light rounded-xl p-6 space-y-4">
                <p className="leading-relaxed">
                  Clients are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Providing raw footage and materials in agreed formats</li>
                  <li>Ensuring they have rights to all provided content</li>
                  <li>Timely communication and feedback during the project</li>
                  <li>Making payments according to agreed terms</li>
                  <li>Respecting intellectual property and copyright laws</li>
                </ul>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">4. Payment Terms</h2>
              <div className="glass-light rounded-xl p-6 space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Payment terms will be specified in individual project agreements</li>
                  <li>A deposit may be required before project commencement</li>
                  <li>Final payment is due before final delivery of completed work</li>
                  <li>Late payment fees may apply as specified in project agreements</li>
                  <li>Refund policies are outlined in individual service agreements</li>
                </ul>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">5. Intellectual Property</h2>
              <div className="glass-light rounded-xl p-6 space-y-4">
                <p className="leading-relaxed">
                  Upon full payment, clients receive rights to the final edited videos. However:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>CineByte retains the right to showcase work in portfolios</li>
                  <li>Clients must ensure they have rights to all source materials</li>
                  <li>CineByte is not liable for copyright infringement by clients</li>
                  <li>Custom templates and techniques remain CineByte property</li>
                </ul>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">6. Limitation of Liability</h2>
              <div className="glass-light rounded-xl p-6">
                <p className="leading-relaxed">
                  CineByte's liability is limited to the amount paid for services. We are not responsible for indirect damages, lost profits, or consequential damages arising from our services or any delays in delivery.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">7. Modifications</h2>
              <div className="glass-light rounded-xl p-6">
                <p className="leading-relaxed">
                  CineByte reserves the right to revise these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of revised terms.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">8. Contact Information</h2>
              <div className="glass-light rounded-xl p-6">
                <p className="leading-relaxed">
                  For questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="mt-4 space-y-2">
                  <p><strong>Email:</strong> hello@cinebyte.com</p>
                  <p><strong>Phone:</strong> +880 13 0405 1550</p>
                  <p><strong>Address:</strong> Dhaka, Bangladesh</p>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
      </main>
    </>
  )
}
