'use client'
import { Button } from '@/components/ui/button'
import { addToCart } from '@/store/cartStore'
type Item = {
  id: number
  name: string
  author: string
  year: number
  price: number
}

const AddToCart = ({ id, name, author, year, price }: Item) => {
  const { addItemToCart, items } =addToCart()
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
  }
  
  return (
    <Button onClick={addCart} className='bg-[#f3d654] hover:bg-[#f5d132] text-red-700'>Add to Cart</Button>
  )
}

export default AddToCart