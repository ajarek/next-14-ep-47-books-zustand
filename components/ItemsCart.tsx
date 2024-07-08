'use client'
import { useCartStore } from '@/store/cartStore'
import { Trash2 } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from './ui/button'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'

const ItemsCart = () => {
  const {toast} = useToast()
  const { addItemToCart, items, removeItemFromCart, total, removeAll } = useCartStore()
  const date = new Date()
  const router = useRouter()
  
  return (
    <div className='flex flex-col px-24 max-lg:px-8 max-sm:px-4 py-8 gap-4'>
      {items.length > 0 ? (
        <>
        <Table>
          <TableCaption className='text-xl text-foreground'>Total: {total()}$</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className='max-sm:hidden'>Author</TableHead>
              <TableHead className='text-center'>Publication date</TableHead>
              <TableHead className='text-right'>Price</TableHead>
              <TableHead className='text-center'>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className='font-medium'>{item.name}</TableCell>
                <TableCell className='max-sm:hidden'>{item.author}</TableCell>
                <TableCell className='text-center'>{item.year}</TableCell>
                <TableCell className='text-right'>
                  {item.price.toFixed(2)}$
                </TableCell>
                <TableCell className='text-center'>
                  <button onClick={() => removeItemFromCart(item.id)}>
                    <Trash2 color='#ff0000' />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className='flex w-full justify-end gap-8 '>
        <Button variant='destructive' onClick={() => removeAll()}>Delete All</Button>
        <Button    onClick={() => {
        toast({
          title: "Order has been submitted.",
          description:'amount to pay: '+total()+'$, '+'date: '+ date.toLocaleString('en-US',{
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        });
        setTimeout(()=>{
          removeAll();
          router.push('/')
        },2000)
        
      }}>I order books</Button>

        </div>
        </>
      ) : (
        <h1 className='text-2xl text-center py-8'>Cart is empty !</h1>
      )}
    </div>
  )
}

export default ItemsCart
