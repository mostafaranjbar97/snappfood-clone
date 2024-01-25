import React from 'react'
import SideVendorInfo from './SideVendorInfo'
import SideFoodCategory from './SideFoodCategory'

function RestaurantSideBar({restaurants}) {
  return (
    <aside className='max-w-full basis-full box-border p-4 tablet:max-w-[50%] tablet:basis-6/12 laptop:max-w-[25%] laptop:basis-3/12'>
        <div className='sticky top-[5.5rem] transition-[top] duration-[350ms]'>
            <SideVendorInfo restaurants={restaurants}/>
            <SideFoodCategory restaurants={restaurants}/>
        </div>
    </aside>
  )
}

export default RestaurantSideBar