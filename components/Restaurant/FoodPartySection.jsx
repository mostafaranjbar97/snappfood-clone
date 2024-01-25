import Image from 'next/image'
import React from 'react'
import FoodPartyItem from './FoodPartyItem'
import FoodPartyTimer from '../Home/FoodParty/FoodPartyTimer'

function FoodPartySection({restaurant,cat}) {

    const foodPartyFood= restaurant.foods.filter((food)=>food.categoryId.includes(cat))
  return (
    <section className='mb-4 bg-white border-t-border-xs border-surface-dark rounded-t-lg'>
        <section className='scroll-mt-[4.375rem]'>
            <div className='py-3.5 px-[1.625rem] rounded-t-lg flex justify-between bg-food-party '>
                <div className='flex'>
                    <Image width={24} height={24} src={"/icons/restaurant/sparkler.svg"} />
                    <p className='font-iransans font-bold text-base text-white inline-block mr-1'>فود پارتی</p>
                </div>
                <div className='flex '>
                    <div className='flex justify-center items-center'>
                       <FoodPartyTimer/>
                        <Image width={18} height={18} src={"/icons/home/clock.svg"} />
                    </div>
                </div>
            </div>

            <div className='border-t-border-xs border-surface-dark w-full flex flex-wrap'>
                {
                    foodPartyFood.map((food)=>{
                        return(
                            <FoodPartyItem key={food.id} food={food}/>
                        )
                    })
                }

            </div>
        </section>
    </section>
  )
}

export default FoodPartySection