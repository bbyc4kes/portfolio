'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { useHasMounted } from '@/lib/hooks'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const hasMounted = useHasMounted()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!hasMounted) return null

  console.log(theme)

  return (
    <Button
      className="opacity-95 border-none dark:text-white text-black bg-transparent hover:bg-background"
      size="icon"
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
      )}
    </Button>
  )
}
