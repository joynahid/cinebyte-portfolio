'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Play, Star, Users, Zap, Award, CheckCircle, Clock, Trophy } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import BrandScroll from './components/BrandScroll'
import ReelScroller from './components/ReelScroller'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Pricing from './components/Pricing'

// Custom Hook for Animated Counter
const useAnimatedCounter = (targetValue: number, isInView: boolean, duration: number = 2000) => {
    const [currentValue, setCurrentValue] = useState(0)
    const startTimeRef = useRef<number | null>(null)
    const animationRef = useRef<number | null>(null)

    useEffect(() => {
        if (!isInView) return

        const startAnimation = () => {
            startTimeRef.current = Date.now()

            const updateValue = () => {
                const now = Date.now()
                const elapsed = now - (startTimeRef.current || now)
                const progress = Math.min(elapsed / duration, 1)

                // Easing function for smooth animation
                const easeOut = 1 - Math.pow(1 - progress, 3)
                setCurrentValue(Math.floor(targetValue * easeOut))

                if (progress < 1) {
                    animationRef.current = requestAnimationFrame(updateValue)
                }
            }

            animationRef.current = requestAnimationFrame(updateValue)
        }

        startAnimation()

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [targetValue, isInView, duration])

    return currentValue
}

// Helper function to parse numbers from stat strings
const parseStatNumber = (statString: string): number => {
    const match = statString.match(/\d+/)
    return match ? parseInt(match[0]) : 0
}

// Helper function to format the animated number back to original format
const formatStatNumber = (originalString: string, animatedValue: number): string => {
    if (originalString.includes('/')) {
        return originalString // Don't animate time formats like "24/7"
    }

    const hasPlus = originalString.includes('+')
    return hasPlus ? `${animatedValue}+` : animatedValue.toString()
}

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const [heroRef, heroInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [featuresRef, featuresInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [statsRef, statsInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 }
    }

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    return (
        <div className="min-h-screen bg-surface-800">
            <Navigation />

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={heroInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center px-4 max-w-6xl mx-auto"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
                        className="text-3xl md:text-5xl font-medium text-white mb-6 leading-tight tracking-tight"
                        style={{
                            fontFamily: '"SF Pro Display", "Inter", system-ui, sans-serif',
                            fontWeight: 500,
                            letterSpacing: '-0.01em'
                        }}
                    >
                        Automate Your Visual Presence with{" "}
                        <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            CineByte
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        initial="initial"
                        animate={heroInView ? "animate" : "initial"}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                        className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        Where creativity meets technology. We craft exceptional digital experiences that captivate, engage, and inspire.
                    </motion.p>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate={heroInView ? "animate" : "initial"}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.button
                            variants={fadeInUp}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-gradient hover:from-primary-700 hover:to-secondary-700 text-text-primary px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Get Started <ArrowRight size={20} />
                        </motion.button>

                        <motion.button
                            variants={fadeInUp}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-surface-overlay-border text-text-primary px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-surface-overlay-medium transition-all duration-300"
                        >
                            <Play size={20} /> Watch Demo
                        </motion.button>
                    </motion.div>

                    {/* Social Proof Section */}
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        animate={heroInView ? "animate" : "initial"}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                        className="mt-16 max-w-4xl mx-auto"
                    >
                        {/* Client Avatars and Badge */}
                        <div className="flex flex-col items-center space-y-4">
                            {/* Client Avatars with Brand Badge */}
                            <div className="relative flex items-center justify-center">
                                {/* Client Avatar Group */}
                                <div className="flex -space-x-2">
                                    {[
                                        { name: "Rafsan", image: "/assets/clients/rafsan.png" },
                                        { name: "Nafis", image: "/assets/clients/nafis.png" },
                                        { name: "Don", image: "/assets/clients/don.png" },
                                        { name: "Sameer", image: "/assets/clients/sameer.png" },
                                        { name: "Neyon", image: "/assets/clients/neyon.png" }
                                    ].map((client, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0, x: -20 }}
                                            animate={heroInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                                            transition={{ 
                                                duration: 0.5, 
                                                delay: 0.8 + index * 0.1,
                                                type: "spring",
                                                stiffness: 200
                                            }}
                                            whileHover={{ scale: 1.1, zIndex: 10 }}
                                            className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border-3 border-white shadow-lg overflow-hidden cursor-pointer bg-surface-700"
                                            title={client.name}
                                        >
                                            <img 
                                                src={client.image} 
                                                alt={client.name}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"></div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Proof Text */}
                            <div className="text-center space-y-2">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 1.5 }}
                                    className="flex items-center justify-center space-x-1"
                                >
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ 
                                                duration: 0.3, 
                                                delay: 1.6 + i * 0.1,
                                                type: "spring",
                                                stiffness: 300
                                            }}
                                        >
                                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 1.7 }}
                                    className="text-2xl md:text-3xl font-bold text-white"
                                >
                                    Loved by <span className="text-brand-gradient">500+</span> Businesses worldwide
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 1.9 }}
                                    className="text-text-secondary text-lg"
                                >
                                    Our Clients Speak for Us
                                </motion.p>
                            </div>

                            {/* Additional Social Proof Elements */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 2.1 }}
                                className="flex flex-wrap justify-center items-center gap-6 mt-6 text-sm text-text-secondary"
                            >
                                <div className="flex items-center space-x-2 bg-surface-overlay-light/30 rounded-full px-4 py-2 backdrop-blur-sm border border-surface-overlay-border">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span>99% Client Satisfaction</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-surface-overlay-light/30 rounded-full px-4 py-2 backdrop-blur-sm border border-surface-overlay-border">
                                    <Trophy className="w-4 h-4 text-yellow-400" />
                                    <span>Award Winning Studio</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-surface-overlay-light/30 rounded-full px-4 py-2 backdrop-blur-sm border border-surface-overlay-border">
                                    <Users className="w-4 h-4 text-blue-400" />
                                    <span>4+ Years Experience</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-surface-overlay-border rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-surface-overlay-strong rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Brand Scroll Section */}
            <BrandScroll />

            {/* Reel Scroller Section */}
            <ReelScroller />

            {/* Features Section */}
            <section ref={featuresRef} className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 font-space">
                            Why Choose <span className="text-brand-gradient">CineByte</span>
                        </h2>
                        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                            We combine cutting-edge technology with creative excellence to deliver exceptional results
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Zap className="w-12 h-12" />,
                                title: "Lightning Fast",
                                description: "Optimized performance that delivers results at the speed of thought"
                            },
                            {
                                icon: <Users className="w-12 h-12" />,
                                title: "Expert Team",
                                description: "Seasoned professionals with years of experience in digital innovation"
                            },
                            {
                                icon: <Award className="w-12 h-12" />,
                                title: "Award Winning",
                                description: "Recognized excellence in design and development across multiple industries"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="glass-light rounded-2xl p-8 hover:glass-medium transition-all duration-300 border border-glass-light"
                            >
                                <div className="text-accent-purple mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-text-primary mb-4 font-space">{feature.title}</h3>
                                <p className="text-text-secondary">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <Services />

            {/* Pricing Section */}
            <Pricing />

            {/* Stats Section */}
            <section ref={statsRef} className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={statsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 font-space">
                            Our <span className="text-brand-gradient">Achievements</span>
                        </h2>
                        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                            Numbers that speak to our commitment to excellence and client satisfaction
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {[
                            {
                                number: "500+",
                                label: "Projects Completed",
                                icon: <CheckCircle className="w-8 h-8" />,
                                color: "text-green-400"
                            },
                            {
                                number: "22+",
                                label: "Happy Clients",
                                icon: <Users className="w-8 h-8" />,
                                color: "text-blue-400"
                            },
                            {
                                number: "4+",
                                label: "Years Experience",
                                icon: <Trophy className="w-8 h-8" />,
                                color: "text-yellow-400"
                            },
                            {
                                number: "24/7",
                                label: "Support Available",
                                icon: <Clock className="w-8 h-8" />,
                                color: "text-purple-400"
                            }
                        ].map((stat, index) => {
                            const AnimatedStat = () => {
                                const targetNumber = parseStatNumber(stat.number)
                                const animatedValue = useAnimatedCounter(targetNumber, statsInView, 2000 + index * 200)
                                const displayValue = formatStatNumber(stat.number, animatedValue)

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        whileHover={{
                                            scale: 1.05,
                                            y: -5,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="text-center group cursor-pointer"
                                    >
                                        <div className="relative backdrop-blur-sm rounded-2xl p-6 border border-surface-overlay-border hover:border-primary-500/50 transition-all duration-300 hover:bg-surface-overlay-light/50 hover:shadow-lg hover:shadow-primary-500/20">
                                            {/* Icon */}
                                            <motion.div
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={statsInView ? { scale: 1, rotate: 0 } : {}}
                                                transition={{
                                                    duration: 0.8,
                                                    delay: index * 0.2,
                                                    type: "spring",
                                                    stiffness: 200
                                                }}
                                                className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                {stat.icon}
                                            </motion.div>

                                            {/* Animated Number */}
                                            <motion.div
                                                className="text-4xl md:text-6xl font-bold text-brand-gradient mb-2 font-space group-hover:scale-110 transition-transform duration-300"
                                                key={displayValue} // Re-trigger animation when value changes
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {displayValue}
                                            </motion.div>

                                            {/* Label */}
                                            <div className="text-text-secondary text-lg font-medium group-hover:text-primary-300 transition-colors duration-300">
                                                {stat.label}
                                            </div>

                                            {/* Subtle pulse effect */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-secondary-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                animate={{
                                                    scale: [1, 1.02, 1],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                )
                            }

                            return <AnimatedStat key={index} />
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <Testimonials />

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-black/80 glass-backdrop rounded-3xl p-12 border border-glass-light"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-space">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-xl text-text-secondary mb-8">
                            Let's create something extraordinary together
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-gradient hover:from-primary-700 hover:to-secondary-700 text-text-primary px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Get In Touch
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
} 