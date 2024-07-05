'use client'
import Link from 'next/link'
import { newBookStore } from '@/store/bookStore'
import stateBooks from '@/data/books.json'
import { Button } from '@/components/ui/button'
import AddToCart from '@/components/AddToCart'
export default function Home() {
 
  const { addBook, books, removeBook } = newBookStore()
  return (
    <main className='flex min-h-screen flex-col items-center justify-start  px-24 py-8 gap-8'>
      
      <h1 className='text-2xl text-center text-white '>Online Antiquarian Bookstore</h1>
      <div>Number of books: {(books.length)+4}</div>
      <div className='grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6'>
        {
         stateBooks.map((book) => (
            <div className='book ' key={book.id}>
              <div className='text-xl'> {book.name}</div>
              <div>{book.author}</div>
              <div>{book.year}</div>
              <div>{(book.price).toFixed(2)}$</div>
              <AddToCart  id={book.id} name={book.name} author={book.author} year={book.year} price={book.price} />
            </div>
          ))}
      </div>
      
      <div className='grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6'>
        {books.length > 0 &&
          books.map((book) => (
            <div className='book' key={book.id}>
              <div className='text-xl'> {book.name}</div>
              <div>{book.author}</div>
              <div>{book.year}</div>
              <div>{(book.price).toFixed(2)}$</div>
              <AddToCart  id={book.id} name={book.name} author={book.author} year={book.year} price={book.price} />
            </div>
          ))}
      </div>
    </main>
  )
}
