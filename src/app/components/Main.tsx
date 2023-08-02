

import React from 'react'
import heroposter from '/public/hero-poster.webp'
import instyle from '/public/instyle.webp'
import bazaar from '/public/bazaar.webp'
import bustle from '/public/bustle.webp'
import versace from '/public/versace.webp'
import i1 from '/public/i1.webp'
import i2 from '/public/i2.webp'
import i3 from '/public/i3.webp'
import i4 from '/public/i4.png'
import i5 from '/public/i5.png'
import i6 from '/public/i6.png'
import Image from 'next/image'

import { client } from '../lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '../../../sanity/lib/image'
import ProductCard from './ProductCard'
import StripeCheckOutButton from './Checkout'
import ProductCard2 from '../Female/page'

export const getProductData=async ()=>{
  const res=await client.fetch(`*[_type=='product']`);
  return res
}

interface IProduct{
  title:string,
  _id:string,
  description:string,
  image:IImage,
  price:number,
  category:{
    name:string
  }
}
const Main = async() => {
  const data=await getProductData();
  // console.log(data)
 
  return (
    <section >
      <div className='mx-[110px] '>
      
        <div className='flex gap-10'>
          <div className=' w-[448px] mt-[90px] '>
            <button className='bg-blue-100 w-[115px] h-[40px] text-blue-700 font-semibold  rounded-lg mb  ' >
              Sale 70%
            </button>
            <p className='text-[4rem] font-bold leading-[4rem] mt-5'> An Industrial Take on Streetwear</p>
            <p className='mt-12 text-gray-500 text-[17px] font-semibold'>Anyone can beat you but no one can</p>
            <p className=' text-gray-500 text-[17px] font-semibold'>beat your outfit as long as you wear</p>
            <p className=' text-gray-500 text-[17px] font-semibold'>Dine outfits.</p>
            <button  className='bg-[#212121] text-white flex w-40 h-16 mt-10'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart self-center pl-1"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <span className='font-semibold text-center text-xl p-2 leading-6 rounded-md'> Start Shopping </span>
            </button>
            <div className='flex mt-9 gap-4'>
              <Image src={bazaar} alt='img'></Image>
              <Image src={bustle} alt='img'></Image>
              <Image src={versace} alt='img'></Image>
              <Image src={instyle} alt='img'></Image>
            </div>
          </div>
          <div className='w-[650px] rounded-full bg-red-100 ' >
            <Image className='gap-2 ' src={heroposter} alt='heroposter'></Image>

          </div>
        </div>
        <div className=' w-full text-center mt-20'>
          <p className='uppercase text-blue-600 font-semibold  mb-4 '>Promotions</p>
          <p className='capitalize  font-bold content-center text-4xl  '>our promotions events</p>
        </div>
        <div className='flex mt-8 gap-7'>
          <div className='flex-col'>
            <div className='w-[500px] bg-[#D6D6D8]  h-[219px] flex'>

              <div className='ml-7 mt-9'>
                <p className='text-4xl font-semibold leading-9   '> GET UP TO <span className=' text-5xl font-bold '>60%</span></p>
                <p className=' text-gray-800  text-xl leading-5 mt-2' >For the summer season</p>
              </div>

              <Image className='bg-[#D6D6D8] w-[258] h-[200]' src={i1} alt='image'></Image>

            </div>
            <div className='bg-[#212121] w-[258] h-[100] mt-5 text-center p-4 text-white py-10'>
              <p className=' font-bold text-4xl  ' >  GET 30% Off</p>
              <p className='mt-5 font-semibold' >USE PROMO CODE</p>
              <button className='bg-[#474747] text-lg font-bold rounded-lg px-[60px] py-1 tracking-[0.25rem]'>DINEWEEKENDSALE</button>


            </div>
          </div>

          <div className=' bg-[#EFE1C7] w-[280px]'>
            <p className='ml-3 mt-6 text-gray-900 text-lg '>Flex Sweatshirt</p>
            <p className='ml-3 text-gray-900 text-lg '><span className='line-through'>$100.00</span>  <span className='font-bold'> $75.00</span></p>

            <Image className='object-cover ' src={i2} alt='product image'></Image>
          </div>
          <div className=' bg-[#D6D6D8] w-[280px]'>
            <p className='ml-3 mt-6 text-gray-900 text-lg '>Flex Push Button Bomber</p>
            <p className='ml-3 text-gray-900 text-lg '><span className='line-through'>$225.00</span>  <span className='font-bold'> $190.00</span></p>

            <Image className='object-cover ' src={i3} alt='product image'></Image>

          </div>

        </div>
      
        <div className=' w-full text-center mt-20'>
          <p className='uppercase text-blue-600 font-semibold mb-4 '>PRODUCTS</p>
          <p className='capitalize  font-bold content-center text-4xl  '>Check What We Have</p>
        </div>
       
        <div className='flex mt-16  '>
        {data && data.map((item:any,i:number)=>(
         

          <div className='  gap-x-10 flex-col text-gray-900 font-semibold text-lg w-1/3'key={i}>
            <ProductCard item={item}/>
       
            <div className=' grid grid-cols-[auto,auto,auto] justify center'>
            </div>
          </div>
      
        ))
        }
    </div>
    <StripeCheckOutButton />
      </div>
    </section>
  )
}

export default Main