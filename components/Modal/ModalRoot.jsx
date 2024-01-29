'use client'
import React from 'react'
import RestaurantInfoModal from './RestaurantInfoModal'
import FoodInfoModal from './FoodInfoModal'
import { useSelector } from 'react-redux'


function ModalRoot({restaurants}) {

  const openFoodInfoModal=useSelector((store)=>store.openFoodInfoModal)
  const {isOpen,foodId,catId,resId}=openFoodInfoModal
  let food={}
  if(isOpen){
    const restaurant=restaurants.filter((res)=>res.id==resId)[0]
    const restaurantfood= restaurant.foods.filter((food)=>food.categoryId.includes(catId))
    food =restaurantfood.filter((food)=>food.id==foodId)[0]
  }
  



  return (
    <div>
        <RestaurantInfoModal restaurants={restaurants} />
        isOpen && <FoodInfoModal food={food} isOpen={isOpen}/>
    </div>
  )
}

export default ModalRoot