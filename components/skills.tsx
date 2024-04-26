'use client'

import { useSectionInView } from '@/lib/hooks'

export default function Skills() {
  const { ref, inView } = useSectionInView('skills')

  return (
    <section
      className={`w-full min-h-screen bg-orange-500 scroll-mt-36`}
      id="about"
      ref={ref}
    >
      {inView ? 'skills' : null}
    </section>
  )
}
