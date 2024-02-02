import Image from 'next/image'
import React from 'react'

function Payment({restaurant}) {
  return (
    <div className='flex items-center flex-col'>
        <Image width={19} height={14} src={"/icons/modal/payment.png"}  alt="payment"/>
        <p className='mt-2.5 mb-1 font-iransans text-xs inline-block text-carbon-main'>شیوه‌های پرداخت</p>
        <p className='font-iransans text-xs inline-block text-carbon-main font-bold'>{restaurant.paymentMethod}</p>
    </div>
  )
}

export default Payment