'use client'
import React from 'react'
import PrevOrderCard from './PrevOrderCard'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { setHideOrderModal } from '@/redux/features/ShowModalSlice'

function OrderModal() {
  const showModal=useSelector((store)=>store.showModal)
  const {isOpenOrder}=showModal
  const dispatch=useDispatch()
  const handleClose=()=>{
    dispatch(setHideOrderModal())
  }
  if(!isOpenOrder)return null;
  return (
    <div>
    <div className='flex justify-center items-center fixed inset-0 z-[1000] animate-[0.3s_ease_0s_1_normal_forwards_running_modal-animation]' onClick={handleClose}>  
    <div className='absolute left-0 w-[21vw] min-w-[17.8125rem] min-h-[100vh] px-4 overflow-auto bg-white shadow-shadows-modal animate-[0.3s_cubic-bezier(0.4,0,0,1.5)_0s_1_normal_forwards_running_modal-animation2] max-h-[90vh] tablet:min-w-[18.75rem] laptop:min-w-[25rem]' onClick={(e)=>e.stopPropagation()}>
        <div className='flex flex-col mt-4 '>
            <p className='font-iransans font-bold text-xs inline-block text-carbon-light'>سفارش‌های پیشین</p>
            <div className='mt-3  border-carbon-alphaMedium border-t-border-xs border-l-border-xs border-r-border-xs rounded-t-xl '>
                <PrevOrderCard/>
                <PrevOrderCard/>
            </div>
            <button className='h-[3.75rem] rounded-[3rem] mt-1 mx-auto flex justify-center items-center transition-all min-w-[6.6875rem] border-border-sm border-accent2-alphaLight bg-transparent bg-clip-padding shadow-shadows-medium font-iransans font-bold text-base hover:bg-accent2-alphaLight active:bg-accent2-alphaMedium'>
              <Image width={17} height={18} src={"/icons/modal/past-time.png"}  alt="past time" />
              <p className='mr-2 font-iransans font-bold text-sm inline-block text-accent2-main'>مشاهده همه سفارش‌ها</p>
            </button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default OrderModal