'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SIGNATURE_PRODUCTS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/lib/hooks/use-reduced-motion'

export function SignatureProducts() {
  const targetRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Adjust transformation range based on number of items
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-65%'])

  if (shouldReduceMotion) {
    return (
      <section className="py-24 bg-neutral-950 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              {SIGNATURE_PRODUCTS.title}
            </h2>
            <p className="text-xl text-neutral-400">
              {SIGNATURE_PRODUCTS.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {SIGNATURE_PRODUCTS.products.map((product) => (
              <div 
                key={product.id} 
                className="relative h-[50vh] flex flex-col justify-end p-8 md:p-12 rounded-3xl overflow-hidden group"
              >
                <div className={cn("absolute inset-0 bg-gradient-to-br", product.color)} />
                <div className="absolute inset-0 bg-black/20" />
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-5xl font-serif font-bold mb-4">{product.name}</h3>
                  <p className="text-lg md:text-xl text-white/90 max-w-lg">{product.description}</p>
                  <button className="mt-8 px-6 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-950 text-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden pl-4 md:pl-20">
        <div className="absolute top-10 left-4 md:left-20 z-10 max-w-md">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            {SIGNATURE_PRODUCTS.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-neutral-400"
          >
            {SIGNATURE_PRODUCTS.subtitle}
          </motion.p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 md:gap-20 pt-20">
          {SIGNATURE_PRODUCTS.products.map((product) => (
            <div 
              key={product.id} 
              className="relative h-[60vh] w-[85vw] md:w-[60vw] flex-shrink-0 flex flex-col justify-end p-8 md:p-12 rounded-3xl overflow-hidden group"
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-105", product.color)} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl md:text-5xl font-serif font-bold mb-4">{product.name}</h3>
                <p className="text-lg md:text-xl text-white/90 max-w-lg">{product.description}</p>
                <button className="mt-8 px-6 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
