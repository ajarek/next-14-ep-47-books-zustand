'use client'
import { useCartStore } from '@/store/cartStore'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
const LogoutBtn = () => {
  const { removeAll } = useCartStore()
  const router = useRouter()
  const handleLogout = () => {
    router.push('/api/auth/signout')
    removeAll()
  }
  return (
    <Button
      variant='destructive'
      size={'sm'}
      onClick={handleLogout}
      className='italic'
    >
      Logout
    </Button>
  )
}

export default LogoutBtn
