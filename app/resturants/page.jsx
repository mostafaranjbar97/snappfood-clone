import RestaurantInfoModal from '@/components/Modal/RestaurantInfoModal'
import BreadCrumbs from '@/components/Resturants/BreadCrumbs'
import RestaurantsContainer from '@/components/Resturants/RestaurantsContainer'
import Sidebar from '@/components/Resturants/Sidebar'
import Sort from '@/components/Resturants/Sort'
import { fetchData } from '@/libs/fetchData'
import React from 'react'

async function Resturants() {

  const {restaurants,restaurantCategory}= await fetchData()
  return (
    <>
        <BreadCrumbs restaurants={restaurants} restaurantCategory={restaurantCategory}/>    
        <main className='p-6 box-border w-full grow max-w-[85.375rem] mx-auto'>
           <Sort/>
           <div className='box-border w-[calc(100%+2rem)] -m-4 flex flex-wrap'>
            <Sidebar/>
            <RestaurantsContainer restaurants={restaurants}/>
           </div>
        </main>
    </>
  )
}

export default Resturants