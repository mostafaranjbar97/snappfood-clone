import React from 'react'
import FoodPartyTimer from '../Home/FoodParty/FoodPartyTimer'
import Image from 'next/image'

function FoodPartyHeader() {
  return (
    <>
        <div className='flex'>
            <Image width={24} height={24} src={"/icons/restaurant/sparkler.svg"}  alt="Sparkle" />
            <p className='font-iransans font-bold text-base text-white inline-block mr-1'>فود پارتی</p>
        </div>
        <div className='flex '>
            <div className='flex justify-center items-center'>
            <FoodPartyTimer/>
                <Image width={18} height={18} src={"/icons/home/clock.svg"}  alt="timer" />
            </div>
        </div>
    </>
  )
}

export default FoodPartyHeader