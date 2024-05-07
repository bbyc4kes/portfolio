'use client'

import { useSectionInView } from '@/lib/hooks'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useActiveSectionContext } from '@/store/active-section-context'
import portfolioImg from '../../public/images/photo.jpg'
import Image from 'next/image'
import SectionDivider from '../section-divider'
import { useRef } from 'react'
import SectionHeading from '../section-heading'

//#90b8fc #84b3fc #7fb1fc

export default function About() {
  const { activeSection } = useActiveSectionContext()
  const { theme } = useTheme()
  const { ref } = useSectionInView('about', 0.3)
  const divRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.section
      className={`flex flex-col justify-center items-center leading-8 h-[1000px] z-50 w-full`}
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <motion.div
        className="relative w-[980px] h-[800px] overflow-hidden"
        ref={divRef}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
      >
        <div className="group">
          <div className="absolute right-0 top-1/3 max-w-[650px] text-lg z-40 font-semibold tracking-wide">
            I’ve had experience with many tools and technologies, but my current
            stack is TypeScript, React, Next.js, Node.js, MongoDB. Based on
            these experiences, I am currently working on various projects.
            <br />
            <br /> My goal as a Web Developer is to create a bridge between a
            product and its users. I build this bridge that has experiences and
            stories that people can empathize and interact with.
            <br />
            <br /> I am currently open for Web Development positions.
            <br /> So if you are interested,
            <br />
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
              <div className="group-hover:opacity-50 transition-opacity absolute inset-0 bg-gradient-to-b from-[#ffcbb4] via-[#e0afa0] to-[#e29578] rounded-full z-20"></div>
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
      </motion.div>
      <SectionDivider />
    </motion.section>
  )
}
