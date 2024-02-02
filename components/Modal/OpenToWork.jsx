import Image from 'next/image'
import React from 'react'

function OpenToWork({restaurant}) {
  return (
    <div className='flex flex-col items-center'>
        <Image width={18} height={18} src={"/icons/modal/clock.svg"}  alt="time"/>
        <p className='mt-2.5 mb-1 font-iransans text-xs inline-block text-carbon-main'>ساعت کاری</p>
        <p className='font-iransans text-xs flex text-carbon-main font-bold'>
            <span className='font-iransans text-xs inline-block text-accent2-main font-bold ml-1'> باز </span>
            {restaurant.workingHours}
            <Image width={11} height={9} src={"/icons/modal/bottom-info.svg"} alt='bottom' className='top-[0.0625rem] relative mr-1' />
        </p>
    </div>
  )
}

export default OpenToWork