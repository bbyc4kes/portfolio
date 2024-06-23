'use client'

import 'next-cloudinary/dist/cld-video-player.css'
import SectionDivider from '../../shared/section-divider'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import TextAnimation from './text-animation'
import { smoothScrollTo } from '@/lib/utils'
import { CircleUser, Download, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { useActiveSectionContext } from '@/store/active-section-context'

export default function Hero() {
  const { ref } = useSectionInView('home')
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

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
        <a
          className="flex justify-center items-center absolute right-8 bottom-8 sm:right-16 sm:bottom-16 lg:right-24 lg:bottom-24 cursor-pointer z-[999]"
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
        </a>
        <div className="absolute top-36 lg:top-48 flex flex-col items-start justify-center container tracking-wide text-black dark:text-white">
          <div className="relative w-full h-full container">
            <div className="lg:text-[3rem] text-[2rem] font-extrabold lg:mb-5 text-start h-72 w-[350px] md:w-[700px] lg:w-[1000px]">
              <span className="font-extrabold mb-10 text-start">Hey!👋</span>
              <br />
              <TextAnimation delay={1} baseText={`I'm Maksym`} />
            </div>
            <motion.div
              className="flex flex-col md:flex-row w-92 items-center md:mt-12 justify-center gap-3 px-4 text-lg font-medium"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
            >
              <a
                className="group w-64 sm:w-auto bg-darkBg text-white hover:dark:text-black px-7 py-3 cursor-pointer flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-darkBeige active:scale-105 transition"
                onClick={(e) => {
                  smoothScrollTo({ e, id: 'contact' })
                  setActiveSection('contact')
                  setTimeOfLastClick(Date.now())
                }}
              >
                Contact me here{' '}
                <CircleUser className="opacity-70 group-hover:opacity-80" />
              </a>

              <a
                className="group w-64 sm:w-auto bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 justify-center"
                href="/CV_Azimov_Maksym.pdf"
                download
              >
                Download CV{' '}
                <Download className="opacity-60 group-hover:opacity-100" />
              </a>

              <div className="flex gap-2 ">
                <a
                  className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center justify-center gap-2 rounded-full w-[60px] h-[60px] focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://www.linkedin.com/in/maksym-azimov/"
                  target="_blank"
                >
                  <Linkedin />
                </a>

                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-105 hover:scale-105 hover:text-gray-950 w-[60px] h-[60px] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 justify-center"
                  href="https://github.com/bbyc4kes"
                  target="_blank"
                >
                  <Image
                    width={25}
                    height={25}
                    src={'/svgs/github.svg'}
                    alt="github icon"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="dark:bg-darkBg w-full flex justify-center">
        <SectionDivider />
      </div>
    </>
  )
}
