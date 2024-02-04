import Image from 'next/image'
import React from 'react'

function CouponBadge({restaurant}) {
    let copons
     if(restaurant.coupon){
        const restaurantWithCoupon=restaurant.coupon.map((coupon)=>` ${coupon.value} ${coupon.title}`)
        copons=restaurantWithCoupon.join(" و ")
       
     }
     let couponOrVIP= restaurant.proUsers ? copons ? `${copons} و ${restaurant.proUsers}% تخفیف ویژه کاربران PRO` : `${restaurant.proUsers}% تخفیف ویژه کاربران PRO` : copons


  return (
     <div className='absolute right-0 top-5 left-auto max-w-[calc(100%-26px)] py-1 pr-2 pl-3 bg-white rounded-l-2xl flex items-center'>
            <span className='w-4 h-4'>
                <Image width={16} height={16} src={"/icons/home/coupon-badge.svg"} alt='coupon' />
            </span>
            <span className='mr-[0.28125rem] pt-0.5 overflow-hidden font-medium whitespace-nowrap text-ellipsis font-iransans text-xs inline-block text-accent2-dark'>{couponOrVIP}</span>
        </div>
  )
}

export default CouponBadge