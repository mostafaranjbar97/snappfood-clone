'use client'
import { setShowCommentModal, setShowInvoiceModal } from '@/redux/features/ShowModalSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'

function PrevOrderCard() {
    const dispatch=useDispatch()
    const handleOpenCommentModal=()=>{
        dispatch(setShowCommentModal())
    }
    const handleOpenInvoiceModal=()=>{
        dispatch(setShowInvoiceModal())
    }
  return (
    
    <div className='pt-3 pb-2 border-border-xs border-b-carbon-alphaLight flex justify-center'>
        <div className='w-[calc(100%-2rem)] flex flex-col'>
            <div className='flex items-center'>
                <div className='w-12 h-12 cursor-pointer flex flex-col'>
                    <img src="https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/5da4802be800c.jpg" alt="resturant logo" className='w-full h-full rounded' />
                </div>
                <div className='mr-4 flex flex-col '>
                    <p className='cursor-pointer font-iransans font-bold text-sm inline-block text-carbon-main'>فست فود الو پیتزا</p>
                    <div>
                        <p className='font-iransans text-xs inline-block text-carbon-main'>دوشنبه ۳۱ مرداد</p>
                        <p className='mr-4 font-iransans text-xs inline-block text-carbon-main'>۱۹:۵۲</p>
                    </div>
                </div>
            </div>
            <div className='h-8 mt-4 px-2 bg-accent2-alphaLight rounded flex justify-between items-center'>
                <p className='font-iransans text-2xs leading-3 inline-block text-carbon-main'>نظرتان را درباره این سفارش به اشتراک بگذارید.</p>
                <p onClick={handleOpenCommentModal} className='font-iransans font-bold text-xs cursor-pointer inline-block text-accent2-main'>ثبت نظر</p>
            </div>
            <div className='flex justify-center mt-3 mb-2'>
                <button onClick={handleOpenInvoiceModal} className='flex justify-center items-center box-border grow shrink basis-0 h-8 ml-4 transition-all border-border-sm border-carbon-alphaMedium rounded-md min-w-[6.6875rem] text-carbon-main bg-carbon-alphaLight bg-clip-padding rtl hover:bg-carbon-alphaMedium active:bg-carbon-alphaHigh'>
                    <Image width={17} height={18} src={"/icons/modal/alert.png"} className='grow-0 basis-auto shrink-0'/>
                    <p className='mr-2 grow-0 basis-auto shrink-0 font-iransans font-bold text-sm inline-block text-carbon-main'>مشاهده فاکتور</p>
                </button>
                <button className='flex justify-center items-center box-border grow shrink basis-0 h-8 transition-all border-border-sm border-carbon-alphaMedium rounded-md min-w-[6.6875rem] text-carbon-main bg-carbon-alphaLight bg-clip-padding rtl hover:bg-carbon-alphaMedium active:bg-carbon-alphaHigh'>
                    <Image width={16} height={16} src={"/icons/modal/refresh.svg"} className='grow-0 basis-auto shrink-0'/>
                    <p className='mr-2 grow-0 basis-auto shrink-0 font-iransans font-bold text-sm inline-block text-carbon-main'>سفارش مجدد</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default PrevOrderCard