'use client'

import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref, inView } = useSectionInView('about')

  return (
    <section
      className={`flex justify-center items-center h-[1200px] w-full scroll-mt-36`}
      id="about"
      ref={ref}
    >
      <div className="relative w-[950px] h-[680px] overflow-hidden">
        <div className="absolute right-0 top-1/3 max-w-[639px] text-xl">
          I’ve had experience with many tools and technologies, but my current
          stack is TypeScript, React, Next.js, Node.js, MongoDB. Based on these
          experiences, I am currently working on various projects. <br /> <br />{' '}
          My goal as a Web Developer is to create a bridge between a product and
          its users. I build this brigde that has experiences and stories that
          people can empathize and interact with. I am currently open for Web
          Development positions. <br />
          <br />
          So if you are interested,
          <br />{' '}
          <span className="text-2xl font-bold bg-blue-400">Contact me!</span>
        </div>
        <div className="absolute left-0 top-1/4 -z-10 w-[500px] h-[500px] bg-gray-500 rounded-full"></div>
      </div>
    </section>
  )
}
