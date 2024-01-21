import React from 'react'
import SideCategory from './SideCategory'
import { fetchData } from '@/libs/fetchData';
import SidePriceFilter from './SidePriceFilter';
import SideFilter from './SideFilter';

async function Sidebar() {
    const { restaurantCategory }=await fetchData();
  return (
    <aside className='max-w-full basis-full box-border tablet:max-w-[41.6667%] tablet:basis-5/12 laptop:max-w-[41.6667%] laptop:basis-5/12 desktop:max-w-[25%] desktop:basis-3/12'>
        <div className='sticky top-[5.5rem] transition-[top] duration-[350] '> 
        {/* //top-[-14.8242rem] desktop:top-[-21.9248rem] */}
            <nav className='min-h-[9.375rem] flex flex-col'>
                <SideCategory restaurantCategory={restaurantCategory}/>
                <SidePriceFilter/>
                <SideFilter/>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar