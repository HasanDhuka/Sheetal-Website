import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('@/components/hero').then(mod => ({ default: mod.Hero })), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
    </main>
  )
}
