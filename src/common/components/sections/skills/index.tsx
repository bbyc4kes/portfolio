'use client'

import React from 'react'
import { skillsData } from '@/common/lib/data'
import { useSectionInView } from '@/common/lib/hooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from '@/common/components/shared/section-heading'
import SectionDivider from '@/common/components/shared/section-divider'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView('skills')

  return (
    <section
      id="skills"
      ref={ref}
      className="pb-[150px] text-center sm:pb-40 py-24 w-full dark:text-white dark:bg-darkBg flex flex-col items-center justify-center"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center items-center gap-2 text-lg text-gray-800 my-26 mb-[150px] max-w-[53rem]">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-gray-200 borderBlack flex justify-center items-center rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Image
              src={skill[1]}
              alt={skill[0]}
              width={24}
              height={24}
              className="w-6 h-6 mr-2 inline"
            />
            {skill[0]}
          </motion.li>
        ))}
      </ul>
      <div className="dark:bg-darkBg w-full flex justify-center">
        <SectionDivider />
      </div>
    </section>
  )
}
