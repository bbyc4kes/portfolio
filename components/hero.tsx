'use client'

import { useSectionInView } from '@/lib/hooks'

export default function Hero() {
  const { ref } = useSectionInView('home')

  return (
    <section
      className="flex min-h-screen scroll-mt-72 justify-center"
      id="home"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center max-w-[1000px]">
        <div className="text-4xl font-bold mb-14">Hey! I&apos;m Maksym.</div>
        <div className="flex text-center font-semibold tracking-wide">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          veniam eligendi necessitatibus vitae quasi quibusdam, explicabo earum?
          Vero, amet ut corporis nostrum asperiores impedit atque pariatur fuga,
          ad perferendis explicabo?
        </div>
      </div>
    </section>
  )
}
