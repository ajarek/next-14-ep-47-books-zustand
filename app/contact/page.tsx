import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Smartphone } from 'lucide-react'

const Contact = async () => {
  return (
    <div className='w-full min-h-screen  grid grid-cols-2 max-lg:grid-cols-1 px-12 py-8 max-sm:px-4 place  items-center gap-4  '>
      <div className=' h-full flex justify-center items-start p-24 '>
        <Image
          src='/images/contact.webp'
          alt='contact'
          width={1064}
          height={798}
          className='w-full h-full object-cover object-center  rounded-lg'
        />
      </div>
      <div className='flex flex-col justify-center items-center gap-6'>
        <form
          action=''
          className='w-full flex flex-col gap-4'
        >
          <Input
            type='text'
            placeholder='Name'
            required
          />
          <Input
            type='email'
            placeholder='E-mail '
            required
          />
          <Input
            type='text'
            placeholder='Phone number '
          />
          <Textarea
            placeholder='Message'
            required
          />
          <Button className=' '>Wyślij</Button>
        </form>
        <a
          className='w-full flex items-center'
          href='tel:+48573 219 230'
        >
          <Button className='w-full flex items-center'>
            <Smartphone /> 573 219 230 Zadzwoń
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Contact
