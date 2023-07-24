
'use client'
import {FC} from 'react'
import { urlForImage } from '../../../sanity/lib/image'
import Image from 'next/image'



const ProductCard:FC<{item:any}> = ({item}) => {
  const handleAddToCart=async () => {
    const res= await fetch("/api/cart",{
        method: 'POST',
        body: JSON.stringify({
            product_id:item._id 
            
        })
    })
    try{
      const result=await res.json()
      // console.log(result)
    }
    catch(err){
      console.log("error in the fetch: ",err)
    }
  
  
  }


  
  
  
  return (
  <>
   <Image src={urlForImage(item.image).url()} alt='product image' width={300} height={300} className='max-h-[300px] object-cover'></Image>
    
          
           <p className='capitalize mt-1 '>{item.title}</p>
         
           <p className='mt-1'>$ {item.price}</p>
           <button onClick={handleAddToCart} className='border py-2 px-6 rounded bg-blue-600 text-white'>Add to Cart</button>
  </>
  )
}

export default ProductCard