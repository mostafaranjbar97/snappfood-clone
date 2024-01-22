import React from 'react'
import FoodCard from './FoodCard'

function CategorySection() {
  return (
    <section className='scroll-mt-[4.375rem] mt-8  first:mt-0'>
        {/* first item dont have mt-8 */}
        <p className='h-12 text-carbon-light font-bold text-xs flex justify-center items-center font-iransans '>پر‌طرفدارها</p>
        <div className='border-border-xs border-surface-dark w-full box-border flex flex-wrap  '>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
        </div>
    </section>
  )
}

export default CategorySection