'use client'

import { addToCart } from '@/store/cartStore'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'

const CartIcon = () => {
  const { addItemToCart, items } = addToCart()
  return (
    <Link href='/cart' className='flex items-center gap-1'>
      <ShoppingBag />
      <sup className='flex items-center justify-center w-6 h-6 rounded-full border-2 border-primary'>{items.length}</sup>
    </Link>
  )
}

export default CartIcon
