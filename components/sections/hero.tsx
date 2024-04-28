'use client'

import { useSectionInView } from '@/lib/hooks'
import 'next-cloudinary/dist/cld-video-player.css'
import SectionDivider from '../section-divider'
import { useTheme } from 'next-themes'

//#ffcbb4

export default function Hero() {
  const { ref } = useSectionInView('home')
  const { theme } = useTheme()

  return (
    <section
      className="flex flex-col min-h-screen w-full scroll-mt-36 justify-center items-center relative"
      id="home"
      ref={ref}
    >
      <div
        className={`absolute top-0 left-0 h-screen w-screen ${
          theme === 'dark' && 'bg-[#000000ac]'
        }`}
      ></div>
      <video
        width="480"
        height="720"
        preload="none"
        autoPlay
        muted
        loop
        className="object-cover h-screen w-screen"
      >
        <source src="/layout.mp4" />
      </video>

      <div className="absolute top-1/4 flex flex-col items-center justify-center container">
        <div className="text-4xl font-extrabold mb-14">
          Hey! I&apos;m Maksym.
        </div>
        <div className="flex text-center font-semibold tracking-wide max-w-[1000px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          veniam eligendi necessitatibus vitae quasi quibusdam, explicabo earum?
          Vero, amet ut corporis nostrum asperiores impedit atque pariatur fuga,
          ad perferendis explicabo?
        </div>
      </div>
      <SectionDivider />
    </section>
  )
}
