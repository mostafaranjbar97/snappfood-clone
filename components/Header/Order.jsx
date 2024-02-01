'use client'
import { setShowOrderModal } from '@/redux/features/ShowModalSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Order() {

    const dispatch=useDispatch()
    const  handleOpen = () =>dispatch(setShowOrderModal())

  return (
    <div className='mr-4 relative cursor-pointer select-none flex laptop:ml-[0.5625rem]' onClick={handleOpen}>
        <Image width={20} height={20} src={"/icons/header/order.svg"} alt='order' className='ml-2'/>
        <p className='hidden ml-2 font-iransans font-bold text-carbon-main text-sm laptop:inline-block'>سفارش‌ها</p>
    </div>
  )
}

export default Order