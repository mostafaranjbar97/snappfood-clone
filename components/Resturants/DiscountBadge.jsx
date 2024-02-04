import React from 'react'

function DiscountBadge({restaurant}) {
  return (
    <div className='absolute right-0 bottom-0 py-1 px-3 bg-white rounded-tl-2xl'>
        <span className='font-iransans font-bold text-xs text-accent-dark'>%{restaurant.discount}</span>
    </div>
  )
}

export default DiscountBadge