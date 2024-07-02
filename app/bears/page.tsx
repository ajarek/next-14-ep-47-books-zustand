'use client'
import { useBearStore } from '@/store/bookStore'
import Link from 'next/link'

const Bears = () => {
  const { bears } = useBearStore()
  return (
    <div className='flex min-h-screen flex-col items-center justify-start gap-4 p-24'>
      <Link
        className='underline'
        href='/'
      >
        Home
      </Link>
      <div className='text-2xl'>Bears {bears} 🐻</div>
    </div>
  )
}

export default Bears
