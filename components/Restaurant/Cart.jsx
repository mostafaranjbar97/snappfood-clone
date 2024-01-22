import Image from 'next/image'
import React from 'react'
import CartItem from './CartItem'

function Cart() {
  return (
    <form className='box-border mt-2 px-4 pt-4 pb-3 bg-white rounded-lg border-border-xs border-carbon-alphaLight'>
        <div className='h-6 mb-2 flex justify-between items-center'>
            <div className='flex'>
                <p className='font-iransans font-bold text-sm inline-block text-carbon-light'>سبد خرید</p>
                <span className='font-iransans mr-1 text-sm inline-block text-carbon-light'>(۳)</span>
            </div>
            <button className='flex justify-center items-center box-border transition-all w-8 h-8 border-border-sm border-transparent rounded-[50%] bg-transparent bg-clip-padding hover:bg-accent-alphaLight active:bg-accent-alphaMedium'>
                <Image width={12} height={14} src={"/icons/restaurant/remove.svg"}/>
            </button>
        </div>
        <CartItem/>
        <CartItem/>
    </form>
  )
}

export default Cart