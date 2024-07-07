'use client'
import { newBookStore } from '@/store/bookStore'
import { Trash2 } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const Dashboard = () => {
  const { addBook, books, removeBook } = newBookStore()
  return (
    <div className='px-24 py-8 max-sm:px-2'>
      {books.length > 0 ? 
      (
        <Table>
          <TableCaption>List of books in the bookstore.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className='max-sm:hidden'>Author</TableHead>
              <TableHead className='text-center'>Publication date</TableHead>
              <TableHead className='text-right'>Price</TableHead>
              <TableHead className='text-center'>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell className='font-medium'>{book.name}</TableCell>
                <TableCell className='max-sm:hidden'>{book.author}</TableCell>
                <TableCell className='text-center'>{book.year}</TableCell>
                <TableCell className='text-right'>
                  {book.price.toFixed(2)}$
                </TableCell>
                <TableCell className='text-center'>
                  <button onClick={() => removeBook(book.id)}>
                    <Trash2 color='#ff0000' />
                  </button>{' '}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <h1 className='text-2xl text-center'>No books</h1>
      )
      }
    </div>
  )
}

export default Dashboard
