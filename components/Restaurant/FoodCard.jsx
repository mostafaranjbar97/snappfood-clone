'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import FoodInfoModal from '../Modal/FoodInfoModal'
import { useDispatch, useSelector } from 'react-redux';
import { setOpenFoodInfoModal } from '@/redux/features/OpenFoodInfoModalSlice';
import { addToCart, decreaseItem } from '@/redux/features/CartSlice';


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

    const handleAddToCart=()=>{
        dispatch(addToCart(food))
    }
    
    const decreaseItemCart=()=>{
        dispatch(decreaseItem(food))
    }



    // const [open, setOpen] = useState(false);
 
    // const handleClose = (e) => {
    //      setOpen(false);
    // };
 
    // const handleOpen = () => {
    //     setOpen(true);
    // };

    const foodWithDiscount=((food.price)*(100-(food.discount)))/100
    
  return (
    <>
        {/* <FoodInfoModal isOpen={open} handleClose={handleClose} food={food} /> */}
        <div className='w-full border-border-xs border-surface-dark box-border p-0 max-w-full basis-full laptop:max-w-[50%] laptop:basis-1/2'>
            <section className='box-border h-full py-4 flex flex-col'>
                <div className='px-4 cursor-pointer flex' onClick={handleOpen}>
                    <div className='flex flex-col pt-4 pl-4 grow'>
                        <h2 className='font-iransans font-bold text-base inline-block text-carbon-main'>{food.name}</h2>
                        <strong className='mt-2 break-words font-iransans font-normal text-xs inline-block text-inactive-dark'>{food.desc}</strong>
                    </div>
                    <div className='relative shrink-0'>
                        <img src={food.images[0]} alt={food.name} width={112} height={112} className='rounded-lg' />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <footer className='mt-2 flex justify-between items-center group'>
                        <div className='px-3 w-full min-h-[3.5625rem] transition-all duration-300 flex justify-between items-center hover:bg-surface-main'>
                            <div className='flex items-start flex-col'>
                                <div className='flex flex-col'>
                                    <div className='flex'>
                                        {food.discount && <span className='flex items-center justify-center grow py-0.5 px-1 rounded bg-accent-alphaLight m-1 font-iransans font-bold text-xs text-accent-main'>{food.discount}
                                            <span className='mr-1'>
                                                <Image width={8} height={10} src={"/icons/restaurant/percent.svg"} />
                                            </span>
                                        </span>}
                                        
                                        {food.discount ? <div className='flex flex-col items-start'>
                                            <s className=' inline-block font-iransans text-xs text-inactive-dark'>{food.price}</s>
                                            <span className='inline-block font-iransans font-bold text-sm text-carbon-main'> {foodWithDiscount} 
                                                <span className='mr-1 inline-block font-iransans font-normal text-xs text-carbon-light' >تومان</span>
                                            </span>
                                        </div>
                                        :
                                        <div className='flex flex-col items-start'>
                                            <span className='inline-block font-iransans font-bold text-sm text-carbon-main'> {food.price} 
                                                <span className='mr-1 inline-block font-iransans font-normal text-xs text-carbon-light' >تومان</span>
                                            </span>
                                        </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center flex-col'>
                            
                                {foodCount==0 ? <button onClick={handleAddToCart} className='h-[2.3125rem] text-sm flex justify-center items-center box-border transition-all min-w-[6.6875rem] border-border-sm border-accent-alphaLight rounded-[3rem] bg-white bg-clip-padding font-iransans shadow-shadows-medium text-accent-main group-hover:text-white group-hover:bg-accent-main  group-active:bg-accent-dark group-active:text-white'>افزودن</button>
                                : <div className='min-h-[2.3125rem] flex justify-center items-center'>
                                    {foodCount==1 ? <button onClick={decreaseItemCart} className='min-w-8 w-8 h-8 text-sm flex justify-center items-center box-border transition-all border-border-sm border-transparent rounded-[50%] bg-transparent bg-clip-padding hover:bg-carbon-alphaLight hover:border-carbon-alphaLight  active:bg-carbon-alphaMedium active:border-carbon-alphaMedium'>
                                        <Image width={12} height={14} src={"/icons/restaurant/remove-gray.svg"} />
                                    </button>
                                    : <button onClick={decreaseItemCart} className='min-w-8 flex justify-center items-center box-border transition-all w-8 h-8 border-border-sm border-accent-alphaLight rounded-[50%] bg-white bg-clip-padding shadow-shadows-medium font-bold text-lg text-accent-main hover:text-accent-dark  active:text-accent-dark active:bg-accent-alphaMedium rtl'>-</button>
                                    }
                                    <span className='w-12 text-center inline-block font-iransans font-bold text-sm text-carbon-main'>{foodCount}</span>
                                    <button onClick={handleAddToCart} className='min-w-8 flex justify-center items-center box-border transition-all w-8 h-8 border-border-sm border-accent-alphaLight rounded-[50%] bg-white bg-clip-padding shadow-shadows-medium font-bold text-lg text-accent-main group-hover:text-white group-hover:bg-accent-main  group-active:bg-accent-dark group-active:text-white rtl'>+</button>
                                </div>
                                }
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </div>
    </>
    
  )
}

export default FoodCard