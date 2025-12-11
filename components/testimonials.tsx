'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS_CONTENT } from '@/lib/constants'
import { Star } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif font-bold mb-16 text-center"
        >
          Critics & Connoisseurs
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_CONTENT.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700/50 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-xl italic text-neutral-300 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="font-medium text-white/90">
                — {testimonial.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
