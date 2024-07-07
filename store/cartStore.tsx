import type {Book } from '@/store/bookStore'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type Item = Book 

type ItemState = {
  items: Item[]
  addItemToCart: (item: Item) => void
  removeItemFromCart: (id:number) => void
  total: () => number
  removeAll:()=> void
}

export const useCartStore = create<ItemState>()(
  persist(
    (set, get) => ({
      items: [],

      addItemToCart: (item: Item) =>
        set((state) => ({
          items: [item, ...state.items],
        })),

      removeItemFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      total: () => get().items.reduce((acc, item) => acc + item.price, 0),
      removeAll: () => set({ items: [] }),
    }),
    { name: 'cartStore', storage: createJSONStorage(() => localStorage) }
  )
)
