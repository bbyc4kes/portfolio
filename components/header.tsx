'use client'

import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import { smoothScrollTo } from '@/lib/utils'
import { useActiveSectionContext } from '@/store/active-section-context'

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()

  return (
    <header className="z-[99] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-[#f4f3ee] border-opacity-40  bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[32rem] sm:rounded-full"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[20rem] flex-wrap items-center justify-center gap-y-2 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5 transition-colors">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative text-black dark:text-white"
              key={link.id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 uppercase transition"
                href={link.id}
                onClick={(e) => {
                  smoothScrollTo({ e, id: link.id })
                  setActiveSection(link.id)
                  setTimeOfLastClick(Date.now())
                }}
              >
                {link.name}

                {link.id === activeSection && (
                  <motion.span
                    className="rounded-full absolute inset-0 -z-10 dark:bg-[#ddbea9] bg-[#ffcbb4]"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
