'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {BookOpenText} from 'lucide-react'
const Links = () => {
  const pathname = usePathname()
  return (
    <div className="max-lg:hidden w-full flex items-center justify-between  ">
      <Link
        href="/"
        className="flex items-center gap-2 max-sm-gap-1"
      >
        <BookOpenText color="#2563eb" />
        <h1 className="font-semibold text-xl text-[#2563eb] capitalize ">
        Bookstore
        </h1>
      </Link>

      <div className="flex items-center gap-8 mr-4 ">
        <Link
          href="/addBook"
          className={`flex items-center  text-xl hover:text-primary ${
            pathname === '/addBook' ? 'active ' : ''
          }`}
        >
         Add Book
        </Link>
       
        <Link
          href="/contact"
          className={`flex items-center  text-xl hover:text-primary ${
            pathname === '/contact' ? 'active ' : ''
          }`}
        >
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Links
