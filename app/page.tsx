'use client'
import Link from 'next/link'
import { newBookStore } from '@/store/bookStore'
import stateBooks from '@/data/books.json'
export default function Home() {
 
  const { addBook, books, removeBook } = newBookStore()
  return (
    <main className='flex min-h-screen flex-col items-center justify-start  px-24 py-8'>
      <nav className='flex items-center gap-8'>
       
        <Link
          className='underline'
          href='/addBook'
        >
          Add Book
        </Link>
      </nav>
      <h1 className='text-2xl text-white'>Online Antiquarian Bookstore</h1>
      <div className='flex p-4 gap-4'>
        {
         stateBooks.map((book) => (
            <div className='book' key={book.id}>
              <div className='text-xl'> {book.name}</div>
              <div>{book.author}</div>
              <div>{book.year}</div>
              <div>{(book.price).toFixed(2)}$</div>
                  
            </div>
          ))}
      </div>
      
      <div className='flex p-4 gap-4'>
        {books.length > 0 &&
          books.map((book) => (
            <div className='book' key={book.id}>
              <div className='text-xl'> {book.name}</div>
              <div>{book.author}</div>
              <div>{book.year}</div>
              <div>{(book.price).toFixed(2)}$</div>
                   <button onClick={() => removeBook(book.id)}>Delete</button>
            </div>
          ))}
      </div>
    </main>
  )
}
