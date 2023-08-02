import React from 'react'
import Image from 'next/image'
import logo from '/public/Logo.webp'
import Link from 'next/link'
import search from'/public/search.png'
const Navbar = () => {
  return (
   <header className='mx-16 my-8 flex gap-12'>
    <div>
    <Image src={logo} alt='logo'/>
    </div>
    <div >
    <ul className='flex gap-14 text-base font-sarif font-normal'>
        <li>
            <Link href='/Female'>Female</Link>
        </li>
        <li>
            <Link href='/'>Male</Link>
        </li>
        <li>
            <Link href='/'>Kids</Link>
        </li>
        <li>
            <Link href='/'>All Products</Link>
        </li>
        <li>
            <button type='submit'>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512" id="search"><path d="M448.3 424.7L335 311.3c20.8-26 33.3-59.1 33.3-95.1 0-84.1-68.1-152.2-152-152.2-84 0-152 68.2-152 152.2s68.1 152.2 152 152.2c36.2 0 69.4-12.7 95.5-33.8L425 448l23.3-23.3zM120.1 312.6c-25.7-25.7-39.8-59.9-39.8-96.3s14.2-70.6 39.8-96.3 59.9-40 96.2-40c36.3 0 70.5 14.2 96.2 39.9s39.8 59.9 39.8 96.3-14.2 70.6-39.8 96.3c-25.7 25.7-59.9 39.9-96.2 39.9-36.3.1-70.5-14.1-96.2-39.8z"></path></svg>
            </button>
          
            <input type='search' placeholder='What you looking for' className='text-medium w-50'/>
            
        </li>
        <li className='mx-10'>
           
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
        </li>

    </ul>
    </div>   

   </header>
  )
}

export default Navbar
