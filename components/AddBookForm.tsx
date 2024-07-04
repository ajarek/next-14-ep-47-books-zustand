'use client'
import { newBookStore } from '@/store/bookStore'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const AddBookForm = () => {
  const { addBook, books } = newBookStore()
  return (
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
    className='max-w-3xl w-full flex flex-col gap-4'
  >
    <Input
      type='text'
      name='name'
      placeholder='Name'
    />
    <Input
      type='text'
      name='author'
      placeholder='Author'
    />
    <Input
      type='number'
      name='year'
      placeholder='Year'
    />
    <Input
      type='number'
      name='price'
      placeholder='Price'
    />
    <Button type='submit'>Add Book</Button>
  </form>
  )
}

export default AddBookForm