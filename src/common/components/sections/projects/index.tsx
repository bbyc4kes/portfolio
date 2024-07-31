'use client'

import React from 'react'
import { useSectionInView } from '@/common/lib/hooks'
import { projectsData } from '@/common/lib/data'
import Project from './_components/project'
import SectionHeading from '@/common/components/shared/section-heading'
import SectionDivider from '@/common/components/shared/section-divider'

export default function Projects() {
  const { ref } = useSectionInView('projects', 0.25)

  return (
    <section
      className="flex flex-col justify-center items-center w-full min-h-screen scroll-mt-36 dark:bg-darkBg dark:text-white"
      id="projects"
      ref={ref}
    >
      <SectionHeading>Work</SectionHeading>
      <div className="my-24">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <SectionDivider />
    </section>
  )
}
