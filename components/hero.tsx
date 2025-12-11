'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { CanvasWrapper } from './canvas-wrapper'
import { HeroScene } from './hero-scene'
import { LoadingScreen } from './loading-screen'
import { useReducedMotion } from '@/lib/hooks/use-reduced-motion'
import { HERO_CONTENT } from '@/lib/constants'

const heroContent = HERO_CONTENT

export function Hero() {
  const [isLoading, setIsLoading] = useState(true)
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate asset loading with a minimum delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
      },
    },
  }

  const backgroundVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 1.2,
      },
    },
  }

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: prefersReducedMotion ? 0 : 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen min-h-screen overflow-hidden bg-black"
    >
      <LoadingScreen
        isLoading={isLoading}
        onLoadingComplete={() => setIsLoading(false)}
      />

      {/* Animated gradient background layers */}
      <motion.div
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-tl from-red-950/20 via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900/30" />
      </motion.div>

      {/* 3D Canvas - parallax responsive */}
      <motion.div
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0 z-10"
      >
        <CanvasWrapper dpr={[1, Math.min(2, window.devicePixelRatio)]}>
          <HeroScene isLoading={isLoading} />
        </CanvasWrapper>
      </motion.div>

      {/* Content overlay */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate={!isLoading ? 'animate' : 'initial'}
        className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        {/* Animated accent line */}
        <motion.div
          variants={itemVariants}
          className="mb-6 h-1 w-12 bg-gradient-to-r from-red-500 to-pink-500"
        />

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="max-w-4xl text-center text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight text-white leading-tight mb-4"
        >
          {heroContent.headline}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-center text-lg sm:text-xl text-gray-300 mb-8 font-light"
        >
          {heroContent.subheading}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-center text-sm sm:text-base text-gray-400 mb-12 leading-relaxed"
        >
          {heroContent.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <motion.button
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            className="px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-red-500/50 transition-shadow duration-300"
          >
            {heroContent.cta.primary}
          </motion.button>

          <motion.button
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            className="px-8 py-3 sm:px-10 sm:py-4 border-2 border-gray-400 text-gray-300 font-medium rounded-full hover:border-white hover:text-white transition-colors duration-300"
          >
            {heroContent.cta.secondary}
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={prefersReducedMotion ? {} : floatVariants.animate}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              Scroll to explore
            </p>
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Vignette effect */}
      <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  )
}
