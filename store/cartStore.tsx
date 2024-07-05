import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type Book = {
  id: number
  name: string
  author: string
  year: number
  price: number
}

type BookState = {
  books: Book[]
  addBookToCart: (book: Book) => void
  removeBookWithCart: (id: number) => void
}

export const addToCart = create<BookState>()(
  persist(
    (set) => ({
      books: [],
      addBookToCart: (book: Book) =>
        set((state) => ({ books: [book, ...state.books] })),
      removeBookWithCart: (id) =>
        set((state) => ({
          books: state.books.filter((book) => book.id != id),
        })),
    }),
    { name: 'cartStore', storage: createJSONStorage(() => localStorage) }
  )
)
