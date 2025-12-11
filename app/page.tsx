import dynamic from 'next/dynamic'
import { SignatureProducts } from '@/components/signature-products'
import { Gallery } from '@/components/gallery'
import { About } from '@/components/about'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'

// Dynamically import Hero component with SSR disabled for Three.js
const Hero = dynamic(() => import('@/components/hero').then(mod => ({ default: mod.Hero })), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="w-full bg-neutral-950 overflow-x-hidden">
      <Hero />
      <SignatureProducts />
      <Gallery />
      <About />
      <Testimonials />
      <Contact />
    </main>
  )
}
