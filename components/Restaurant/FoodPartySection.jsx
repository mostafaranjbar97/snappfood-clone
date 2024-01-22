import Image from 'next/image'
import React from 'react'

function FoodPartySection() {
  return (
    <section className='mb-4 bg-white border-t-border-xs border-surface-dark rounded-t-lg'>
        <section className='scroll-mt-[4.375rem]'>
            <div className='py-3.5 px-[1.625rem] border-t-8 flex justify-between bg-food-party '>
                <div className='flex'>
                    <Image width={24} height={24} src={"/icons/restaurant/sparkler.svg"} />
                    <p className='font-iransans font-bold text-base text-white inline-block mr-1'>فود پارتی</p>
                </div>
                <div className='flex '>
                    <div className='flex justify-center items-center'>
                        <div className='min-w-[2.625rem] ml-1.5 pt-0.5 flex justify-center'>
                            <span className='w-6 text-center font-iransans font-bold text-lg text-white inline-block'>33</span>
                            <span className='w-2 text-center font-iransans font-bold text-lg text-white inline-block'>:</span>
                            <span className='w-6 text-center font-iransans font-bold text-lg text-white inline-block'>07</span>
                            <span className='w-2 text-center font-iransans font-bold text-lg text-white inline-block'>:</span>
                            <span className='w-6 text-center font-iransans font-bold text-lg text-white inline-block'>02</span>
                        </div>
                        <Image width={18} height={18} src={"/icons/home/clock.svg"} />
                    </div>
                </div>
            </div>

            <div className='border-t-border-xs border-surface-dark w-full flex flex-wrap'>
                
            </div>
        </section>
    </section>
  )
}

export default FoodPartySection