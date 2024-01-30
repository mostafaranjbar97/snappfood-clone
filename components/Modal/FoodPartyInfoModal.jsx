'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import CommentItem from './CommentItem'
import clsx from 'clsx';
import FoodPartyTimer from '../Home/FoodParty/FoodPartyTimer';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setCloseFoodPartyInfoModal } from '@/redux/features/ShowFoodPartyInfoModalSlice';
import { addToCart } from '@/redux/features/CartSlice';
import { useRouter } from 'next/navigation';

function FoodPartyInfoModal({food,isOpen,restaurant}) {

    const router=useRouter()

    const dispatch=useDispatch()

    const handleAddToCart=()=>{
        dispatch(addToCart(food))
        router.push(`/resturants/${restaurant.id}`)
        dispatch(setCloseFoodPartyInfoModal())
    }

    const handleClose = () => {
        dispatch(setCloseFoodPartyInfoModal())
      };


    if (!isOpen) return null;
    const foodWithDiscount=((food.price)*(100-(food.discount)))/100

  return (
    <div >
        <div className='flex justify-center items-center fixed inset-0 z-[1000] animate-[0.3s_ease_0s_1_normal_forwards_running_modal-animation]' onClick={handleClose} >
            <div className=' bg-white shadow-shadows-modal rounded-xl max-h-[90vh] overflow-hidden animate-[0.3s_cubic-bezier(0.4,0,0,1.5)_0s_1_normal_forwards_running_modal-animation4]' onClick={(e)=>e.stopPropagation()}>
                <div className='w-[60vw] max-w-[45rem] m-auto  flex flex-col'>
                    <header className='py-4 px-6 flex justify-between bg-food-party'>
                        <div className='flex items-center'>
                            <Image width={24} height={24} src={"/icons/restaurant/sparkler.svg"} />
                            <p className='font-iransans font-bold text-base text-white inline-block mr-2'>فود پارتی</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <div className='flex justify-center items-center'>
                                <FoodPartyTimer/>
                                <Image width={18} height={18} src={"/icons/home/clock.svg"} />
                            </div>
                        </div>
                    </header>
                    <div className='bg-white rounded-t-xl'>
                        <div className='relative box-border w-full h-14 pl-14 flex justify-between items-center'>
                            <button className='w-14 h-14 flex justify-center items-center' onClick={handleClose} >
                                <Image width={14} height={14} src={"/icons/modal/exit-modal.svg"}/>
                            </button>
                            <p className='font-bold font-iransans text-sm inline-block text-carbon-main'></p>
                            <div></div>
                        </div>
                    </div>
                    <div className='max-h-[80vh] overflow-y-auto '>
                        <div className='px-4 pb-4 flex flex-col'>
                            <div className=' flex flex-col laptop:flex-row'>
                                <div className='mb-6 ml-0 relative flex laptop:ml-6'>
                                    <img alt={food.name} src={food.images[0]} className='w-full h-[17.5rem] object-cover rounded-lg laptop:min-w-[17.5rem] laptop:w-[17.5rem]'/>
                                </div>
                                <div className='mb-6 ml-0 grow flex justify-between flex-col laptop:mb-0'>
                                    <div className='flex items-start justify-between'>
                                        <div className='w-[80%] flex flex-col'>
                                            <h2 className='mb-2 font-bold font-iransans text-lg inline-block text-carbon-main'>{food.name}</h2>
                                            <h3 className='mb-2 font-iransans text-sm inline-block text-carbon-light'>{food.desc}</h3>
                                        </div>
                                        <span className='border-border-xs border-surface-dark py-0.5 px-1.5 rounded flex flex-wrap'>
                                            <Image width={12} height={12} src={"/icons/modal/rate-star.svg"} className='ml-1 align-middle'/>
                                            <span className='font-bold font-iransans text-xs inline-block text-carbon-main'>{food.rate}</span>
                                        </span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='mb-5'>
                                            <div>
                                                <p className='mb-2 font-bold font-iransans text-sm inline-block text-carbon-main'>{food.numberRemaining}</p>
                                                <p className='mb-2 font-iransans text-sm inline-block text-carbon-main'>عدد باقی مانده</p>
                                            </div>
                                            <div className='bg-inactive-dark h-0.5 w-full'></div>
                                        </div>
                                        <div className='mb-5 flex justify-between'>
                                            <div className='flex flex-col'>
                                                <div className='flex'>
                                                    <span className='flex items-center justify-center grow py-0.5 px-1 rounded bg-accent-alphaLight m-1 font-iransans font-bold text-xs text-accent-main'>{food.discount}
                                                        <span className='mr-1'>
                                                            <Image width={8} height={10} src={"/icons/restaurant/percent.svg"} />
                                                        </span>
                                                    </span>
                                                    <div className='flex items-start flex-col '>
                                                        <s className='font-iransans text-xs inline-block text-inactive-dark'>{foodWithDiscount}</s>
                                                        <span className='font-iransans font-bold text-sm inline-block text-carbon-main'> {food.price} 
                                                            <span className='font-iransans text-sm inline-block text-carbon-main'>تومان</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center flex-col'>
                                                <button onClick={handleAddToCart} className='h-[2.3125rem] text-sm flex justify-center items-center cursor-pointer box-border transition-all min-w-[6.6875rem] border-border-sm border-accent-alphaLight rounded-[3rem] bg-white bg-clip-padding font-iransans shadow-shadows-medium text-accent-main group-hover:text-white group-hover:bg-accent-main  group-active:bg-accent-dark group-active:text-white'>افزودن</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className='py-[0.6875rem] px-3.5 bg-transparent rounded-[4.5rem]'>
                                            <div>
                                                <p className='ml-2 font-iransans text-sm inline-block text-carbon-main'>{restaurant.delivery.type}</p>   
                                            </div>
                                        </div>
                                        <Link href={`/resturants/${restaurant.id}`} onClick={handleClose}>
                                            <div className='flex items-center'>
                                                <p className='font-bold font-iransans text-sm inline-block text-accent2-main'>{restaurant.name}</p>
                                                <Image width={9} height={16} src={"/icons/modal/left-green.svg"} className='mr-4'/>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p className='my-[1.125rem] mx-4 font-bold font-iransans text-sm inline-block text-carbon-light'>نظرات کاربران</p>
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
    </div>
                        


  )
}

export default FoodPartyInfoModal