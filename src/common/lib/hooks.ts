import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import type { SectionName } from './types'
import { useActiveSectionContext } from '../stores/active-section'

export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
  const { ref, inView } = useInView({
    threshold,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 10) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
    ref,
    inView,
  }
}

export const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted
}
