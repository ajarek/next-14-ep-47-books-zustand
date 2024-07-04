'use client'
import Link from 'next/link'
import { newBookStore } from '@/store/bookStore'

const AddBook = () => {
  const { addBook, books } = newBookStore()
  return (
    <div className='flex min-h-screen flex-col items-center justify-start gap-4 p-24'>
    

      <div>{books.length}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target as HTMLFormElement)
          const id = Date.now()
          const name = formData.get('name') as string
          const author = formData.get('author') as string
          const year = Number(formData.get('year'))
          const price = Number(formData.get('price'))
          addBook({ id, name, author, year, price })
        }}
        className='flex flex-col gap-4'
      >
        <input
          type='text'
          name='name'
          placeholder='Name'
        />
        <input
          type='text'
          name='author'
          placeholder='Author'
        />
        <input
          type='number'
          name='year'
          placeholder='Year'
        />
        <input
          type='number'
          name='price'
          placeholder='Price'
        />
        <input
          type='submit'
          value='Added Book'
        />
      </form>
    </div>
  )
}

export default AddBook
