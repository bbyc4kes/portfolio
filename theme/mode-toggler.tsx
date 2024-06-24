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

  return (
    <Button
      className="opacity-80 border-none"
      size="icon"
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <Sun className="h-4 w-4 scale-100 transition-all" />
      ) : (
        <Moon className="h-4 w-4 scale-100 transition-all" />
      )}
    </Button>
  )
}
