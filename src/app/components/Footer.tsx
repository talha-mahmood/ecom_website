import Image from 'next/image'
import React from 'react'
import Logo from 'public/Logo.webp'
const Footer = () => {
    return (
        <div>
        <div className='mx-[110px] mt-[150px] mb-[100px] flex space-x-[120px]'>
            <div className='w-[300px]'>
                <Image src={Logo} alt='logo' className='w-[180px] ' />
                <p className='mt-8 text-gray-500 text-[17px] font-semibold'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                <div className='felx-col mt-8 space-x-7'>
                <button className='bg-gray-200 w-9 h-9 rounded-lg '>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter "><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
                </button >
                <button className='bg-gray-200 w-9 h-9 rounded-lg '>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                </button >
                <button className='bg-gray-200 w-9 h-9 rounded-lg '>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                </svg>
                </button>
                </div>
            
               
            </div>
            <div className='text-gray-600 flex space-x-[120px]'>
                    <ul className='space-y-2 text-lg'>
                        <li className='  text-gray-700 font-semibold text-2xl'>Company</li>
                        <li>About</li>
                        <li>Terms Of Use</li>
                        <li>Privacy Policy</li>
                        <li>How It Works</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul className='space-y-2 text-lg'>
                        <li className='  text-gray-700 font-semibold text-2xl'>Support</li>
                        <li>Support Carrer</li>
                        <li>24h Service</li>
                        <li>Quick Chat</li>
                      
                    </ul>
                    <ul className='space-y-2 text-lg'>
                        <li className='  text-gray-700 font-semibold text-2xl'>Contact</li>
                        <li>Whatsapp</li>
                        <li>Support 24h</li>
                       
                    </ul>
                </div>
               
        </div>
        <div>
            <div className='w-full h-[1px] my-8 bg-gray-900 border-0  dark:bg-gray-700'></div>
            <div className='flex mb-5 mx-[110px]  '>
                <p className='w-1/3 text-gray-500 text-[17px] font-semibold'> Copyright © 2022 Dine Market</p>
                <p className='w-1/3'> <span className='text-gray-500 text-[17px] font-semibold'> Designed by</span> <span className='text-black text-[17px] font-bold'>Talha</span></p>
                <p className='w-1/3'><span className='text-gray-500 text-[17px] font-semibold'> code by</span> <span className='text-black text-[17px] font-bold'>talha-mahmood on github</span></p>

            </div>
        </div>
        </div>
    )
}

export default Footer