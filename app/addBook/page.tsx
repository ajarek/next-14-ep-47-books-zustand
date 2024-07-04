import AddBookForm from "@/components/AddBookForm"
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'

const AddBook = async() => {
  const session = await auth()
  if (!session) {
    redirect('/register')
  }
  return (
    <div className='flex min-h-screen flex-col items-center justify-start gap-4 p-24 max-sm:p-4'>
      <h1 className="text-xl">Add a book to the bookstore.</h1>
      <AddBookForm/>
    </div>
  )
}

export default AddBook
