import { separate } from '@/utils/separatePrice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SearchFoodItem({prodouct,handleClose,restaurants}) {
    const restaurant=restaurants.filter((res)=>res.id==prodouct.restaurantId)[0]
    const foodWithDiscount=((prodouct.price)*(100-(prodouct.discount)))/100
  return (
    <Link href={`/resturants/${restaurant.id}`} onClick={handleClose}>
        <div className='box-border p-5 flex items-start flex-col border-b border-b-surface-dark'>
            <div className='flex'>
                <Image width={56} height={56} src={prodouct.images[0]} alt="food" className='ml-4 rounded'/>
                <div className='flex flex-col'>
                    <span className='font-iransans font-bold text-xs text-carbon-main inline-block'>{prodouct.name}</span>
                    <span className='font-iransans text-xs text-gray5-color inline-block mt-3'>{restaurant.name}</span>
                </div>
            </div>
            <div className='w-full mt-3 flex justify-between '>
                <div className='flex items-center'>
                    <p className='font-iransans text-xs text-carbon-light inline-block mx-1'>{restaurant.delivery.type}</p>
                    <div className=' flex flex-col'>
                        <div className='flex items-center'>
                            <div className='flex items-start flex-col'>
                            <span className=' text-carbon-main font-iransans text-xs inline-block'>  {separate(restaurant.delivery.price)}  
                                <span className=' text-carbon-light font-iransans text-xs inline-block'>تومان</span>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex'>
                        {prodouct.discount &&<span className='pt-1.5 pb-0.5 leading-[0.625rem] text-sm flex justify-center items-center grow  px-1 rounded m-1 bg-accent-alphaLight font-iransans font-bold text-accent-main '>
                            {prodouct.discount}
                            <span className='mr-1'>
                                <Image width={8} height={10} src={"/icons/modal/percent.svg"} alt="percent"/>
                            </span>
                        </span>}
                        {prodouct.discount ? <div className='flex items-center'>
                            <s className='mx-1 font-iransans inline-block text-xs text-inactive-dark'>{separate(prodouct.price)}</s>
                            <span className='font-iransans font-bold inline-block text-base text-carbon-main'> {foodWithDiscount} 
                                <span className='font-iransans font-normal inline-block text-xs text-carbon-light'>تومان</span>
                            </span>
                        </div>
                        :
                        <div className='flex items-center'>
                            <span className='font-iransans font-bold inline-block text-base text-carbon-main'> {separate(prodouct.price)} 
                                <span className='font-iransans font-normal inline-block text-xs text-carbon-light'>تومان</span>
                            </span>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default SearchFoodItem