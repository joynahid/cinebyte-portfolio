'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState } from 'react'
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
  AlertCircle
} from 'lucide-react'

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

export default function Contact() {
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
    <section id="contact" ref={ref} className="section-padding container-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center content-spacing-lg"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground content-spacing-sm font-[family-name:var(--font-space-grotesk)]">
            Let's Create Something <span className="text-brand-gradient">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-inter)]">
            Ready to bring your vision to life? Get in touch and let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 grid-gap">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl card-padding">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                Start Your Project
              </h3>

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
                {/* Name */}
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

                {/* Email */}
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

                {/* Project Type */}
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

                {/* Budget Range */}
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
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl card-padding">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-foreground font-medium">Email</div>
                    <div className="text-muted-foreground">hello@cinebyte.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-foreground font-medium">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-foreground font-medium">Location</div>
                    <div className="text-muted-foreground">Los Angeles, CA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl card-padding">
              <h3 className="text-xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                Follow Our Work
              </h3>
              
              <div className="flex gap-4">
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
                    className="w-12 h-12 bg-primary/20 hover:bg-primary/30 rounded-xl flex items-center justify-center transition-colors duration-150 group"
                  >
                    <social.icon className="w-6 h-6 text-primary group-hover:text-primary" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl card-padding">
              <h3 className="text-xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                Why Choose Us?
              </h3>
              
              <div className="space-y-4">
                {[
                  '500+ videos created',
                  '50M+ views generated',
                  '98% client satisfaction',
                  '24/7 support available'
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{stat}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
