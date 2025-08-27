'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Star, Zap, Crown } from 'lucide-react'
import Link from 'next/link'

interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  icon: React.ReactNode
  cta: string
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Content Creator",
    price: "$297",
    period: "per month",
    description: "Perfect for individual creators and small businesses starting their video journey",
    features: [
      "4 professional video edits",
      "Social media content (Reels, TikTok, YouTube Shorts)",
      "Basic podcast editing (2 episodes)",
      "Content planning & strategy",
      "3 rounds of revisions",
      "Multi-platform formats",
      "48-hour delivery",
      "Email support"
    ],
    icon: <Star className="w-6 h-6" />,
    cta: "Start Creating"
  },
  {
    name: "Business Growth",
    price: "$697",
    period: "per month",
    description: "Comprehensive video marketing solution designed to drive business growth",
    features: [
      "10 professional video edits",
      "Brand storytelling videos",
      "Product showcase content",
      "Full podcast editing (4 episodes)",
      "Social media management",
      "Trend research & content strategy",
      "Customer testimonial videos",
      "Unlimited revisions",
      "24-hour priority delivery",
      "Dedicated account manager",
      "Performance analytics"
    ],
    popular: true,
    icon: <Zap className="w-6 h-6" />,
    cta: "Grow Your Business"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored pricing",
    description: "Complete content solution for brands and agencies scaling at enterprise level",
    features: [
      "Unlimited video content",
      "Full-service content production",
      "Advanced podcast production",
      "Complete social media management",
      "Custom brand animations",
      "White-label solutions",
      "Same-day rush delivery",
      "Dedicated creative team",
      "Monthly strategy sessions",
      "Advanced analytics & reporting",
      "Custom integrations",
      "Priority support & SLA"
    ],
    icon: <Crown className="w-6 h-6" />,
    cta: "Let's Talk"
  }
]

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="pricing" ref={ref} className="section-padding container-padding bg-card/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center content-spacing-lg"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground content-spacing-sm font-[family-name:var(--font-space-grotesk)]">
            Content <span className="text-brand-gradient">Pricing</span> Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-inter)]">
            From individual content creation to enterprise-level strategies. Transparent pricing for every business's growth.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 grid-gap">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative group flex flex-col h-full ${
                plan.popular 
                  ? 'bg-card border-2 border-primary shadow-lg shadow-primary/20' 
                  : 'bg-card/50 border border-border'
              } backdrop-blur-sm rounded-2xl card-padding transition-all duration-150 hover:shadow-xl hover:shadow-primary/10`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  plan.popular ? 'bg-primary/20' : 'bg-primary/10'
                }`}>
                  <div className="text-primary">
                    {plan.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                
                <p className="text-muted-foreground font-[family-name:var(--font-inter)]">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground font-[family-name:var(--font-inter)]">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                <Link href={`/contact?plan=${plan.name.replace(/\s+/g, '-').toLowerCase()}`}>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-150 ${
                      plan.popular
                        ? 'bg-brand-gradient text-primary-foreground shadow-lg hover:shadow-xl hover:opacity-90'
                        : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          {/* Compact Additional Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            {[
              {
                title: "100% Satisfaction Guarantee",
                description: "We'll work with you until you love it, or money back"
              },
              {
                title: "All-in-One Solution",
                description: "Video production, editing, and social media management"
              },
              {
                title: "Scalable Packages",
                description: "From content creators to enterprise-level solutions"
              },
              {
                title: "Expert Creative Team",
                description: "Dedicated professionals with proven track records"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-center p-4 bg-card/30 rounded-lg border border-border/50 backdrop-blur-sm"
              >
                <h4 className="text-sm font-semibold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-xs font-[family-name:var(--font-inter)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-4 text-sm font-[family-name:var(--font-inter)]">
              Ready to grow your business with professional video content? Need a custom solution?
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-150 hover:bg-primary/90 hover:shadow-lg"
              >
                Contact our team →
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}