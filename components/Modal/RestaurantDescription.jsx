import Image from 'next/image'
import React from 'react'

function RestaurantDescription({restaurant,restaurantCategory}) {
  return (
    <div className='flex mb-4 laptop:mb-0'>
        <img src={restaurant.logo} alt={restaurant.name} className='w-24 h-24 ml-5 rounded-xl shadow-shadows-high' />
        <div className='flex justify-center flex-col'>
            <p className='mb-1 font-iransans font-bold text-xl inline-block text-carbon-main'>{restaurant.name}</p>
            <p className='mb-1 font-iransans text-sm inline-block text-carbon-main'>{restaurantCategory}</p>
            <p className='mb-1 font-iransans text-xs inline-block text-carbon-light'>
                <Image width={16} height={18} src={"/icons/modal/location.svg"} alt='location' className='relative  ml-[0.3125rem] mb-1 inline-block'/>
                {restaurant.address}
            </p>
        </div>
    </div>
  )
}

export default RestaurantDescription