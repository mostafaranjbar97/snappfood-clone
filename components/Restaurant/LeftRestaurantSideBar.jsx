import Image from 'next/image'
import React from 'react'
import DeliveryInfoModal from '../Modal/DeliveryInfoModal'
import Cart from './Cart'

function LeftRestaurantSideBar() {
  return (
    <aside className='max-w-full basis-full box-border p-4 laptop:max-w-[25%] laptop:basis-3/12'>
        <div className='sticky top-[5.5rem] transition-[top]'>
            <div>
                <div className='mb-2 px-3 py-3.5 bg-white border border-carbon-alphaLight rounded-lg flex justify-between items-center'>
                    <div className='flex items-center justify-center' >
                        <Image width={20} height={20} src={"/icons/restaurant/fast-time.svg"} className='ml-4'/>
                        <p className='font-iransans text-xs inline-block text-carbon-main'>دریافت در سریع‌ترین زمان ممکن</p>
                    </div>
                    <div className='size-5 cursor-pointer flex items-center justify-center'>
                        <Image width={12} height={16} src={"/icons/restaurant/bottom-green.svg"}/>
                    </div>
                </div>
                {/* <DeliveryInfoModal/> */}
            </div>
            <div className='mb-2 px-3 py-1 bg-white border border-carbon-alphaLight rounded-lg flex '>
                <div className='flex items-center justify-between grow shrink basis-0 py-3' >
                    <div className='flex items-center'>
                        <Image width={20} height={20} src={"/icons/restaurant/delivery-express.svg"} className='ml-4'/> 
                        <p className='font-iransans text-xs inline-block text-carbon-main'>اسنپ‌اکسپرس</p> 
                        <span className='mr-1 font-iransans text-xs font-bold inline-block text-carbon-main'>۱۲,۸۰۰</span>
                        <span className='mr-1 font-iransans text-xs  inline-block text-carbon-main'>تومان</span>
                    </div>
                </div>
            </div>
            <Cart/>
        </div>
    </aside>
  )
}

export default LeftRestaurantSideBar