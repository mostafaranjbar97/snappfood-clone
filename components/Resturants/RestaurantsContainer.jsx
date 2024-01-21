import React from 'react'
import RestaurantCard from './RestaurantCard'

function RestaurantsContainer() {
  return (
    <div className='basis-full max-w-full box-border p-4 tablet:basis-7/12 tablet:max-w-[58.3333%] laptop:basis-7/12 laptop:max-w-[58.3333%] desktop:basis-9/12 desktop:max-w-[75%]'>
        <div className='box-border w-[calc(100%+1.5rem)] -m-3 flex flex-wrap'>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    </div>
  )
}

export default RestaurantsContainer