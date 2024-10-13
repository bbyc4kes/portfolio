'use client';

import { useRef, useState } from 'react';
import { projectsData } from '@/common/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  role,
  company,
  description,
  tags,
  imageUrl,
  teamSize,
  responsibilities,
  startDate,
  endDate
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  // useTransform to animate scale and opacity based on scroll position
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // State for toggling expand/collapse
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle expand/collapse
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <div className='grid justify-items-stretch'>
        {/* Clickable section to expand/collapse */}
        <section
          onClick={toggleExpand} // Toggle expand on click
          className={`relative max-w-[52rem] overflow-hidden rounded-lg border transition  ${isExpanded ? 'h-max' : 'h-96'
            } hover:bg-gray-200 dark:hover:bg-primary-foreground cursor-pointer`} // Adjust height based on state
        >
          <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
            <h4>{startDate} to {endDate}</h4>
            <h3 className="text-2xl font-semibold uppercase">{title}</h3>
            <i>{role}, {company}</i>
            <p className="mt-2 leading-relaxed">{description}</p>
            <i className="mt-2 leading-relaxed">Team Size: {teamSize}</i>
            <div className="mb-5 max-w-md rounded-xl shadow-md overflow-hidden">
              <h2 className="text-xl mb-4">My Responsibilities</h2>
              <ul className="space-y-4">
                {responsibilities.map((responsibility) => (
                  <li className="flex items-center p-4 bg-gray-900 rounded-lg shadow w-fit">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="rounded-full bg-[#ffcbb4] px-3 py-1 text-[0.7rem] uppercase tracking-wider dark:bg-[#ddbea9] dark:text-black"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={10}
            className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
          />
        </section>
        <button className='justify-self-auto' onClick={toggleExpand}>
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>
    </motion.div>
  );
}
