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
  Mail, 
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
      <div className="max-w-4xl mx-auto">
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

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl card-padding">
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
                  className="w-full px-4 py-4 sm:py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none text-base"
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
                  className="w-full px-4 py-4 sm:py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none text-base"
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
                  className="w-full px-4 py-4 sm:py-3 bg-input border border-border rounded-xl text-foreground focus:border-primary focus:outline-none text-base"
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
                  className="w-full px-4 py-4 sm:py-3 bg-input border border-border rounded-xl text-foreground focus:border-primary focus:outline-none text-base"
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
                  className="w-full px-4 py-4 sm:py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none text-base"
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
                  <div className="w-full px-4 py-4 sm:py-3 bg-input border border-border border-dashed rounded-xl text-center hover:border-primary transition-colors duration-150 min-h-[80px] flex flex-col justify-center">
                    <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                    <span className="text-muted-foreground text-sm sm:text-base">
                      {selectedFile ? selectedFile.name : 'Tap to upload or drag and drop'}
                    </span>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1">
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
                  className="w-full px-4 py-4 sm:py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none resize-none text-base"
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
                whileHover={!isSubmitting ? { scale: 1.02, y: -1 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className="w-full bg-brand-gradient hover:opacity-90 disabled:opacity-50 text-primary-foreground px-6 sm:px-8 py-4 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 transition-all duration-150 shadow-lg hover:shadow-xl hover:shadow-primary/25 min-h-[56px] touch-manipulation"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} className="sm:w-5 sm:h-5" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Email Contact - Minimal */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <a 
                  href="mailto:hello@cinebyte.co" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-150"
                >
                  hello@cinebyte.co
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
