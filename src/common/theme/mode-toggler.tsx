'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/common/components/ui/button'
import { useHasMounted } from '@/common/lib/hooks'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const hasMounted = useHasMounted()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!hasMounted) return null

  return (
    <Button
      className="bg-transparent text-gray-700 dark:text-white opacity-80 p-0"
      size={'sm'}
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </Button>
  )
}
