import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type Book = {
  id: number
  name: string
  author: string
  year: number
  price: number
}

type BookState = {
  books: Book[]
  addBook: (book: Book) => void
  removeBook: (id: number) => void
}

export const newBookStore = create<BookState>()(
  persist(
    (set) => ({
      books: [],
      addBook: (book: Book) =>
        set((state) => ({ books: [book, ...state.books] })),
      removeBook: (id) =>
        set((state) => ({
          books: state.books.filter((book) => book.id != id),
        })),
    }),
    { name: 'bookStore', storage: createJSONStorage(() => localStorage) }
  )
)
