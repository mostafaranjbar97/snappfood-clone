import Image from 'next/image'
import React from 'react'

function VendorRate() {
  return (
    <div className='pb-4 flex justify-end items-end flex-col '>

        <div className='flex items-center mt-[0.3125rem] '>
            <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className=''/>
            <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
            <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
            <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
            <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
            <div className='w-[25.25rem] h-0.5 mr-4 bg-surface-dark rounded flex after:w-[60%] after:bg-[rgb(2,137,10)] after:rounded-lg after:shadow-shadows-small '></div>
        </div>

        <div className='flex items-center mt-[0.3125rem] '>
            <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
            <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
            <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
            <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
            <div className='w-[25.25rem] h-0.5 mr-4 bg-surface-dark rounded flex after:w-[60%] after:bg-[rgb(104,195,66)] after:rounded-lg after:shadow-shadows-small '></div>
        </div>

        <div className='flex items-center mt-[0.3125rem] '>
            <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
            <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
            <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
            <div className='w-[25.25rem] h-0.5 mr-4 bg-surface-dark rounded flex after:w-[11%] after:bg-[rgb(171,232,35)] after:rounded-lg after:shadow-shadows-small '></div>
        </div>

        <div className='flex items-center mt-[0.3125rem] '>
            <img width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
            <img width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
            <div className='w-[25.25rem] h-0.5 mr-4 bg-surface-dark rounded flex after:w-[3%] after:bg-[rgb(254,157,7)] after:rounded-lg after:shadow-shadows-small '></div>
        </div>

        <div className='flex items-center mt-[0.3125rem] '>
            <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2 '/>
            <div className='w-[25.25rem] h-0.5 mr-4 bg-surface-dark rounded flex after:w-[6%] after:bg-[rgb(254,57,0)] after:rounded-lg after:shadow-shadows-small '></div>
        </div>
    </div>
  )
}

export default VendorRate