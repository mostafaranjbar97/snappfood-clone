
import React from 'react'
import CouponBadge from './CouponBadge'
import DiscountBadge from './DiscountBadge'

function ResCardImage({restaurant}) {

    
  return (
    <div className='h-[9.6875rem] min-h-[9.6875rem] max-h-[9.6875rem] relative shrink-0 grow flex items-end justify-center'>
        <img src={restaurant.image} alt='' className='object-cover w-full h-full'/>
        <div className='absolute right-0 left-0 m-auto translate-y-5 h-[5.5rem] w-[5.5rem] bg-white rounded-xl shadow-shadows-high flex justify-center items-center'>
            <img alt={restaurant.name} src={restaurant.logo} className='border-carbon-alphaLight border rounded-xl'/>
        </div>
        {(restaurant.coupon || restaurant.proUsers) && <CouponBadge restaurant={restaurant}/>}
        {restaurant.discount && <DiscountBadge restaurant={restaurant}/>}
    </div>
  )
}

export default ResCardImage