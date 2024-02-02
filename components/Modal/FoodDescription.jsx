import Image from 'next/image'
import React from 'react'

function FoodDescription({food}) {
  return (
    <>
    <div className='mb-4 flex justify-between items-center'>
        <p className='font-bold font-iransans text-lg inline-block text-carbon-main w-80'>{food.name}</p>
        <span className='border-border-xs border-surface-dark py-0.5 px-1.5 rounded flex flex-wrap'>
            <Image width={12} height={12} src={"/icons/modal/rate-star.svg"} className='ml-1 align-middle' alt='rate'/>
            <span className='font-bold font-iransans text-xs inline-block text-carbon-main'>{food.rate}</span>
        </span>
    </div>
    <div className='mb-10 flex'>
        <p className='font-iransans text-sm inline-block text-carbon-main'>{food.desc}</p>
    </div>
    </>
  )
}

export default FoodDescription