'use client'
import React from 'react'
import RestaurantInfoModal from './RestaurantInfoModal'
import FoodInfoModal from './FoodInfoModal'
import { useSelector } from 'react-redux'
import FoodPartyInfoModal from './FoodPartyInfoModal'
import AddressModal from './AddressModal'
import SearchModal from './SearchModal'
import OrderModal from './OrderModal'
import OrderCommentModal from './OrderCommentModal'
import OrderInvoiceModal from './OrderInvoiceModal'


function ModalRoot({restaurants,restaurantCategory}) {

  const openFoodInfoModal=useSelector((store)=>store.openFoodInfoModal)
  const {isOpen,foodId,catId,resId}=openFoodInfoModal
  const {cart}=useSelector((store)=> store.cart)
  let food={}
  let foodCount=0
  if(isOpen){
    const restaurant=restaurants.filter((res)=>res.id==resId)[0]
    const restaurantfood= restaurant.foods.filter((food)=>food.categoryId.includes(catId))
    food =restaurantfood.filter((food)=>food.id==foodId)[0]
    if(cart.filter((item)=>item.id==food.id).length>0){
      foodCount=cart.filter((item)=> item.id == food.id)[0].count;
  }
  }

  const showFoodPatyInfoModal=useSelector((store)=>store.showFoodPartyInfoModal)
  let restaurant ={}
  let foodPartyFood={}
  if(showFoodPatyInfoModal.isOpen){
    restaurant=restaurants.filter((res)=>res.id==showFoodPatyInfoModal.resId)[0]
    foodPartyFood =restaurant.foods.filter((food)=>food.id==showFoodPatyInfoModal.foodId)[0]
  }
  
  const showSearchModal=useSelector((store)=>store.searchModal)





  return (
    <div>
        <RestaurantInfoModal restaurants={restaurants} />
        <FoodInfoModal food={food} isOpen={isOpen} foodCount={foodCount}/>
        <FoodPartyInfoModal food={foodPartyFood} isOpen={showFoodPatyInfoModal.isOpen} restaurant={restaurant}/>
        <AddressModal/>
        <SearchModal showSearchModal={showSearchModal} restaurants={restaurants} restaurantCategory={restaurantCategory}/>
        <OrderModal />
        <OrderCommentModal/>
        <OrderInvoiceModal/>
    </div>
  )
}

export default ModalRoot