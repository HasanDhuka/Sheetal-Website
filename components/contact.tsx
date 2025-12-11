'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { CONTACT_CONTENT } from '@/lib/constants'
import { MapPin, Clock, Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Ready hook for backend integration
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate network request
      console.log('Form submitted:', data)
      setIsSuccess(true)
      reset()
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-neutral-950 text-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12">{CONTACT_CONTENT.title}</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="text-rose-500 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                  <p className="text-neutral-400">{CONTACT_CONTENT.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-rose-500 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                  <ul className="text-neutral-400">
                    {CONTACT_CONTENT.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-8">
                        <span>{h.day}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="text-rose-500 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Contact</h3>
                  <p className="text-neutral-400">{CONTACT_CONTENT.email}</p>
                  <p className="text-neutral-400">{CONTACT_CONTENT.phone}</p>
                </div>
              </div>
            </div>
            
            <div className="h-64 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${CONTACT_CONTENT.coordinates.lng-0.01}%2C${CONTACT_CONTENT.coordinates.lat-0.01}%2C${CONTACT_CONTENT.coordinates.lng+0.01}%2C${CONTACT_CONTENT.coordinates.lat+0.01}&layer=mapnik&marker=${CONTACT_CONTENT.coordinates.lat}%2C${CONTACT_CONTENT.coordinates.lng}`}
                className="opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-neutral-900/50 p-8 md:p-12 rounded-3xl border border-white/5"
          >
            <h3 className="text-2xl font-serif font-bold mb-8">Send an Inquiry</h3>
            
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-500/20 p-6 rounded-xl text-center"
              >
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-green-500 mb-2">Message Sent</h4>
                <p className="text-neutral-300">Thank you for your inquiry. We will get back to you shortly.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-sm text-neutral-400 hover:text-white underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">Name</label>
                  <input
                    {...register("name")}
                    type="text"
                    className={cn(
                      "w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all",
                      errors.name && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    className={cn(
                      "w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all",
                      errors.email && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className={cn(
                      "w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all resize-none",
                      errors.message && "border-red-500 focus:ring-red-500"
                    )}
                    placeholder="How can we help you?"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-rose-500 to-amber-600 text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
