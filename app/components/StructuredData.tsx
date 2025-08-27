'use client'

import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CineByte",
    "alternateName": "CineByte Video Editing",
    "url": "https://cinebyte.com",
    "logo": "https://cinebyte.com/assets/cinebytecover.png",
    "description": "Professional reel editing agency specializing in viral Instagram Reels, TikTok videos, and YouTube Shorts.",
    "foundingDate": "2023",
    "founders": [
      {
        "@type": "Person",
        "name": "CineByte Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "Bangladesh"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+880 13 0405 1550",
      "contactType": "customer service",
      "email": "hello@cinebyte.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://instagram.com/cinebyte",
      "https://twitter.com/cinebyte",
      "https://linkedin.com/company/cinebyte"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "Worldwide"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Video Editing Services",
    "description": "Professional reel and short-form video editing services including Instagram Reels, TikTok videos, and YouTube Shorts creation.",
    "provider": {
      "@type": "Organization",
      "name": "CineByte"
    },
    "serviceType": "Video Editing",
    "offers": [
      {
        "@type": "Offer",
        "name": "Instagram Reels Editing",
        "description": "Professional editing services for Instagram Reels that drive engagement and go viral."
      },
      {
        "@type": "Offer", 
        "name": "TikTok Video Creation",
        "description": "Creative TikTok video editing and production services."
      },
      {
        "@type": "Offer",
        "name": "YouTube Shorts Production", 
        "description": "Professional YouTube Shorts editing and optimization services."
      }
    ],
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://cinebyte.com",
      "serviceSupportedCountry": "Worldwide"
    }
  }

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CineByte",
    "alternateName": "CineByte Video Editing Agency",
    "url": "https://cinebyte.com",
    "description": "Professional reel editing agency specializing in viral Instagram Reels, TikTok videos, and YouTube Shorts.",
    "publisher": {
      "@type": "Organization",
      "name": "CineByte"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://cinebyte.com/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
    </>
  )
}
