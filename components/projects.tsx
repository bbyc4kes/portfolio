'use client'

import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
  const { ref, inView } = useSectionInView('projects')

  return (
    <section
      className={`w-full min-h-screen bg-red-500 scroll-mt-36`}
      id="about"
      ref={ref}
    >
      {inView ? 'projects' : null}
    </section>
  )
}
