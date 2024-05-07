'use client'

import 'next-cloudinary/dist/cld-video-player.css'
import SectionDivider from '../section-divider'
import { useSectionInView } from '@/lib/hooks'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import TextAnimation from '../text-animation'

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
          theme === 'dark' && 'bg-[#0000007c]'
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

      <div className="absolute top-48 flex flex-col items-start justify-center container tracking-wide">
        <div className="relative w-full h-full container">
          <div className="absolute left-0 text-5xl font-extrabold mb-10 text-start h-24 max-w-[400px]">
            <span className="text-5xl font-extrabold mb-10 text-start">
              Hey!👋
            </span>
            <br />
            <TextAnimation delay={1} baseText={`I'm Maksym`} />
          </div>
          <motion.div
            className="text-2xl absolute right-0 flex text-center items-center justify-center tracking-wide font-semibold w-[400px] h-[400px] p-4 bg-opacity-70 rounded-full max-h-[400px] bg-[#ffcbb4] border-[1px] border-slate-600"
            initial={{ y: -100, x: 0, opacity: 0 }}
            animate={{ y: 0, x: 0, opacity: 1 }}
          >
            <p className="flex  items-center max-w-[80%]">
              I live in the exciting world of Web Development, where I move from
              one code to another trying to make sense of all the technologies.
            </p>
          </motion.div>
        </div>
      </div>
      <SectionDivider />
    </section>
  )
}
