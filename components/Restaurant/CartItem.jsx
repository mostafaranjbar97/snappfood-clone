import Image from 'next/image'
import React from 'react'

function CartItem() {
  return (
    <div className='py-2 flex border-b border-b-carbon-alphaLight flex-col'>
        <div className='min-h-10 flex justify-between items-center'>
            <span className='font-iransans font-bold text-sm inline-block text-carbon-main'>عدسی دو کیلوگرم</span>
        </div>
        <div className='h-10 flex justify-between items-center'>
            <div className='flex flex-col'>
                <div className='flex'>
                    <span className='flex justify-center items-center grow py-0.5 px-1 rounded bg-accent-alphaLight m-1 font-bold font-iransans text-sm text-accent-main'>۵۵
                        <span className='ml-1 inline-block font-bold font-iransans text-sm text-accent-main'>
                            <Image width={8} height={10} src={"/icons/restaurant/percent.svg"}/>
                        </span>
                    </span>
                    <div className='flex flex-col items-start'>
                        <s className=' inline-block font-iransans text-xs text-inactive-dark'>۵۶۰,۰۰۰</s>
                        <span className='inline-block font-iransans font-bold text-sm text-carbon-main'> ۲۵۲,۰۰۰ 
                            <span className='mr-1 inline-block font-iransans font-normal text-xs text-carbon-light' >تومان</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='min-h-[2.3125rem] flex items-center justify-center'>
                    <button className='min-w-8 flex justify-center items-center box-border transition-all w-8 h-8 border-border-sm border-transparent rounded-[50%] bg-transparent bg-clip-padding  hover:bg-carbon-alphaLight active:bg-carbon-alphaMedium rtl'>
                        <Image width={12} height={14} src={"/icons/restaurant/remove-gray.svg"}/>
                    </button>
                    <span className='w-12 text-center inline-block font-iransans font-bold text-sm text-carbon-main'>۱</span>
                    <button className='min-w-8 flex justify-center items-center box-border transition-all w-8 h-8 border-border-sm border-accent-alphaLight rounded-[50%] bg-white bg-clip-padding shadow-shadows-medium font-bold text-lg text-accent-main active:bg-accent-alphaMedium rtl'>+</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem