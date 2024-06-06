'use client'

import About from '@/components/sections/about/about.page'
import Contact from '@/components/sections/contact/contact.page'
import Experience from '@/components/sections/experience/experience.page'
import Hero from '@/components/sections/hero/hero.page'
import Projects from '@/components/sections/projects/projects.page'
import Skills from '@/components/sections/skills/skills.page'

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
