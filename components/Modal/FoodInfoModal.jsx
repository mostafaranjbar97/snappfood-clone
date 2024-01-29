'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import CommentItem from './CommentItem'
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { setCloseFoodInfoModal } from '@/redux/features/OpenFoodInfoModalSlice';


function FoodInfoModal({food,isOpen}) {

    // const openFoodInfoModal=useSelector((store)=>store.openFoodInfoModal)
    // const {isOpen,foodId,catId,resId}=openFoodInfoModal
    // const restaurant=restaurants.filter((res)=>res.id==resId)[0]
    // const restaurantfood= restaurant.foods.filter((food)=>food.categoryId.includes(catId))
    // const food =restaurantfood.filter((food)=>food.id==foodId)[0]

    const dispatch=useDispatch()
    const handleClose = () => {
        dispatch(setCloseFoodInfoModal())
      };


    if (!isOpen) return null;
    const foodWithDiscount=((food.price)*(100-(food.discount)))/100
    const [showImg,setShowImg]=useState(food.images[0])
    const albumHandler=(e)=>{
        setShowImg(e.target.src)
    }

  return (
    <div >
        <div className='flex justify-center items-center fixed inset-0 z-[1000] animate-[0.3s_ease_0s_1_normal_forwards_running_modal-animation]' onClick={handleClose} >
        <div className=' bg-white shadow-shadows-modal rounded-xl max-h-[90vh] overflow-hidden animate-[0.3s_cubic-bezier(0.4,0,0,1.5)_0s_1_normal_forwards_running_modal-animation4]' onClick={(e)=>e.stopPropagation()}>
            <div className='relative box-border w-full h-14 pl-14 flex justify-between items-center'>
                <button className='w-14 h-14 flex justify-center items-center' onClick={handleClose} >
                    <Image width={14} height={14} src={"/icons/modal/exit-modal.svg"}/>
                </button>
                <p className='font-bold font-iransans text-sm inline-block text-carbon-main'></p>
                <div></div>
            </div>
            <div className='w-[35vw] min-w-[20rem] max-w-[45rem] max-h-[calc(90vh-4rem)] overflow-y-scroll flex flex-col laptop:w-[90vw]'>
                <div className='px-4 pb-4 flex justify-between flex-col laptop:flex-row'>
                    <div className='max-w-[17.5rem]'>
                        <Image alt={food.name} width={280} height={280} src={showImg} className='rounded-lg '/>
                        <div className='flex flex-wrap'>
                            {
                                food.images.length>1 && food.images.map((img,index)=>{
                                    return(
                                        <div key={index} id={index} className='mt-1.5 ml-2 cursor-pointer' onClick={albumHandler}>
                                            <Image alt={food.name} width={40} height={40} src={img} className={clsx('rounded-lg ',showImg==img ? "opacity-100" : "opacity-70")} />
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className='w-auto flex justify-start flex-col laptop:w-[24rem]'>

                        <div className='mb-4 flex justify-between items-center'>
                            <p className='font-bold font-iransans text-lg inline-block text-carbon-main w-80'>{food.name}</p>
                            <span className='border-border-xs border-surface-dark py-0.5 px-1.5 rounded flex flex-wrap'>
                                <Image width={12} height={12} src={"/icons/modal/rate-star.svg"} className='ml-1 align-middle'/>
                                <span className='font-bold font-iransans text-xs inline-block text-carbon-main'>{food.rate}</span>
                            </span>
                        </div>

                        <div className='mb-10 flex'>
                            <p className='font-iransans text-sm inline-block text-carbon-main'>{food.desc}</p>
                        </div>

                        <div className='flex flex-col'>
                            <div className=' w-full min-h-[3.5625rem] transition-all duration-300 flex justify-between items-center hover:bg-surface-main group'>
                                <div className='flex items-start flex-col'>
                                    <div className='flex flex-col'>
                                        <div className='flex'>
                                            {food.discount && <span className='flex items-center justify-center grow py-0.5 px-1 rounded bg-accent-alphaLight m-1 font-iransans font-bold text-xs text-accent-main'>{food.discount}
                                                <span className='mr-1'>
                                                    <Image width={8} height={10} src={"/icons/restaurant/percent.svg"} />
                                                </span>
                                            </span>}
                                            <div className='flex items-start flex-col '>
                                                {food.discount &&<s className='font-iransans text-xs inline-block text-inactive-dark'>{foodWithDiscount}</s>}
                                                <span className='font-iransans font-bold text-sm inline-block text-carbon-main'> {food.price} 
                                                    <span className='font-iransans text-sm inline-block text-carbon-main'>تومان</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center flex-col'>
                                    <button className='h-[2.3125rem] text-sm flex justify-center items-center cursor-pointer box-border transition-all min-w-[6.6875rem] border-border-sm border-accent-alphaLight rounded-[3rem] bg-white bg-clip-padding font-iransans shadow-shadows-medium text-accent-main group-hover:text-white group-hover:bg-accent-main  group-active:bg-accent-dark group-active:text-white'>افزودن</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {food.foodsComments.length>0 &&<div className='p-4 flex justify-between'>
                    <p className='font-iransans font-bold text-base inline-block text-carbon-light'>نظرات کاربران</p>
                </div>}

                <div className='flex flex-col'>
                    {
                        food.foodsComments.map((comment)=>{
                            return(
                                <CommentItem key={comment.id} comment={comment}/>
                            )
                        })
                    }

                </div>
            </div>

            
        </div>
        </div>
    </div>
  )
}

export default FoodInfoModal