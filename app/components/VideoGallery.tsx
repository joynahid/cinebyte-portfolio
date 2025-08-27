'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Eye, Film } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

interface Video {
  id: string
  src: string
  title: string
  category: string
  description?: string
}

interface VideoSection {
  id: string
  title: string
  description: string
  videos: Video[]
  theme: 'reel' | 'prime' | 'featured' | 'extended'
}

export default function VideoGallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Organize videos by categories
  const videoSections: VideoSection[] = [
    {
      id: 'reel-series',
      title: 'REEL Series',
      description: 'Our signature reel collection showcasing dynamic content',
      theme: 'reel',
      videos: [
        { id: 'reel-1', src: '/assets/videos/REEL 1_720p.mp4', title: 'REEL 1', category: 'reel', description: 'Dynamic visual storytelling' },
        { id: 'reel-2', src: '/assets/videos/REEL 2_720p.mp4', title: 'REEL 2', category: 'reel', description: 'Creative content showcase' },
        { id: 'reel-3', src: '/assets/videos/REEL 3_720p.mp4', title: 'REEL 3', category: 'reel', description: 'Artistic expression in motion' },
        { id: 'reel-4', src: '/assets/videos/REEL 4_720p.mp4', title: 'REEL 4', category: 'reel', description: 'Visual narrative excellence' },
        { id: 'reel-5', src: '/assets/videos/REEL 5_720p.mp4', title: 'REEL 5', category: 'reel', description: 'Cinematic storytelling' },
        { id: 'reel-6', src: '/assets/videos/REEL 6_720p.mp4', title: 'REEL 6', category: 'reel', description: 'Professional video content' },
        { id: 'reel-7', src: '/assets/videos/REEL 7_720p.mp4', title: 'REEL 7', category: 'reel', description: 'Engaging visual content' },
      ]
    },
    {
      id: 'prime-pursuit',
      title: 'Prime Pursuit Series',
      description: 'Premium content series highlighting our pursuit of excellence',
      theme: 'prime',
      videos: [
        { id: 'prime-1', src: '/assets/videos/PRIME PURSUIT 1_720p.mp4', title: 'Prime Pursuit 1', category: 'prime', description: 'Excellence in every frame' },
        { id: 'prime-2', src: '/assets/videos/PRIME PURSUIT 2_720p.mp4', title: 'Prime Pursuit 2', category: 'prime', description: 'Premium quality content' },
        { id: 'prime-3', src: '/assets/videos/PRIME PURSUIT 3_720p.mp4', title: 'Prime Pursuit 3', category: 'prime', description: 'Professional storytelling' },
        { id: 'prime-4', src: '/assets/videos/PRIME PURSUIT 4_720p.mp4', title: 'Prime Pursuit 4', category: 'prime', description: 'Cinematic excellence' },
      ]
    },
    {
      id: 'featured-content',
      title: 'Featured Content',
      description: 'Specially curated content showcasing our diverse creative capabilities',
      theme: 'featured',
      videos: [
        { id: 'durbin', src: '/assets/videos/DURBIN BANGLA REEL 5 V1_720p.mp4', title: 'Durbin Bangla Special', category: 'featured', description: 'Cultural storytelling at its finest' },
        { id: 'honest-review', src: '/assets/videos/HONEST REVIEW_720p.mp4', title: 'Honest Review', category: 'featured', description: 'Authentic review content' },
        { id: 'fav-item', src: '/assets/videos/FAV ITEM SUBTITLED_720p.mp4', title: 'Favorite Item', category: 'featured', description: 'Product showcase excellence' },
        { id: 'focus-learn', src: '/assets/videos/FOCUS LEARN BELONG_720p.mp4', title: 'Focus Learn Belong', category: 'featured', description: 'Educational content creation' },
        { id: 'interior', src: '/assets/videos/INTERIOR_720p.mp4', title: 'Interior Design', category: 'featured', description: 'Architectural visualization' },
        { id: 'durbin-special', src: '/assets/videos/HOW\'S DURBIN BANGLA SPECIAL_720p.mp4', title: 'How\'s Durbin Bangla Special', category: 'featured', description: 'Cultural storytelling and experiences' },
      ]
    },
    {
      id: 'extended-versions',
      title: 'Extended Versions',
      description: 'Longer format content and alternative versions',
      theme: 'extended',
      videos: [
        { id: 'reel-1-3', src: '/assets/videos/Reel 1.3_720p.mp4', title: 'Reel 1.3 Extended', category: 'extended', description: 'Extended narrative format' },
        { id: 'reel-3-2', src: '/assets/videos/Reel 3.2_720p.mp4', title: 'Reel 3.2 Extended', category: 'extended', description: 'In-depth visual content' },
        { id: 'reel-4-1', src: '/assets/videos/Reel 4.1_720p.mp4', title: 'Reel 4.1 Extended', category: 'extended', description: 'Detailed creative showcase' },
        { id: 'instructor', src: '/assets/videos/Reel 3 - INSTRUCTOR TESTIMONIAL_720p.mp4', title: 'Instructor Testimonial', category: 'extended', description: 'Client success story' },
      ]
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-subtle-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center content-spacing-lg"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white content-spacing-sm leading-tight">
            Video <span className="text-brand-gradient-light">Gallery</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our comprehensive collection of video content, organized by series and themes
          </p>
        </motion.div>

        {/* Video Sections */}
        <div className="space-y-20">
          {videoSections.map((section, sectionIndex) => (
            <VideoSection 
              key={section.id} 
              section={section} 
              index={sectionIndex}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface VideoSectionProps {
  section: VideoSection
  index: number
  inView: boolean
}

function VideoSection({ section, index, inView }: VideoSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null)

  const getThemeColors = (theme: string) => {
    switch (theme) {
      case 'reel':
        return { primary: 'from-blue-500/30 to-blue-600/30', accent: 'text-blue-200 font-bold' }
      case 'prime':
        return { primary: 'from-amber-500/30 to-amber-600/30', accent: 'text-amber-200 font-bold' }
      case 'featured':
        return { primary: 'from-emerald-500/30 to-emerald-600/30', accent: 'text-emerald-200 font-bold' }
      case 'extended':
        return { primary: 'from-gray-500/30 to-gray-600/30', accent: 'text-gray-200 font-bold' }
      default:
        return { primary: 'from-primary/40 to-secondary/40', accent: 'text-white font-bold' }
    }
  }

  const themeColors = getThemeColors(section.theme)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 * index }}
      className="relative"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 + 0.2 * index }}
          className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${themeColors.primary} backdrop-blur-sm border-2 border-white/30 shadow-card mb-4`}
        >
          <Film className={`inline-block w-5 h-5 mr-2 ${themeColors.accent}`} />
          <span className={`font-medium ${themeColors.accent}`}>{section.theme.toUpperCase()}</span>
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 + 0.2 * index }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3"
        >
          {section.title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 + 0.2 * index }}
          className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
        >
          {section.description}
        </motion.p>
      </div>

      {/* Swiper Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 + 0.2 * index }}
        className="relative"
      >
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: `.swiper-button-next-${section.id}`,
            prevEl: `.swiper-button-prev-${section.id}`,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 35,
            },
          }}
          className="video-swiper !pb-12"
        >
          {section.videos.map((video, videoIndex) => (
            <SwiperSlide key={video.id} className="!h-auto">
              <VideoCard video={video} index={videoIndex} theme={section.theme} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          className={`swiper-button-prev-${section.id} absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm`}
          aria-label="Previous video"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button
          className={`swiper-button-next-${section.id} absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm`}
          aria-label="Next video"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </motion.div>
    </motion.div>
  )
}

interface VideoCardProps {
  video: Video
  index: number
  theme: string
}

function VideoCard({ video, index, theme }: VideoCardProps) {
  const [videoRef, videoInView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })
  
  const videoElementRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  // Auto-play on scroll - with loading optimization
  useEffect(() => {
    const videoElement = videoElementRef.current
    if (!videoElement) return

    if (videoInView) {
      // Only start loading when in view
      if (!videoElement.src) {
        videoElement.src = video.src
      }
      
      const playPromise = videoElement.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
          })
          .catch(() => {
            setIsPlaying(false)
          })
      }
    } else {
      videoElement.pause()
      setIsPlaying(false)
    }
  }, [videoInView, video.src])

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    const videoElement = videoElementRef.current
    if (!videoElement) return

    if (isPlaying) {
      videoElement.pause()
      setIsPlaying(false)
    } else {
      const playPromise = videoElement.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
          })
          .catch(() => {
            setIsPlaying(false)
          })
      }
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const videoElement = videoElementRef.current
    if (!videoElement) return

    videoElement.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const getThemeAccent = (theme: string) => {
    switch (theme) {
      case 'reel': return 'from-blue-500 to-blue-600'
      case 'prime': return 'from-amber-500 to-amber-600'
      case 'featured': return 'from-emerald-500 to-emerald-600'
      case 'extended': return 'from-gray-500 to-gray-600'
      default: return 'from-primary to-secondary'
    }
  }

  return (
    <div
      ref={videoRef}
      className="group cursor-pointer w-full"
    >
      <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-card shadow-card hover-shadow-elevated transition-all duration-200 group-hover:scale-[1.02]">
        {/* Video Element - Lazy Loading */}
        <video
          ref={videoElementRef}
          className="w-full h-full object-contain bg-black"
          muted={isMuted}
          loop
          playsInline
          preload="none"
        />

        {/* Video Controls Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-150">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-200 backdrop-blur-md border border-white/20"
          >
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </button>

          {/* Top Controls */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <div className="flex items-center gap-2">
              <Eye size={16} className="text-white/80" />
              <span className="text-white/80 text-sm font-medium">Auto-play</span>
            </div>
            
            <button
              onClick={toggleMute}
              className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-md border border-white/20"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>

          {/* Bottom Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className={`w-full h-1 bg-white/20 rounded-full mb-4 overflow-hidden`}>
              <div className={`h-full bg-gradient-to-r ${getThemeAccent(theme)} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-2000 origin-left`}></div>
            </div>
            
            <h4 className="text-white font-bold text-lg mb-2 leading-tight">
              {video.title}
            </h4>
            
            {video.description && (
              <p className="text-white/80 text-sm leading-relaxed">
                {video.description}
              </p>
            )}
          </div>
        </div>

        {/* Always Visible Title */}
        <div className="absolute bottom-6 left-6 right-6 group-hover:opacity-0 transition-opacity duration-150">
          <h4 className="text-white font-bold text-lg drop-shadow-lg leading-tight">
            {video.title}
          </h4>
          <div className={`w-20 h-1 bg-gradient-to-r ${getThemeAccent(theme)} rounded-full mt-2`}></div>
        </div>
      </div>
    </div>
  )
}
