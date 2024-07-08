import { auth } from '@/app/api/auth/auth'
import ItemsCart from '@/components/ItemsCart'
import { redirect } from 'next/navigation'

const Cart = async () => {
  const session = await auth()
  if (!session) {
    redirect('/register')
  }
  return (
    <div>
      <ItemsCart />
    </div>
  )
}

export default Cart
