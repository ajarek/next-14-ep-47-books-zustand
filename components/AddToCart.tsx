'use client'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cartStore'
import type {Book } from '@/store/bookStore'
import { useToast } from "@/components/ui/use-toast"

type Item = Book

const AddToCart = ({ id, name, author, year, price }: Item) => {
  const { addItemToCart, items } =useCartStore()
  const { toast } = useToast()

  const addCart = () => {
    const item: Item = {
      id: id,
      name: name,
      author: author,
      year: year,
      price: price
    }
    if(items.find((item) => item.id === id)) return
    addItemToCart(item)
    toast({
      title: "Added to cart",
      // description: "Thank you",
      className:''
    })
  }
  
  return (
    <Button onClick={addCart} className='bg-[#f3d654] hover:bg-[#f5d132] text-red-700'>Add to Cart</Button>
  )
}

export default AddToCart