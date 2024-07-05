'use client'
import { Button } from '@/components/ui/button'
import { addToCart } from '@/store/cartStore'
type Book = {
  id: number
  name: string
  author: string
  year: number
  price: number
}

const AddToCart = ({ id, name, author, year, price }: Book) => {
  const { addBookToCart, books } =addToCart()
  const addCart = () => {
    const book: Book = {
      id: id,
      name: name,
      author: author,
      year: year,
      price: price
    }
    addBookToCart(book)
  }
  
  return (
    <Button onClick={addCart} className='bg-[#f3d654] hover:bg-[#f5d132] text-red-700'>Add to Cart</Button>
  )
}

export default AddToCart