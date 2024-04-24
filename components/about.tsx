'use client'

import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref, inView } = useSectionInView('about')

  return (
    <section
      className={`w-full min-h-screen bg-green-500 scroll-mt-36`}
      id="about"
      ref={ref}
    >
      {inView ? 'I AM IN VIEW' : 'GRAAAAAAAAAAAAAAAA'}
    </section>
  )
}
