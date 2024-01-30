import Image from 'next/image'
import React from 'react'

function Address() {
  return (
    <div className='h-10 p-1 cursor-pointer flex items-center'>
        <Image width={12} height={14} src={"/icons/header/location.svg"} className='ml-2.5'/>
        <div className='ml-2.5 flex flex-col'>
            <p className='font-iransans font-bold text-sm inline-block text-carbon-main'></p>
            <div className='flex justify-center '>
                <span className='font-iransans min-w-[29vw] max-w-[29vw] pt-0.5 overflow-hidden text-ellipsis opacity-60 whitespace-nowrap font-normal text-2xs leading-3 inline-block text-carbon-main tablet:max-w-[calc(57vw-85px)] laptop:min-w-[9.375rem] laptop:max-w-[calc(24vw-85px)]'>تهران، دانشگاه تهران، کارگر شمالی، امین</span>
                <Image width={12} height={9} src={"/icons/header/bottom-purple.svg"} className='mt-1 mr-[0.6rem] '/>
            </div>
        </div>
    </div>
  )
}

export default Address