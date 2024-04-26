'use client'

import About from '@/components/about'
import Contact from '@/components/contact'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full px-24 py-0">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
