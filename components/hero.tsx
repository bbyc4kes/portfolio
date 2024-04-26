'use client'

import { useSectionInView } from '@/lib/hooks'
import 'next-cloudinary/dist/cld-video-player.css'

export default function Hero() {
  const { ref } = useSectionInView('home')

  return (
    <section
      className="flex min-h-screen w-full scroll-mt-36 justify-center bg-gray-500"
      id="home"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center container">
        <div className="text-4xl font-bold mb-14">Hey! I&apos;m Maksym.</div>
        <div className="flex text-center font-semibold tracking-wide max-w-[1000px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          veniam eligendi necessitatibus vitae quasi quibusdam, explicabo earum?
          Vero, amet ut corporis nostrum asperiores impedit atque pariatur fuga,
          ad perferendis explicabo?
        </div>
      </div>
    </section>
  )
}
