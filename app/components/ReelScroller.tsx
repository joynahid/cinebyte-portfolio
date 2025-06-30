'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Volume2, VolumeX, Play, Star, Briefcase, Camera, Award } from 'lucide-react'

interface ReelVideo {
    id: string
    youtubeId: string
    title: string
    description: string
    thumbnail: string
    category: string
}

interface TabCategory {
    id: string
    label: string
    icon: React.ReactNode
    description: string
}

export default function ReelScroller() {
    const [isMuted, setIsMuted] = useState(true)
    const [activeTab, setActiveTab] = useState('showcase')
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    // Tab categories
    const tabCategories: TabCategory[] = [
        {
            id: 'shorts',
            label: 'Shorts',
            icon: <Star className="w-4 h-4" />,
            description: 'Our best work highlights'
        },
        {
            id: 'youtube',
            label: 'Youtube',
            icon: <Briefcase className="w-4 h-4" />,
            description: 'Success stories & testimonials'
        }
    ]

    // Sample reel videos with categories - replace with your YouTube video IDs
    const reelVideos: ReelVideo[] = [
        {
            id: '1',
            youtubeId: '7kWIwNiZIcw',
            title: 'Portfolio Showcase',
            description: 'Our best work in action',
            thumbnail: 'https://img.youtube.com/vi/7kWIwNiZIcw/maxresdefault.jpg',
            category: 'shorts'
        },
        {
            id: '2',
            youtubeId: '0FySbunwAhE',
            title: 'Brand Transformation',
            description: 'Complete brand makeover',
            thumbnail: 'https://img.youtube.com/vi/0FySbunwAhE/maxresdefault.jpg',
            category: 'shorts'
        },
        {
            id: '3',
            youtubeId: 'e_n2ttGhT1o',
            title: 'Client Success Story',
            description: 'Transforming brands with innovation',
            thumbnail: 'https://img.youtube.com/vi/e_n2ttGhT1o/maxresdefault.jpg',
            category: 'shorts'
        },
        {
            id: '4',
            youtubeId: '2mUkDPb_6B0',
            title: 'Happy Client Testimonial',
            description: 'What our clients say about us',
            thumbnail: 'https://img.youtube.com/vi/2mUkDPb_6B0/maxresdefault.jpg',
            category: 'shorts'
        }
    ]

    // Filter videos by active tab
    const filteredVideos = reelVideos.filter(video => video.category === activeTab)
    const activeCategory = tabCategories.find(tab => tab.id === activeTab)

    const getYouTubeEmbedUrl = (videoId: string) => {
        const params = new URLSearchParams({
            autoplay: '1',
            mute: '1', // Always start muted
            controls: '0',
            modestbranding: '1',
            rel: '0',
            showinfo: '0',
            loop: '1',
            playlist: videoId,
            disablekb: '1',
            fs: '0'
        })
        return `https://www.youtube.com/embed/${videoId}?${params.toString()}`
    }

    return (
        <section ref={ref} className="relative py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-surface-900/50 via-primary-900/30 to-surface-900/50"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12 lg:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary mb-4 sm:mb-6 leading-tight">
                        Reel Showcase: <span className="text-brand-gradient">Our Best Work</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
                        Experience our creative journey through this curated collection of vertical video content
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 lg:mb-16"
                >
                    {tabCategories.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`group relative px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center gap-2 text-sm sm:text-base font-medium ${activeTab === tab.id
                                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                                    : 'bg-surface-800/50 text-text-secondary hover:bg-surface-700/50 hover:text-text-primary'
                                }`}
                        >
                            {tab.icon}
                            <span className="hidden sm:inline">{tab.label}</span>
                            <span className="sm:hidden">{tab.label.split(' ')[0]}</span>

                            {/* Active indicator */}
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-primary-600 rounded-xl sm:rounded-2xl -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Active Category Description */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <p className="text-text-secondary text-sm sm:text-base">
                        {activeCategory?.description}
                    </p>
                </motion.div>

                {/* Video Grid with Animation - 9:16 Aspect Ratio */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12 justify-items-center max-w-6xl mx-auto"
                    >
                        {filteredVideos.map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="group cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-none mx-auto"
                            >
                                <div className="aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl bg-black relative hover:shadow-primary-500/20 transition-all duration-300 group-hover:scale-[1.02]">
                                    <iframe
                                        src={getYouTubeEmbedUrl(video.youtubeId)}
                                        title={video.title}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />

                                    {/* Video overlay with title */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-white font-semibold text-sm sm:text-base mb-1 line-clamp-2">
                                            {video.title}
                                        </h3>
                                        <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">
                                            {video.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Empty state */}
                {filteredVideos.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12 sm:py-16"
                    >
                        <div className="bg-surface-800/30 rounded-2xl p-8 sm:p-12 max-w-md mx-auto">
                            <Play className="w-12 h-12 text-text-secondary mx-auto mb-4" />
                            <h3 className="text-text-primary text-lg sm:text-xl font-semibold mb-2">
                                No videos in this category
                            </h3>
                            <p className="text-text-secondary text-sm sm:text-base">
                                Content for this category is coming soon.
                            </p>
                        </div>
                    </motion.div>
                )}

            </div>
        </section>
    )
} 