'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState, useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'
import * as Tabs from '@radix-ui/react-tabs'
import { 
  Send, 
  Upload, 
  Youtube, 
  Instagram, 
  Video, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  AlertCircle,
  Calendar,
  Clock,
  MessageSquare,
  Sparkles,
  Zap
} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  projectType: z.string().min(1, 'Please select a project type'),
  budgetRange: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  sampleLink: z.string().url('Please enter a valid URL').optional().or(z.literal(''))
})

type ContactFormData = z.infer<typeof contactSchema>

const projectTypes = [
  'Instagram Reels',
  'TikTok Videos', 
  'YouTube Shorts',
  'Social Media Content',
  'Reel Package Deal',
  'Brand Content Series',
  'User-Generated Content',
  'Other'
]

const budgetRanges = [
  'Under $500 (1-5 reels)',
  '$500 - $2,000 (5-15 reels)',
  '$2,000 - $5,000 (Monthly package)',
  '$5,000+ (Enterprise/Agency)',
  'Not sure yet'
]

export default function ContactPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal('ui', {
        styles: { 
          branding: { brandColor: '#8B5CF6' }
        },
        hideEventTypeDetails: false,
        layout: 'month_view'
      })
    })()
  }, [])

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      reset()
      setSelectedFile(null)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative section-padding container-padding overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center content-spacing-lg"
            >
              {/* Floating Elements */}
              <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg opacity-40 animate-bounce" />
              <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-md opacity-50" />
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">Let's Start Something Epic</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground content-spacing-sm font-[family-name:var(--font-space-grotesk)]">
                Ready to Go <span className="text-brand-gradient">Viral</span>?
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-inter)]">
                Transform your ideas into scroll-stopping content that captivates millions. Choose how you'd like to connect with us.
              </p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-8 mt-8"
              >
                {[
                  { icon: Zap, label: '500+ Videos', desc: 'Created' },
                  { icon: Video, label: '50M+ Views', desc: 'Generated' },
                  { icon: Calendar, label: '24/7', desc: 'Support' }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="text-foreground font-bold">{stat.label}</div>
                      <div className="text-muted-foreground text-sm">{stat.desc}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={ref} className="section-padding container-padding">
          <div className="max-w-5xl mx-auto">
            <Tabs.Root defaultValue="consultation" className="w-full">
              {/* Tab List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <Tabs.List className="grid w-full grid-cols-2 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-2">
                  <Tabs.Trigger 
                    value="consultation" 
                    className="relative flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-150 data-[state=active]:bg-brand-gradient data-[state=active]:text-dark data-[state=active]:shadow-lg text-muted-foreground hover:text-foreground"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Consultation
                  </Tabs.Trigger>
                  <Tabs.Trigger 
                    value="message" 
                    className="relative flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-150 data-[state=active]:bg-brand-gradient data-[state=active]:text-dark data-[state=active]:shadow-lg text-muted-foreground hover:text-foreground"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Send Message
                  </Tabs.Trigger>
                </Tabs.List>
              </motion.div>

              {/* Consultation Tab Content */}
              <Tabs.Content value="consultation" className="mt-0" asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl card-padding"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
                      Schedule Your Discovery Call
                    </h3>
                    <p className="text-muted-foreground">
                      30-minute consultation to discuss your project and get a custom quote
                    </p>
                  </div>

                  <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">What we'll cover:</span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3 mt-3">
                      {[
                        'Project goals & requirements',
                        'Brand & target audience review',
                        'Custom quote & timeline',
                        'Relevant portfolio examples'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cal Widget with Dynamic Sizing */}
                  <div className="rounded-xl overflow-hidden border border-border bg-background">
                    <Cal
                      calLink="nahid-hasan-2xpwdi/30min"
                      style={{ width: '100%', height: 'auto', minHeight: '600px' }}
                      config={{ 
                        layout: 'month_view',
                        theme: 'light'
                      }}
                    />
                  </div>
                </motion.div>
              </Tabs.Content>

              {/* Message Tab Content */}
              <Tabs.Content value="message" className="mt-0" asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl card-padding"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
                      Send Us a Message
                    </h3>
                    <p className="text-muted-foreground">
                      Tell us about your project and we'll get back to you within 24 hours
                    </p>
                  </div>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-green-500 font-medium">Message sent successfully! We'll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      <span className="text-red-500 font-medium">Something went wrong. Please try again.</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-foreground font-medium mb-2">
                          Name *
                        </label>
                        <input
                          {...register('name')}
                          type="text"
                          className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <span className="text-red-500 text-sm mt-1 block">{errors.name.message}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-foreground font-medium mb-2">
                          Email *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <span className="text-red-500 text-sm mt-1 block">{errors.email.message}</span>
                        )}
                      </div>
                    </div>

                    {/* Project Type & Budget */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-foreground font-medium mb-2">
                          Project Type *
                        </label>
                        <select
                          {...register('projectType')}
                          className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground focus:border-primary focus:outline-none"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        {errors.projectType && (
                          <span className="text-red-500 text-sm mt-1 block">{errors.projectType.message}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-foreground font-medium mb-2">
                          Budget Range *
                        </label>
                        <select
                          {...register('budgetRange')}
                          className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground focus:border-primary focus:outline-none"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                        {errors.budgetRange && (
                          <span className="text-red-500 text-sm mt-1 block">{errors.budgetRange.message}</span>
                        )}
                      </div>
                    </div>

                    {/* Sample Link */}
                    <div>
                      <label className="block text-foreground font-medium mb-2">
                        Sample Link (Optional)
                      </label>
                      <input
                        {...register('sampleLink')}
                        type="url"
                        className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                        placeholder="https://example.com/your-sample"
                      />
                      {errors.sampleLink && (
                        <span className="text-red-500 text-sm mt-1 block">{errors.sampleLink.message}</span>
                      )}
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-foreground font-medium mb-2">
                        Upload Files (Optional)
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          accept="video/*,image/*,.pdf"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="w-full px-4 py-3 bg-input border border-border border-dashed rounded-xl text-center hover:border-primary transition-colors duration-150">
                          <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                          <span className="text-muted-foreground">
                            {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
                          </span>
                          <div className="text-sm text-muted-foreground mt-1">
                            Video, Image, or PDF files
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-foreground font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none resize-none"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                      {errors.message && (
                        <span className="text-red-500 text-sm mt-1 block">{errors.message.message}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.05, y: -2 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                      className="w-full bg-brand-gradient hover:opacity-90 disabled:opacity-50 text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-150 shadow-lg hover:shadow-xl hover:shadow-primary/25"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={20} />
                        </>
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="section-padding container-padding bg-card/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center content-spacing-lg"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground content-spacing-sm font-[family-name:var(--font-space-grotesk)]">
                Other Ways to <span className="text-brand-gradient">Connect</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 grid-gap">
              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl card-padding text-center"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
                  Email Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Drop us a line anytime
                </p>
                <a 
                  href="mailto:hello@cinebyte.com"
                  className="text-primary hover:text-primary/80 font-medium transition-colors duration-150"
                >
                  hello@cinebyte.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl card-padding text-center"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
                  Call Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Available 9 AM - 6 PM EST
                </p>
                <a 
                  href="tel:+15551234567"
                  className="text-primary hover:text-primary/80 font-medium transition-colors duration-150"
                >
                  +1 (555) 123-4567
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl card-padding text-center"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
                  Visit Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Come say hello
                </p>
                <span className="text-foreground">
                  Los Angeles, CA
                </span>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center mt-12"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                Follow Our Work
              </h3>
              
              <div className="flex justify-center gap-4">
                {[
                  { icon: Youtube, label: 'YouTube', href: '#' },
                  { icon: Instagram, label: 'Instagram', href: '#' },
                  { icon: Video, label: 'TikTok', href: '#' }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-primary/20 hover:bg-primary/30 rounded-xl flex items-center justify-center transition-colors duration-150 group"
                  >
                    <social.icon className="w-7 h-7 text-primary group-hover:text-primary" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
