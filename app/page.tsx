'use client'

import About from '@/components/about'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-0">
      <Hero />
      <About />
    </main>
  )
}
