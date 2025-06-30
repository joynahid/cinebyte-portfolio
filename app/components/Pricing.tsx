'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Users, Clock, Award } from 'lucide-react'

export default function Pricing() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section ref={ref} className="relative py-20 px-4 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-surface-900/30 via-primary-900/10 to-surface-900/30"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 font-space">
                        Let's Build Something <span className="text-brand-gradient">Amazing Together</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12">
                        Every project is unique. Let's discuss your vision and create a custom solution that perfectly fits your needs and budget.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand-gradient hover:from-primary-700 hover:to-secondary-700 text-white px-12 py-6 rounded-full font-semibold text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
                    >
                        Contact Us
                        <ArrowRight className="w-6 h-6" />
                    </motion.button>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "Dedicated Support",
                                description: "Get personalized assistance from our expert team"
                            },
                            {
                                icon: <Clock className="w-8 h-8" />,
                                title: "Fast Delivery",
                                description: "Quick turnaround times without compromising quality"
                            },
                            {
                                icon: <Award className="w-8 h-8" />,
                                title: "Quality Guarantee",
                                description: "100% satisfaction guarantee or your money back"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                                className="text-center"
                            >
                                <div className="text-accent-purple mb-3 flex justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-text-primary font-semibold mb-2">{item.title}</h4>
                                <p className="text-text-secondary text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-text-secondary text-sm mb-4">
                            Need a custom solution? Have questions about our pricing?
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-primary-400 hover:text-primary-300 font-semibold underline transition-colors duration-300"
                        >
                            Contact our sales team →
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
} 