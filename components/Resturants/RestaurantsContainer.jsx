'use client'
import React, { useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { clearCart } from '@/redux/features/CartSlice'

function RestaurantsContainer({restaurants}) {


  const searchParams = useSearchParams()

  const getSort = searchParams.get("sort")
  const getFilters = searchParams.getAll("filters")
  const getCat = searchParams.get("cat")

  const dispatch = useDispatch();
    const resetCart=()=>{
      dispatch(clearCart())
   }

   useEffect(()=>{resetCart()},[])

  if(getCat){
      // filter by category
    restaurants = restaurants.filter((res) => res.restaurantCategoryId.includes(Number(getCat)))
  }
  
  if(getFilters){

    // filter by discount
    if(getFilters.includes("has_discount") || getFilters.includes("is_economical") || getFilters.includes("is_eco")){
      restaurants = restaurants.filter((res) => res.discount)
    }

    // filter by snappfood express
    if(getFilters.includes("has_express")){
      restaurants = restaurants.filter((res) => res.delivery.snappfoodDelivery)
    }

    // //filter by coupon
    if(getFilters.includes("has_coupon")){
      restaurants = restaurants.filter((res) => res.coupon)
    }

    // filter by vipUser
    if(getFilters.includes("is_vip")){
      restaurants = restaurants.filter((res) => res.proUsers)
    }

  }

  if(getSort){
    switch (getSort) {
       // sort by rate
      case "1" :
        restaurants.sort((a, b)=> b.rate - a.rate)
        break;

        // sort by distance
      case "2":
        restaurants.sort((a, b)=> a.distance - b.distance)
        break;

          // sort by timeCreated
      case "3":
        restaurants.sort((a, b)=> new Date(b.timeCreated).getTime() - new Date(a.timeCreated).getTime())
        break;
  
         // sort by delivery
      case "4":
        restaurants.sort((a, b)=> a.delivery.price - b.delivery.price)
        break; 

       // sort by totalPoints
      case "5":
        restaurants.sort((a, b)=> b.totalPoints - a.totalPoints)
        break; 

       // sort by delivery  
      case "6":
        restaurants.sort((a, b)=> b.delivery.price - a.delivery.price)
        break; 
}}

  // console.log("getCat",restaurants[3].restaurantCategoryId.includes(Number(getCat)))
  return (
    <div className='basis-full max-w-full box-border p-4 tablet:basis-7/12 tablet:max-w-[58.3333%] laptop:basis-7/12 laptop:max-w-[58.3333%] desktop:basis-9/12 desktop:max-w-[75%]'>
        <div className='box-border w-[calc(100%+1.5rem)] -m-3 flex flex-wrap'>
          {
            restaurants.map((res,index)=>{
              return(
                <RestaurantCard key={index} restaurant={res}/>
              )
            })
          }
        </div>
    </div>
  )
}

export default RestaurantsContainer