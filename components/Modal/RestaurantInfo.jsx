import Image from 'next/image'
import React from 'react'
import WorkingHours from './WorkingHours';
import RestaurantDescription from './RestaurantDescription';
import MapContainer from './MapContainer';
import MinCart from './MinCart';
import Payment from './Payment';
import OpenToWork from './OpenToWork';



function RestaurantInfo({handleClose,restaurant}) {



    restaurant.restaurantCategory.length=3
     const restaurantCategory=restaurant.restaurantCategory.join(", ")

  return (
    <div>
        <div className='py-[1.375rem] px-[1.625rem] flex justify-between'>
            <div className='cursor-pointer' onClick={handleClose}>
                <Image width={14} height={14} src={"/icons/modal/exit-modal.svg"}  alt="close" />
            </div>
        </div>
        <div className='px-4 pb-4 flex justify-between flex-col laptop:flex-row'>
            <RestaurantDescription restaurant={restaurant} restaurantCategory={restaurantCategory}/>
            <MapContainer restaurant={restaurant}/>
        </div>
        <div className='my-2 flex justify-around space-y-2 flex-col tablet:flex-row tablet:space-y-0'>
            <OpenToWork restaurant={restaurant}/>
            <Payment restaurant={restaurant}/>
            <MinCart restaurant={restaurant}/>
        </div>

        <WorkingHours/>
    </div>
  )
}

export default RestaurantInfo