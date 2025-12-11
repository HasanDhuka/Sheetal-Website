'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { GALLERY_CONTENT } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { useReducedMotion } from '@/lib/hooks/use-reduced-motion'

export function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y1Raw = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2Raw = useTransform(scrollYProgress, [0, 1], [0, 100])
  
  const y1 = shouldReduceMotion ? 0 : y1Raw
  const y2 = shouldReduceMotion ? 0 : y2Raw

  return (
    <section ref={containerRef} className="py-24 bg-neutral-900 text-white relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif font-bold mb-16 text-center"
        >
          {GALLERY_CONTENT.title}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_CONTENT.images.map((image, index) => (
            <motion.div
              key={image.id}
              layoutId={`card-${image.id}`}
              onClick={() => setSelectedId(image.id)}
              style={{ y: index % 2 === 0 ? y1 : y2 }}
              className={cn(
                "cursor-pointer overflow-hidden rounded-xl aspect-[4/5] relative group shadow-2xl",
                image.color
              )}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              className={cn(
                "relative w-full max-w-4xl aspect-video rounded-xl shadow-2xl",
                GALLERY_CONTENT.images.find(img => img.id === selectedId)?.color
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-rose-500 transition-colors"
              >
                <X size={32} />
              </button>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white">
                  {GALLERY_CONTENT.images.find(img => img.id === selectedId)?.alt}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
