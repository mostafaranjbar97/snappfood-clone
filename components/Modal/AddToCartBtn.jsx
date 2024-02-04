'use client'
import { addToCart, decreaseItem } from '@/redux/features/CartSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'

function AddToCartBtn({foodCount,food}) {

    const dispatch=useDispatch()

    const decreaseItemCart=()=>{
        dispatch(decreaseItem(food))
    }

    const handleAddToCart=()=>{
        dispatch(addToCart(food))
    }

  return (
    <div className='flex items-center flex-col'>
        {foodCount==0 ? <button type="button" onClick={handleAddToCart} className='h-[2.3125rem] text-sm flex justify-center items-center box-border transition-all min-w-[6.6875rem] border-border-sm border-accent-alphaLight rounded-[3rem] bg-white bg-clip-padding font-iransans shadow-shadows-medium text-accent-main group-hover:text-white group-hover:bg-accent-main  group-active:bg-accent-dark group-active:text-white'>افزودن</button>
            : <div className='min-h-[2.3125rem] flex justify-center items-center'>
                {foodCount==1 ? <button onClick={decreaseItemCart} type="button" className='min-w-8 w-8 h-8 text-sm flex justify-center items-center box-border transition-all border-border-sm border-transparent rounded-[50%] bg-transparent bg-clip-padding hover:bg-carbon-alphaLight hover:border-carbon-alphaLight  active:bg-carbon-alphaMedium active:border-carbon-alphaMedium'>
                    <Image width={12} height={14} src={"/icons/restaurant/remove-gray.svg"} alt='remove'/>
                </button>
                : <button type="button" onClick={decreaseItemCart} className='min-w-8 flex justify-center items-center box-border transition-all w-8 h-8 border-border-sm border-accent-alphaLight rounded-[50%] bg-white bg-clip-padding shadow-shadows-medium font-bold text-lg text-accent-main hover:text-accent-dark  active:text-accent-dark active:bg-accent-alphaMedium rtl'>-</button>
                }
                <span className='w-12 text-center inline-block font-iransans font-bold text-sm text-carbon-main'>{foodCount}</span>
                <button type="button" onClick={handleAddToCart} className='min-w-8 flex justify-center items-center box-border transition-all w-8 h-8 border-border-sm border-accent-alphaLight rounded-[50%] bg-white bg-clip-padding shadow-shadows-medium font-bold text-lg text-accent-main group-hover:text-white group-hover:bg-accent-main  group-active:bg-accent-dark group-active:text-white rtl'>+</button>
            </div>
        }
    </div>
  )
}

export default AddToCartBtn