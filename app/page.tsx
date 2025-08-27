'use client'

import Navigation from './components/Navigation'
import VideoSection from './components/VideoSection'
import Services from './components/Services'
import VideoGallery from './components/VideoGallery'
import WorkflowTimeline from './components/WorkflowTimeline'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'

import Footer from './components/Footer'
import BrandScroll from './components/BrandScroll'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="home">
        <VideoSection />
      </section>

      {/* Brand Scroll Section */}
      <section id="brands">
        <BrandScroll />
      </section>
      
      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Video Gallery Section */}
      <section id="gallery">
        <VideoGallery />
      </section>

      {/* Workflow Timeline Section */}
      <section id="process">
        <WorkflowTimeline />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <Pricing />
      </section>


      
      {/* Footer */}
      <Footer />
    </main>
  )
} 