'use client'

import { useSectionInView } from '@/lib/hooks'

export default function Contact() {
  const { ref, inView } = useSectionInView('contact')

  return (
    <section
      className="w-full min-h-screen bg-gray-500 scroll-mt-36"
      id="contact"
      ref={ref}
    >
      {inView ? 'contact' : null}
    </section>
  )
}
