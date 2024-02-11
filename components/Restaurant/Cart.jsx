'use client'
import Image from 'next/image'
import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '@/redux/features/CartSlice'
import EmptyCart from './EmptyCart'
import { separate } from '@/utils/separatePrice'

function Cart({delivery}) {
    
    const {cart}=useSelector((store)=> store.cart)

    const cartCount=cart.reduce((init,current)=>init=init+current.count,0)
    
    const totalDiscount=cart.reduce((init,current)=>{
        const foodWithDiscount=((current.price)*(100-(current.discount)))/100
        const discount=current.price-foodWithDiscount
        return init + discount*current.count;
    },0)
    const  total = cart.reduce( (init , current ) => init + (current.price * current.count), 0);
    const  totalPrice = cart.reduce( (init , current ) => init + (current.price * current.count)-totalDiscount+(delivery.packagingCost+delivery.price), 0);


    const dispatch = useDispatch();

     const resetCart=()=>{
        dispatch(clearCart())
     }

     if(cartCount==0) {
        return(
            <EmptyCart/>
        )
     }

    const cost_list=[
        {title:"مجموع",cost:separate(total)},
        {title:"هزینه ارسال",cost:separate(delivery.price)},
        {title:"هزینه بسته‌بندی",cost:separate(delivery.packagingCost)},
        {title:"سود شما از این خرید",cost:separate(totalDiscount)},
     ]

  return (
    <form onSubmit={()=>console.log("submited")} className='box-border mt-2 px-4 pt-4 pb-3 bg-white rounded-lg border-border-xs border-carbon-alphaLight'>
        <div className='h-6 mb-2 flex justify-between items-center'>
            <div className='flex'>
                <p className='font-iransans font-bold text-sm inline-block text-carbon-light'>سبد خرید</p>
                <span className='font-iransans mr-1 text-sm inline-block text-carbon-light'>({cartCount})</span>
            </div>
            <button  type="button" onClick={resetCart} className='flex justify-center items-center box-border transition-all w-8 h-8 border-border-sm border-transparent rounded-[50%] bg-transparent bg-clip-padding hover:bg-accent-alphaLight active:bg-accent-alphaMedium'>
                <Image width={12} height={14} src={"/icons/restaurant/remove.svg"} alt="remove"/>
            </button>
        </div>
        {
            cart.map((food)=>{
                return(<CartItem key={food.id} cartItem={food} />)
            })
        }

        <div className='border-b border-carbon-alphaLight flex flex-col'>

            {
                cost_list.map((item,index)=>(
                    <div key={index} className='h-8 flex justify-between items-center'>
                        <div className='flex items-center'>
                            <span className='font-iransans text-sm inline-block text-carbon-main'>{item.title}</span>
                        </div>
                        <span className='font-iransans text-sm inline-block text-carbon-main'> {item.cost} 
                            <span className='font-iransans text-xs inline-block text-carbon-light mr-1'>تومان</span>
                        </span>
                    </div>))
            }
            

        </div>

        <div className='h-12 flex justify-between items-center'>
            <p className='font-iransans text-sm font-bold inline-block text-carbon-main'>قابل پرداخت</p>
            <span className='font-iransans text-sm font-bold inline-block text-carbon-main'> {separate(totalPrice)} 
                <span className='font-iransans text-xs font-normal inline-block text-carbon-light mr-1'>تومان</span>
            </span>
        </div>

        <textarea name="description" placeholder='توضیحات سفارش...' className='w-full box-border mt-4 mb-7 p-3 min-h-24 text-carbon-main border-carbon-alphaMedium rounded-md resize-y overflow-auto font-iransans border'></textarea>

        <div className='sticky bottom-0 w-full h-[7.5rem] bg-white'>
            <button type='submit' onClick={(e)=>{e.preventDefault()}} className='min-w-[6.6875rem] mt-4 mb-auto flex justify-center items-center box-border transition-all h-12 w-full border-border-sm border-accent-main rounded-md bg-accent-main bg-clip-padding text-white font-iransans font-bold text-lg  hover:bg-accent-light hover:border-accent-light active:bg-accent-dark active:border-accent-light rtl'>ثبت سفارش</button>
        </div>
    </form>
  )
}

export default Cart