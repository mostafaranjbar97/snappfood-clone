'use client'
import React, { useState } from 'react'
import FoodPartyFoodInfoModal from '../Modal/FoodPartyFoodInfoModal'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decreaseItem } from '@/redux/features/CartSlice'
import RemainingFood from '../Modal/RemainingFood'
import PriceTag from '../Modal/PriceTag'
import AddToCartBtn from '../Modal/AddToCartBtn'
import FoodCardDescription from './FoodCardDescription'

function FoodPartyItem({food}) {

    const {cart}=useSelector((store)=> store.cart)

    let foodCount=0
    if(cart.filter((item)=>item.id==food.id).length>0){
        foodCount=cart.filter((item)=> item.id == food.id)[0].count;
    }

    const dispatch = useDispatch();


    const handleAddToCart=()=>{
        dispatch(addToCart(food))
    }
    
    const decreaseItemCart=()=>{
        dispatch(decreaseItem(food))
    }

    const [open, setOpen] = useState(false);
 
    const handleClose = (e) => {
         setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };


  return (
    <>
        <FoodPartyFoodInfoModal isOpen={open} handleClose={handleClose} food={food} handleAddToCart={handleAddToCart} decreaseItemCart={decreaseItemCart} foodCount={foodCount}/>
        <div className='w-full border-border-xs border-surface-dark box-border max-w-full basis-full laptop:max-w-[50%] laptop:basis-1/2'>
            <section className='box-border h-full py-4 flex flex-col'>
                <FoodCardDescription  food={food} handleOpen={handleOpen}/>
                <div className='flex flex-col'>
                    <div className='px-4'>
                        <div className='mt-4'>
                            <RemainingFood food={food}/>
                        </div>
                    </div>
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

export default FoodPartyItem