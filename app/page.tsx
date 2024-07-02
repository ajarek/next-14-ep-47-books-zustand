'use client'
import Link from 'next/link'
import { useBearStore } from '../store/bookStore'

export default function Home() {
  const { increasePopulation, decreasePopulation, removeAllBears, bears } =
    useBearStore()
  return (
    <main className='flex min-h-screen flex-col items-center justify-start gap-4 p-24'>
      <Link
        className='underline'
        href='/bears'
      >
        Bears
      </Link>
      {/* <h1>Online antiquarian bookstore</h1> */}
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => increasePopulation()}
      >
        Add a bear
      </button>
      <button
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => decreasePopulation()}
      >
        Subtract a bear
      </button>
      <button
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => removeAllBears()}
      >
        Reset a bear
      </button>
      <p className='text-2xl'>Number of bears 🐻: {bears}</p>
    </main>
  )
}
