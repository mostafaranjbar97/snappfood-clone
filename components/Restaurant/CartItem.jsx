
import React from 'react'
import PriceTag from '../Modal/PriceTag'
import AddToCartBtn from '../Modal/AddToCartBtn'

function CartItem(cartItem) {
   
    const food=cartItem.cartItem

  return (
    <div className='py-2 flex border-b border-b-carbon-alphaLight flex-col'>
        <div className='min-h-10 flex justify-between items-center'>
            <span className='font-iransans font-bold text-sm inline-block text-carbon-main'>{food.name}</span>
        </div>
        <div className='h-10 flex justify-between items-center'>
            <PriceTag food={food}/>
            <AddToCartBtn food={food} foodCount={food.count}/>
        </div>
    </div>
  )
}

export default CartItem