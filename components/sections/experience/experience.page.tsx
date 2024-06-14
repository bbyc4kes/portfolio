'use client'

import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { useHasMounted, useSectionInView } from '@/lib/hooks'
import SectionHeading from '@/components/shared/section-heading'
import { useTheme } from 'next-themes'
import { experiencesData } from '@/lib/data'

export default function Experience() {
  const { ref } = useSectionInView('experience')
  const { theme } = useTheme()
  const ihasMounted = useHasMounted()

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-12 w-full dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="" animate={false}>
        {ihasMounted &&
          experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === 'light'
                      ? '0.4rem solid #9ca3af'
                      : '0.4rem solid rgba(255, 255, 255, 0.5)',
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === 'light' ? '#fff' : 'rgba(255, 255, 255, 0.15)',
                  fontSize: '1.5rem',
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
      </VerticalTimeline>
    </section>
  )
}
