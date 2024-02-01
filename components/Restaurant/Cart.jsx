'use client'
import Image from 'next/image'
import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '@/redux/features/CartSlice'
import EmptyCart from './EmptyCart'

function Cart({delivery}) {
    
    const {cart}=useSelector((store)=> store.cart)
    // console.log("cart",cart)
    const cartCount=cart.reduce((init,current)=>init=init+current.count,0)
    
    const totalDiscount=cart.reduce((init,current)=>{
        const foodWithDiscount=((current.price)*(100-(current.discount)))/100
        const discount=current.price-foodWithDiscount
        return init + discount*current.count;
    },0)

    const  totalPrice = cart.reduce( (init , current ) => init + (current.price * current.count)-totalDiscount+(delivery.packagingCost+delivery.price), 0);
    // console.log("cartCount",cartCount,cart,"cart")

    const dispatch = useDispatch();

     const resetCart=()=>{
        dispatch(clearCart())
     }

     if(cartCount==0) {
        return(
            <EmptyCart/>
        )
     }

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

            <div className='h-8 flex justify-between items-center'>
                <div className='flex items-center'>
                    <span className='font-iransans text-sm inline-block text-carbon-main'>هزینه بسته‌بندی</span>
                </div>
                <span className='font-iransans text-sm inline-block text-carbon-main'> {delivery.packagingCost} 
                    <span className='font-iransans text-xs inline-block text-carbon-light mr-1'>تومان</span>
                </span>
            </div>

            <div className='h-8 flex justify-between items-center'>
                <div className='flex items-center'>
                    <span className='font-iransans text-sm inline-block text-carbon-main'>هزینه ارسال</span>
                </div>
                <span className='font-iransans text-sm inline-block text-carbon-main'> {delivery.price} 
                    <span className='font-iransans text-xs inline-block text-carbon-light mr-1'>تومان</span>
                </span>
            </div>
            
            <div className='h-8 flex justify-between items-center'>
                <div className='flex items-center'>
                    <span className='font-iransans text-sm inline-block text-carbon-main'>سود شما از این خرید</span>
                </div>
                <span className='font-iransans text-sm inline-block text-carbon-main'> {totalDiscount} 
                    <span className='font-iransans text-xs inline-block text-carbon-light mr-1'>تومان</span>
                </span>
            </div>

            <div className='h-8 flex justify-between items-center'>
                <div className='flex items-center'>
                    <span className='font-iransans text-sm inline-block text-carbon-main'>مجموع</span>
                </div>
                <span className='font-iransans text-sm inline-block text-carbon-main'> {totalPrice} 
                    <span className='font-iransans text-xs inline-block text-carbon-light mr-1'>تومان</span>
                </span>
            </div>

        </div>

        <div className='border-b border-carbon-alphaLight flex flex-col'>
            <div className='flex justify-between items-center'>
                <div className='max-w-[calc(100%-2rem)] grow shrink basis-auto my-4'>
                    <span className='block mb-1 font-iransans text-xs font-bold text-accent2-main'>۵٪ تخفیف</span>
                    <span className='font-iransans text-xs inline-block text-carbon-main'>مخصوص سفارش اول</span>
                </div>
                <button type="button" className='min-w-8 grow-0 shrink-0 basis-8 flex justify-center items-center box-border transition-all h-8 border-border-sm border-transparent rounded-[50%] bg-transparent bg-clip-padding  hover:bg-carbon-alphaLight active:bg-carbon-alphaMedium rtl'>
                    <Image width={12} height={14} src={"/icons/restaurant/remove-gray.svg"}  alt="Remove" />
                </button>
            </div>
        </div>

        <div className='h-12 flex justify-between items-center'>
            <p className='font-iransans text-sm font-bold inline-block text-carbon-main'>قابل پرداخت</p>
            <span className='font-iransans text-sm font-bold inline-block text-carbon-main'> {totalPrice} 
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