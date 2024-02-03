import { separate } from '@/utils/separatePrice'
import Image from 'next/image'
import React from 'react'

function PriceTag({food}) {

    const foodWithDiscount=((food.price)*(100-(food.discount)))/100
    
  return (
    <div className='flex items-start flex-col'>
        <div className='flex flex-col'>
            <div className='flex'>
                {food.discount && <span className='flex items-center justify-center grow py-0.5 px-1 rounded bg-accent-alphaLight m-1 font-iransans font-bold text-xs text-accent-main'>{food.discount}
                    <span className='mr-1'>
                        <Image width={8} height={10} src={"/icons/restaurant/percent.svg"} alt='percent' />
                    </span>
                </span>}
                {food.discount ? <div className='flex items-start flex-col '>
                    <s className='font-iransans text-xs inline-block text-inactive-dark'>{separate(food.price)}</s>
                    <span className='font-iransans font-bold text-sm inline-block text-carbon-main'> {separate(foodWithDiscount)} 
                        <span className='font-iransans text-sm inline-block text-carbon-main'>تومان</span>
                    </span>
                </div>
                :
                <div className='flex items-start flex-col '>
                    <span className='font-iransans font-bold text-sm inline-block text-carbon-main'> {separate(food.price)} 
                        <span className='font-iransans text-sm inline-block text-carbon-main'>تومان</span>
                    </span>
                </div>
                }
            </div>
        </div>
    </div>
  )
}

export default PriceTag