'use client'
import { addToCart } from '@/store/cartStore'
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

const ItemsCart = () => {
  const { addItemToCart, items, removeItemWithCart, total } = addToCart()
  return (
    <div className='px-24 py-8'>
      {items.length > 0 ? (
        <Table>
          <TableCaption>Total: {total}$</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Author</TableHead>
              <TableHead className='text-center'>Publication date</TableHead>
              <TableHead className='text-right'>Price</TableHead>
              <TableHead className='text-center'>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className='font-medium'>{item.name}</TableCell>
                <TableCell>{item.author}</TableCell>
                <TableCell className='text-center'>{item.year}</TableCell>
                <TableCell className='text-right'>
                  {item.price.toFixed(2)}$
                </TableCell>
                <TableCell className='text-center'>
                  <button onClick={() => removeItemWithCart(item.id)}>
                    <Trash2 color='#ff0000' />
                  </button>{' '}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <h1 className='text-2xl text-center py-8'>Cart is empty !</h1>
      )}
    </div>
  )
}

export default ItemsCart
