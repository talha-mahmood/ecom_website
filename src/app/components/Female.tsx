'use client'
import { FC } from 'react'
import { urlForImage } from '../../../sanity/lib/image'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ProductCard2: FC<{ item: any }> = ({ item }) => {
  const handleAddToCart = async () => {
    const res = await fetch('/api/cart', {
      method: 'POST',
      body: JSON.stringify({
        product_id: item._id,
      }),
    })

    try {
      const result = await res.json()
      console.log(result)
      toast.success('Added to cart successfully!', {
        position: 'bottom-right',
        autoClose: 3000, // 3 seconds
        hideProgressBar: true,
     
      })
    
    } catch (err) {
      console.log('error in the fetch: ', err)
    }
  }

  return (
    <>
      <Image src={urlForImage(item.image).url()} alt='product image' width={300} height={300} className='max-h-[300px] object-cover' />

      <p className='capitalize mt-1 '>{item.title}</p>

      <p className='mt-1'>$ {item.price}</p>
      <button onClick={handleAddToCart} className='border py-2 px-6 rounded bg-blue-600 text-white'>
        Add to Cart
      </button>
      <ToastContainer />
    </>
  )
}

export default ProductCard2
