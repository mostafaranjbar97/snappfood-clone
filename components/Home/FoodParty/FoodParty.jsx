
import React from 'react'
import { fetchData } from '@/libs/fetchData';
import Image from 'next/image';
import Link from 'next/link'
import FoodPartySlider from './FoodPartySlider';
import FoodPartyTimer from './FoodPartyTimer';


        
async function FoodParty() {
    const { restaurants } = await fetchData();
    
  return (
    <section className=' h-auto'>
        <div className='flex w-full flex-col px-10 pb-10 min-h-[23.125rem] mb-20 bg-food-party rounded-food-party tablet:py-[1.8125rem] tablet:pr-0 tablet:pl-10 tablet:flex-row tablet:flex-nowrap'>
            <div className='w-full py-[1.1875rem] flex flex-col justify-between items-center grow shrink-0 basis-[15%] tablet:w-[15%]'>
                <div className='p-[0.3125rem] flex flex-col justify-center items-center'>
                    <div className='flex justify-center items-center '>
                    <FoodPartyTimer/>
                    <Image width={18} height={18} src={"/icons/home/clock.svg"} alt='time' className='drop-shadow-[rgba(0,0,0,0.24)_0px_1px_0px] '/>
                    </div>
                </div>
                <img alt='فود پارتی' src={"https://cdn.snappfood.ir/uploads/images/review-app/icons/count/jek/1_jek_non_active.png"} className='p-4 max-h-[110px]'/>
                <div className='p-[0.3125rem] flex'>
                    <Image width={24} height={24} src={"/icons/home/sparkler.svg"}  alt="sparkler" />
                    <p className='mr-1 font-iransans font-medium text-2.5xl leading-9 text-surface-main inline-block text-shadow-food-party'>فود پارتی</p>
                </div>
                <p className='p-[0.3125rem] font-iransans font-light text-xs text-surface-main inline-block text-shadow-food-party'>تخفیفات لحظه‌ای ویژه شما</p>
                <Link href={"/"} className='p-[0.3125rem]'>
                    <div className='py-1.5 px-3 bg-white rounded-[3rem] cursor-pointer flex items-center'>
                        <p className='font-iransans text-sm text-carbon-dark inline-block'>مشاهده همه</p>
                        <Image className='mr-4' width={9} height={16} src={"/icons/home/left-black.svg"}  alt="right arrow"/>
                    </div>
                </Link>
            </div>
            <FoodPartySlider restaurants={restaurants}/>
    </div>
    </section>
    
  )
}

export default FoodParty