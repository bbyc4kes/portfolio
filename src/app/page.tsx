'use client'

import About from '@/common/components/sections/about'
import Contact from '@/common/components/sections/contact'
import Experience from '@/common/components/sections/experience'
import Hero from '@/common/components/sections/hero'
import Projects from '@/common/components/sections/projects'
import Skills from '@/common/components/sections/skills'

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
