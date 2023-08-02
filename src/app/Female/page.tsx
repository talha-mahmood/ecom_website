

import {FC} from 'react'
import { urlForImage } from '../../../sanity/lib/image'
import Image from 'next/image'
import { client } from '../lib/sanityClient'
import ProductCard2 from '../components/Female'

export const getProductData=async ()=>{
  const res=await client.fetch(`*[_type=='product']`);
  return res
}

const Female =async  () => {
  const data=await getProductData();
 
  return (
  
   


  <div className='flex mt-16  '>
        {data && data.map((item:any,i:number)=>(
         

          <div className='  gap-x-10 flex-col text-gray-900 font-semibold text-lg w-1/3'key={i}>
            <ProductCard2 item={item}/>
    

       
            <div className=' grid grid-cols-[auto,auto,auto] justify center'>
            </div>
          </div>
      
        ))
        }
    </div>
  )
}

export default Female