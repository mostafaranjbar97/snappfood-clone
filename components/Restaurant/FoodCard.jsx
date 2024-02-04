'use client'
import React from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import PriceTag from '../Modal/PriceTag';
import AddToCartBtn from '../Modal/AddToCartBtn';
import FoodCardDescription from './FoodCardDescription';
import { setOpenFoodInfoModal } from '@/redux/features/OpenFoodInfoModalSlice';


function FoodCard({food,cat}) {

    
    const {cart}=useSelector((store)=> store.cart)

    let foodCount=0
    if(cart.filter((item)=>item.id==food.id).length>0){
        foodCount=cart.filter((item)=> item.id == food.id)[0].count;
    }


    const dispatch = useDispatch();
    const handleOpen = () => {
        dispatch(setOpenFoodInfoModal({foodId:food.id,catId:cat.id,resId:food.restaurantId}))
    };

  return (
    <>

        <div className='w-full border-border-xs border-surface-dark box-border p-0 max-w-full basis-full laptop:max-w-[50%] laptop:basis-1/2'>
            <section className='box-border h-full py-4 flex flex-col'>
                <FoodCardDescription food={food} handleOpen={handleOpen}/>
                <div className='flex flex-col'>
                    <footer className='mt-2 flex justify-between items-center group'>
                        <div className='px-3 w-full min-h-[3.5625rem] transition-all duration-300 flex justify-between items-center hover:bg-surface-main'>
                            <PriceTag food={food}/>
                            <AddToCartBtn food={food} foodCount={foodCount}/>
                        </div>
                    </footer>
                </div>
            </section>
        </div>
    </>
    
  )
}

export default FoodCard