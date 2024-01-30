import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'
import FoodPartyFoodInfoModal from '../Modal/FoodPartyFoodInfoModal'

function FoodPartyItem({food}) {

    const foodWithDiscount=((food.price)*(100-(food.discount)))/100
    const [open, setOpen] = useState(false);
 
    const handleClose = (e) => {
         setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };


  return (
    <>
        <FoodPartyFoodInfoModal isOpen={open} handleClose={handleClose} food={food} />
        <div className='w-full border-border-xs border-surface-dark box-border max-w-full basis-full laptop:max-w-[50%] laptop:basis-1/2'>
            <section className='box-border h-full py-4 flex flex-col'>
                <div className='px-4 cursor-pointer flex'  onClick={handleOpen}>
                    <div className='flex flex-col pt-4 pl-4 grow'>
                        <h2 className='font-iransans font-bold text-base inline-block text-carbon-main'>{food.name}</h2>
                        <strong className='mt-2 break-words font-iransans font-normal text-xs inline-block text-inactive-dark'>{food.desc}</strong>
                    </div>
                    <div className='relative shrink-0'>
                        <img src={food.images[0]} alt={food.name} width={112} height={112} className='rounded-lg' />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='px-4'>
                        <div className='mt-4'>
                            <p className={clsx('mb-2 font-iransans font-bold text-sm inline-block',food.numberRemaining > 3 ? "text-carbon-main" : "text-alert-main" )}>{food.numberRemaining}</p>
                            <p className={clsx('mb-2 font-iransans text-xs inline-block mr-1',food.numberRemaining > 3 ? "text-carbon-main" : "text-alert-main" )}>عدد باقی مانده</p>
                            <div className='mb-2 h-0.5 bg-surface-dark w-full rtl'>
                                <div className={clsx('w-full h-full  text-right transition-all',food.numberRemaining > 3 ? "bg-inactive-dark" : "bg-alert-light" )}></div>
                            </div>
                        </div>
                    </div>
                    <footer className='mt-2 flex justify-between items-center group'>
                        <div className='px-3 w-full min-h-[3.5625rem] transition-all duration-300 flex justify-between items-center hover:bg-surface-main'>
                            <div className='flex items-start flex-col'>
                                <div className='flex flex-col'>
                                    <div className='flex'>
                                        <span className='flex items-center justify-center grow py-0.5 px-1 rounded bg-accent-alphaLight m-1 font-iransans font-bold text-xs text-accent-main'>{food.discount}
                                            <span className='mr-1'>
                                                <Image width={8} height={10} src={"/icons/restaurant/percent.svg"} />
                                            </span>
                                        </span>
                                        <div className='flex items-start flex-col '>
                                            <s className='font-iransans text-xs inline-block text-inactive-dark'>{food.price}</s>
                                            <span className='font-iransans font-bold text-sm inline-block text-carbon-main'> {foodWithDiscount} 
                                                <span className='font-iransans text-sm font-normal inline-block text-carbon-main'>تومان</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center flex-col'>
                                <button className='h-[2.3125rem] text-sm flex justify-center items-center cursor-pointer box-border transition-all min-w-[6.6875rem] border-border-sm border-accent-alphaLight rounded-[3rem] bg-white bg-clip-padding font-iransans shadow-shadows-medium text-accent-main group-hover:text-white group-hover:bg-accent-main  group-active:bg-accent-dark group-active:text-white'>افزودن</button>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </div>
    </>
    
  )
}

export default FoodPartyItem