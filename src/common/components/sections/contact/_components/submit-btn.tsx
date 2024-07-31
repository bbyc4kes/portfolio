import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { useFormStatus } from 'react-dom'
import { Button } from '@/common/components/ui/button'

export default function SubmitBtn() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:bg-lightBeige hover:text-black dark:hover:bg-darkBeige dark:hover:text-black dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1" />{' '}
        </>
      )}
    </Button>
  )
}
