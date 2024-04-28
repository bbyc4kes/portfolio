'use client'

import About from '@/components/sections/about'
import Contact from '@/components/sections/contact'
import Hero from '@/components/sections/hero'
import Projects from '@/components/sections/projects'
import Skills from '@/components/sections/skills'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full p-0">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
