import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type Item = {
  id: number
  name: string
  author: string
  year: number
  price: number
}

type ItemState = {
  items:Item[]
  addItemToCart: (item: Item) => void
  removeItemWithCart: (id: number) => void
  total:any
}

export const addToCart = create<ItemState>()(
  persist(
    (set) => ({
      items: [],
      
      addItemToCart: (item: Item) => set((state) => ({ items: [item, ...state.items] })),
      removeItemWithCart: (id) =>  set((state) => ({items: state.items.filter((item) => item.id != id),
        })),
        total:() => set((state) => ({total: state.items.reduce((acc, item) => acc + item.price, 0)})),
        
    }),
    { name: 'cartStore', storage: createJSONStorage(() => localStorage) }
  )
)
