'use client'

import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useActiveSectionContext } from '@/store/active-section-context'
import portfolioImg from '../../public/photo.jpg'
import Image from 'next/image'
import SectionDivider from '../section-divider'

//#90b8fc #84b3fc #7fb1fc

export default function About() {
  const { activeSection } = useActiveSectionContext()
  const { theme } = useTheme()
  const { ref } = useSectionInView('about', 0.5)

  return (
    <motion.section
      className={`flex flex-col justify-center items-center leading-8 h-[1000px] z-50 w-full`}
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="relative w-[980px] h-[800px] overflow-hidden">
        <div className="group">
          <div className="absolute right-0 top-1/3 max-w-[650px] text-lg z-40 font-semibold tracking-wide">
            I’ve had experience with many tools and technologies, but my current
            stack is TypeScript, React, Next.js, Node.js, MongoDB. Based on
            these experiences, I am currently working on various projects.
            <br />
            <br /> My goal as a Web Developer is to create a bridge between a
            product and its users. I build this brigde that has experiences and
            stories that people can empathize and interact with.
            <br />
            <br /> I am currently open for Web Development positions.
            <br /> So if you are interested,
            <br />{' '}
            <span
              className={`text-2xl font-bold ${
                activeSection === 'about' && theme === 'dark'
                  ? 'bg-[#ddbea9]'
                  : 'bg-[#ffcbb4]'
              }`}
            >
              Contact me!
            </span>
          </div>
          <div className="absolute left-0 top-1/4 z-30">
            <div className="relative w-[470px] h-[470px]">
              <div className="group-hover:opacity-70 transition-opacity absolute inset-0 bg-gradient-to-b from-[#ffcbb4] from-30% via-[#ebd4cb] via-50% to-[#f5e9e2] to-70% rounded-full z-20"></div>
              <div className="absolute inset-0">
                <Image
                  src={portfolioImg}
                  alt="portfolio image"
                  objectFit="cover"
                  placeholder="blur"
                  fill
                  className="rounded-full z-10 w-[470px] h-[470px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionDivider />
    </motion.section>
  )
}
