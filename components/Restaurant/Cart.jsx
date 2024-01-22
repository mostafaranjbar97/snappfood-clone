import Image from 'next/image'
import React from 'react'
import CartItem from './CartItem'

function Cart() {
  return (
    <form className='box-border mt-2 px-4 pt-4 pb-3 bg-white rounded-lg border-border-xs border-carbon-alphaLight'>
        <div className='h-6 mb-2 flex justify-between items-center'>
            <div className='flex'>
                <p className='font-iransans font-bold text-sm inline-block text-carbon-light'>سبد خرید</p>
                <span className='font-iransans mr-1 text-sm inline-block text-carbon-light'>(۳)</span>
            </div>
            <button className='flex justify-center items-center box-border transition-all w-8 h-8 border-border-sm border-transparent rounded-[50%] bg-transparent bg-clip-padding hover:bg-accent-alphaLight active:bg-accent-alphaMedium'>
                <Image width={12} height={14} src={"/icons/restaurant/remove.svg"}/>
            </button>
        </div>
        <CartItem/>
        <CartItem/>

        <div className='border-b border-carbon-alphaLight flex flex-col'>

            <div className='h-8 flex justify-between items-center'>
                <div className='flex items-center'>
                    <span className='font-iransans text-sm inline-block text-carbon-main'>هزینه بسته‌بندی</span>
                </div>
                <span className='font-iransans text-sm inline-block text-carbon-main'> ۸۴۰,۰۰۰ 
                    <span className='font-iransans text-xs inline-block text-carbon-light mr-1'>تومان</span>
                </span>
            </div>

            <div className='h-8 flex justify-between items-center'>
                <div className='flex items-center'>
                    <span className='font-iransans text-sm inline-block text-carbon-main'>هزینه ارسال</span>
                </div>
                <span className='font-iransans text-sm inline-block text-carbon-main'> ۸۴۰,۰۰۰ 
                    <span className='font-iransans text-xs inline-block text-carbon-light mr-1'>تومان</span>
                </span>
            </div>
            
            <div className='h-8 flex justify-between items-center'>
                <div className='flex items-center'>
                    <span className='font-iransans text-sm inline-block text-carbon-main'>سود شما از این خرید</span>
                </div>
                <span className='font-iransans text-sm inline-block text-carbon-main'> ۸۴۰,۰۰۰ 
                    <span className='font-iransans text-xs inline-block text-carbon-light mr-1'>تومان</span>
                </span>
            </div>

            <div className='h-8 flex justify-between items-center'>
                <div className='flex items-center'>
                    <span className='font-iransans text-sm inline-block text-carbon-main'>مجموع</span>
                </div>
                <span className='font-iransans text-sm inline-block text-carbon-main'> ۸۴۰,۰۰۰ 
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
                <button className='min-w-8 grow-0 shrink-0 basis-8 flex justify-center items-center box-border transition-all h-8 border-border-sm border-transparent rounded-[50%] bg-transparent bg-clip-padding  hover:bg-carbon-alphaLight active:bg-carbon-alphaMedium rtl'>
                    <Image width={12} height={14} src={"/icons/restaurant/remove-gray.svg"}/>
                </button>
            </div>
        </div>

        <div className='h-12 flex justify-between items-center'>
            <p className='font-iransans text-sm font-bold inline-block text-carbon-main'>قابل پرداخت</p>
            <span className='font-iransans text-sm font-bold inline-block text-carbon-main'> ۸۴۰,۰۰۰ 
                <span className='font-iransans text-xs font-normal inline-block text-carbon-light mr-1'>تومان</span>
            </span>
        </div>

        <textarea name="description" placeholder='توضیحات سفارش...' className='w-full box-border mt-4 mb-7 p-3 min-h-24 text-carbon-main border-carbon-alphaMedium rounded-md resize-y overflow-auto font-iransans border'></textarea>

        <div className='sticky bottom-0 w-full h-[7.5rem] bg-white'>
            <button className='min-w-[6.6875rem] mt-4 mb-auto flex justify-center items-center box-border transition-all h-12 w-full border-border-sm border-accent-main rounded-md bg-accent-main bg-clip-padding text-white font-iransans font-bold text-lg  hover:bg-accent-light hover:border-accent-light active:bg-accent-dark active:border-accent-light rtl'>ثبت سفارش</button>
        </div>
    </form>
  )
}

export default Cart