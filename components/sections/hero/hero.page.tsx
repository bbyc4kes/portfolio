'use client'

import 'next-cloudinary/dist/cld-video-player.css'
import SectionDivider from '../../section-divider'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import TextAnimation from './text-animation'
import Link from 'next/link'
import { smoothScrollTo } from '@/lib/utils'

export default function Hero() {
  const { ref } = useSectionInView('home')

  return (
    <>
      <section
        className="flex flex-col h-screen w-full scroll-mt-36 justify-center items-center relative"
        id="home"
        ref={ref}
      >
        <div
          className={
            'absolute top-0 left-0 h-screen w-screen dark:bg-[#0000007c]'
          }
        ></div>
        <video
          width="480"
          height="720"
          preload="none"
          autoPlay
          crossOrigin="anonymous"
          muted
          loop
          className="-z-10 object-cover h-screen w-screen"
        >
          <source src="/layout.mp4" />
        </video>
        <Link
          className="flex justify-center items-center absolute right-32 bottom-32"
          href={'about'}
          onClick={(e) => {
            smoothScrollTo({ e, id: 'about' })
          }}
        >
          <motion.span
            className="w-2 h-10 bg-black  dark:bg-[#ddbea9] rounded-lg m-2"
            initial={{ y: 0, rotate: -45 }}
            animate={{ y: [0, 25, 0], rotate: [-45, -45, -45] }}
            transition={{
              duration: 1.1,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
          <motion.span
            className="w-2 h-10 bg-black dark:bg-[#ddbea9] rounded-lg m-2"
            initial={{ y: 0, rotate: 45 }}
            animate={{ y: [0, 25, 0], rotate: [45, 45, 45] }}
            transition={{
              duration: 1.1,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
        </Link>
        <div className="absolute top-48 flex flex-col items-start justify-center container tracking-wide text-black dark:text-white">
          <div className="relative w-full h-full container">
            <div className="absolute left-0 text-5xl font-extrabold mb-10 text-start h-72 max-w-[1200px]">
              <span className="text-[5rem] font-extrabold mb-10 text-start">
                Hey!👋
              </span>
              <br />
              <TextAnimation delay={1} baseText={`I'm Maksym`} />
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />
    </>
  )
}
