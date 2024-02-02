import Image from 'next/image'
import React from 'react'

function MinCart({restaurant}) {
  return (
    <div className='flex items-center flex-col'>
        <Image width={19} height={19} src={"/icons/modal/shopping-cart.png"}   alt="cart"/>
        <p className='mt-2.5 mb-1 font-iransans text-xs inline-block text-carbon-main'>حداقل سبد خرید</p>
        <span className='font-iransans text-sm inline-block text-carbon-main font-bold'> {restaurant.minimumCart} 
            <span className='font-iransans text-xs inline-block text-carbon-main'>تومان</span>
        </span>
    </div>
  )
}

export default MinCart