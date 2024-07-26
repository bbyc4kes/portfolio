'use client'

import About from '@/components/sections/about/about'
import Contact from '@/components/sections/contact/contact'
import Experience from '@/components/sections/experience/experience'
import Hero from '@/components/sections/hero/hero'
import Projects from '@/components/sections/projects/projects'
import Skills from '@/components/sections/skills/skills'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full p-0">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  )
}
