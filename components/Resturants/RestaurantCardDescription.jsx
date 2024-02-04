import { separate } from '@/utils/separatePrice'
import Image from 'next/image'
import React from 'react'

function RestaurantCardDescription({restaurant}) {

    restaurant.restaurantCategory.length=3
    const restaurantCategory=restaurant.restaurantCategory.join(", ")

  return (
    <div className='mt-7 flex items-center flex-col'>
        <h2 className='max-w-full mb-2 overflow-hidden text-ellipsis whitespace-nowrap font-iransans font-bold text-lg text-carbon-main text-center inline-block'>{restaurant.name}</h2>
        <div className='mb-2'>
            <div className='ml-2 flex'>
                <span className='ml-2 flex'>
                    <Image width={12} height={12} src={"/icons/home/rate-star.svg"} alt='rate' className='ml-1 align-middle'/>
                    <span className='font-iransans font-bold text-xs text-carbon-main inline-block '>{restaurant.rate}</span>
                </span>
                <p className='font-iransans text-xs text-inactive-dark inline-block'>({separate(restaurant.totalPoints)} امتیاز)</p>
            </div>
        </div>
        <h3 className='mb-3 font-iransans text-xs text-inactive-dark inline-block'>{restaurantCategory}</h3>
    </div>
  )
}

export default RestaurantCardDescription