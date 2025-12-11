'use client'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { HERITAGE_CONTENT } from '@/lib/constants'

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  return (
    <section ref={containerRef} className="py-32 bg-neutral-950 text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">{HERITAGE_CONTENT.title}</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">{HERITAGE_CONTENT.story}</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent" />

          {HERITAGE_CONTENT.timeline.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index }: { item: { year: string; title: string; description: string }; index: number }) {
  const isEven = index % 2 === 0
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex items-center mb-24 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Content */}
      <div className="flex-1 pl-12 md:pl-0 md:px-12 md:text-right">
        <div className={`md:text-${isEven ? 'right' : 'left'}`}>
          <span className="text-rose-500 font-bold text-lg mb-2 block">{item.year}</span>
          <h3 className="text-2xl font-serif font-bold mb-2">{item.title}</h3>
          <p className="text-neutral-400">{item.description}</p>
        </div>
      </div>

      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-neutral-900 border-2 border-rose-500 transform -translate-x-1/2 z-10" />

      {/* Empty space for opposite side */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}
