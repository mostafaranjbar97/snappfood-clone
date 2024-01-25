
import FoodInfoModal from '@/components/Modal/FoodInfoModal'
import RestaurantInfoModal from '@/components/Modal/RestaurantInfoModal'
import CategorySectionsContainer from '@/components/Restaurant/CategorySectionsContainer'
import LeftRestaurantSideBar from '@/components/Restaurant/LeftRestaurantSideBar'
import RightRestaurantSideBar from '@/components/Restaurant/RightRestaurantSideBar'
import BreadCrumbs from '@/components/Resturants/BreadCrumbs'
import { fetchData } from '@/libs/fetchData'
import React from 'react'

async function Restaurant() {

  const {restaurants,restaurantCategory}= await fetchData()
  return (
    <>
      <BreadCrumbs restaurants={restaurants} restaurantCategory={restaurantCategory}/>
     <main className='pt-[4.25rem] px-4 pb-4 grow box-border w-full max-w-[85.375rem] mx-auto'>
           <div className='box-border w-[calc(100%+2rem)] -m-4 flex flex-wrap'>
                <RightRestaurantSideBar restaurants={restaurants}/>
                <section className='max-w-full basis-full box-border p-4 tablet:max-w-[50%] tablet:basis-6/12 ' >
                    <CategorySectionsContainer restaurants={restaurants}/>
                </section>
                <LeftRestaurantSideBar/>
                <div>
                    {/* <RestaurantInfoModal/> */}
                    <FoodInfoModal/>
                </div>
           </div>
        </main>
    </>
    
       
    
  )
}

export default Restaurant