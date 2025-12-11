'use client'

import { motion } from 'framer-motion'

interface LoadingScreenProps {
  isLoading: boolean
  onLoadingComplete?: () => void
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  }

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4 },
    },
  }

  const loaderVariants = {
    animate: {
      rotate: 360,
      transition: { duration: 2, repeat: Infinity, ease: 'linear' },
    },
  }

  const dotVariants = {
    animate: {
      y: [0, -10, 0],
      opacity: [0.3, 1, 0.3],
      transition: { duration: 1.5, repeat: Infinity },
    },
  }

  if (!isLoading) {
    return null
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black"
    >
      <div className="flex flex-col items-center gap-8">
        <motion.div
          variants={loaderVariants}
          animate="animate"
          className="relative w-20 h-20"
        >
          <div className="absolute inset-0 border-2 border-transparent border-t-red-500 border-r-red-500 rounded-full" />
          <div className="absolute inset-0 border-2 border-transparent border-b-green-500 rounded-full" />
        </motion.div>

        <motion.div variants={textVariants} className="text-center">
          <h2 className="text-2xl font-light text-white tracking-wide">
            Crafting Your Experience
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                variants={dotVariants}
                animate="animate"
                transition={{ delay: i * 0.2 }}
                className="w-2 h-2 rounded-full bg-gray-400"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
