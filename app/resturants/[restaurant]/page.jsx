
import Loading from '@/app/loading'
import CategorySectionsContainer from '@/components/Restaurant/CategorySectionsContainer'
import LeftRestaurantSideBar from '@/components/Restaurant/LeftRestaurantSideBar'
import RightRestaurantSideBar from '@/components/Restaurant/RightRestaurantSideBar'
import BreadCrumbs from '@/components/Resturants/BreadCrumbs'
import { fetchData } from '@/libs/fetchData'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'

export async function generateMetadata({ params }) {
  const {restaurants} = await fetchData();
  const res= restaurants.filter(res => res.id == params.restaurant)[0]
 return {title :` ${res.name}-سفارش آنلاین غذا از ${res.name} | اسنپ فود`,}

}
async function Restaurant() {
  const RightRestaurantSideBar = dynamic(() => import("@/components/Restaurant/RightRestaurantSideBar"), {
    ssr: false
  });

  const {restaurants,restaurantCategory}= await fetchData()
  return (
    <>
      <BreadCrumbs restaurants={restaurants} restaurantCategory={restaurantCategory}/>
     <main className='pt-[4.25rem] px-4 pb-4 grow box-border w-full max-w-[85.375rem] mx-auto'>
        <Suspense fallback={<Loading/>}>
           <div className='box-border w-[calc(100%+2rem)] -m-4 flex flex-wrap'>
                <RightRestaurantSideBar restaurants={restaurants}/>
                <section className='max-w-full basis-full box-border p-4 tablet:max-w-[50%] tablet:basis-6/12 ' >
                    <CategorySectionsContainer restaurants={restaurants}/>
                </section>
                <LeftRestaurantSideBar restaurants={restaurants}/>
           </div>
           </Suspense> 
        </main>
    </>
    
       
    
  )
}

export default Restaurant