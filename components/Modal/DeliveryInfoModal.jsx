import Image from 'next/image'
import React from 'react'

function DeliveryInfoModal({handleClose,modalRef}) {
  return (
    <div ref={modalRef} className='relative w-0 h-0' >
        <div className='absolute -top-14 left-[-19.375rem] w-[19.375rem] min-h-12 shadow-shadows-high rounded-lg bg-white flex items-center flex-col overflow-hidden text-carbon-main p-0' >
        
            <div className='w-[calc(100%-32px)] py-3.5 grow flex justify-between items-center'>
                <div className='flex items-center justify-center'>
                    <Image width={18} height={18} src={"/icons/restaurant/time.svg"} alt='time' className='ml-4'/>
                    <p className='font-iransans text-xs inline-block text-carbon-main'>زمان دریافت سفارش</p>
                </div>
                <div className='size-5 cursor-pointer flex items-center justify-center' onClick={handleClose}>
                    <Image width={12} height={16} src={"/icons/restaurant/top-green.svg"} alt='top'/>
                </div>
            </div>

            <div className='w-[calc(100%-32px)] py-3.5 grow flex justify-between items-center'>
                <label htmlFor="" className='cursor-pointer flex items-center rtl'>
                    <input type="checkbox" className='hidden' /> 
                    <Image width={20} height={20} src={"/icons/modal/check-delivery.svg"} alt='check'/>
                    <div className='flex flex-col cursor-auto mr-[16.83px]'>
                        <p className='font-iransans font-bold text-xs inline-block text-carbon-main'>سریع‌ترین زمان ممکن</p>
                        <p className='font-iransans text-xs inline-block text-carbon-main'>ارسال سریع بعد از ثبت سفارش</p>
                    </div>
                </label>
                <Image width={20} height={20} src={"/icons/restaurant/fast-time.svg"} alt='time' />
            </div>
            
            <hr className='w-full border-t border-t-carbon-alphaLight' />
            
            <div className='w-[calc(100%-32px)] py-3.5 grow flex justify-between items-center'>
                <label htmlFor="" className='cursor-pointer flex items-center rtl'>
                    <input type="checkbox" className='hidden' />
                    <svg width="1.375rem" height="1.375rem" viewBox="0 0 22 22" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M3,0 C1.34315,0 0,1.34315 0,3 L0,19 C0,20.6569 1.34315,22 3,22 L19,22 C20.6569,22 22,20.6569 22,19 L22,3 C22,1.34315 20.6569,0 19,0 L3,0 Z M17.2071,6.79289 C17.5976,7.18342 17.5976,7.81658 17.2071,8.20711 L10.2071,15.2071 C9.81658,15.5976 9.18342,15.5976 8.79289,15.2071 L4.79289,11.2071 C4.40237,10.8166 4.40237,10.1834 4.79289,9.79289 C5.18342,9.40237 5.81658,9.40237 6.20711,9.79289 L9.5,13.0858 L15.7929,6.79289 C16.1834,6.40237 16.8166,6.40237 17.2071,6.79289 Z" id="Shape" fill="" fill-rule="nonzero"></path><rect id="border" stroke="rgba(58, 61, 66, 0.12)" stroke-width="2" x="1" y="1" width="20" height="20" rx="50%"></rect></g></svg>
                    <div className='flex flex-col cursor-auto mr-[16.83px]'>
                        <p className='font-iransans text-xs inline-block text-carbon-main'>زمان دیگر</p>
                    </div>
                </label>
            </div>
        </div>
    </div>
  )
}

export default DeliveryInfoModal