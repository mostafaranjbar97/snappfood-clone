import Image from 'next/image'
import React from 'react'

function EmptyCart() {
  return (
    <div className='box-border mt-2 pt-12 flex items-center flex-col'>
        <Image width={18}  height={20} src="/icons/restaurant/shopping-bag.png" alt="Empty Cart"/>
        <p className='mt-6 font-iransans text-sm inline-block text-inactive-dark'>سبد خرید شما خالی است!</p>
    </div>
  )
}

export default EmptyCart