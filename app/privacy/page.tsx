'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'
import Script from 'next/script'

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy | CineByte - Professional Reel Editing Agency'
  }, [])

  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy policy for CineByte's video editing services. Learn how we protect your personal information and project data.",
    "url": "https://cinebyte.com/privacy",
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
        id="privacy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacySchema),
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
            Privacy Policy
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
                At CineByte, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">1. Information We Collect</h2>
              <div className="glass-light rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-text-primary">Personal Information</h3>
                <p className="leading-relaxed">
                  We may collect the following personal information when you use our services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Business information and company details</li>
                  <li>Payment and billing information</li>
                  <li>Project specifications and requirements</li>
                  <li>Communication records and correspondence</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-text-primary mt-6">Technical Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address and browser information</li>
                  <li>Website usage data and analytics</li>
                  <li>Device information and operating system</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">2. How We Use Your Information</h2>
              <div className="glass-light rounded-xl p-6 space-y-4">
                <p className="leading-relaxed">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Providing and delivering our video editing services</li>
                  <li>Processing payments and managing billing</li>
                  <li>Communicating about projects and service updates</li>
                  <li>Improving our services and website experience</li>
                  <li>Marketing communications (with your consent)</li>
                  <li>Legal compliance and fraud prevention</li>
                  <li>Analytics and business intelligence</li>
                </ul>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">3. Information Sharing and Disclosure</h2>
              <div className="glass-light rounded-xl p-6 space-y-4">
                <p className="leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in service delivery</li>
                  <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                  <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
                  <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety</li>
                  <li><strong>With Consent:</strong> When you explicitly agree to sharing</li>
                </ul>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">4. Data Security</h2>
              <div className="glass-light rounded-xl p-6 space-y-4">
                <p className="leading-relaxed">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure servers and infrastructure</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="leading-relaxed mt-4 text-sm">
                  While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">5. Data Retention</h2>
              <div className="glass-light rounded-xl p-6">
                <p className="leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Project files and client data are typically retained for a period of 2 years after project completion, unless otherwise requested.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">6. Your Rights and Choices</h2>
              <div className="glass-light rounded-xl p-6 space-y-4">
                <p className="leading-relaxed">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request access to your personal data</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Restriction:</strong> Request limitation of processing</li>
                </ul>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">7. Cookies and Tracking</h2>
              <div className="glass-light rounded-xl p-6 space-y-4">
                <p className="leading-relaxed">
                  We use cookies and similar technologies to enhance your experience:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand website usage patterns</li>
                  <li><strong>Marketing Cookies:</strong> Enable personalized advertising (with consent)</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  You can control cookie preferences through your browser settings.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">8. Children's Privacy</h2>
              <div className="glass-light rounded-xl p-6">
                <p className="leading-relaxed">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">9. Changes to This Policy</h2>
              <div className="glass-light rounded-xl p-6">
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-4">10. Contact Us</h2>
              <div className="glass-light rounded-xl p-6">
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
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
