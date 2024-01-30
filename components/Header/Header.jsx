import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Profile from './Profile'
import Address from './Address'

function Header() {
  return ( 
    <header className='sticky transition-all duration-300 translate-y-0 top-0 right-0 left-0 z-[999] w-full flex flex-col'>
        <div className='w-full bg-white  flex flex-col'>
            <div className='relative animate-[auto_ease_0s_1_normal_none_running_none_!important] w-full top-0 right-0 left-0 bg-white box-border h-[4.5rem] p-4 flex justify-between items-center'>
                <div className='flex items-center'>
                    <Link href={"/"} className='ml-10 hidden tablet:block' >
                        <Image width={68} height={34} src={"/icons/header/snappfood-logo.svg"} className='outline-none'/>
                    </Link>
                   <Address/>
                </div>
                <div className='w-[10.5625rem] bg-white absolute left-0 h-12 p-4 m-auto rounded-xlg box-border flex items-center laptop:right-0 laptop:w-[29vw] laptop:bg-surface-dark '>
                    <Image width={17} height={17} src={"/icons/header/search.svg"} className='ml-2'/>
                    <p className='ml-2 font-iransans font-normal text-base hidden text-inactive-dark laptop:inline-block'>جست‌وجو در اسنپ‌فود</p>
                </div>
                <div className='z-[999] flex items-center'>
                    <Profile/>
                    <div className='mr-4 relative cursor-pointer select-none flex laptop:ml-[0.5625rem]'>
                        <Image width={20} height={20} src={"/icons/header/order.svg"} className='ml-2'/>
                        <p className='hidden ml-2 font-iransans font-bold text-carbon-main text-sm laptop:inline-block'>سفارش‌ها</p>
                    </div>
                </div>
            </div>
        </div>
        </header>
  )
}

export default Header