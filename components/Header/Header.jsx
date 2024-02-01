import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Profile from './Profile'
import Address from './Address'
import Search from './Search'
import Order from './Order'

function Header({restaurants}) {
  return ( 
    <header className='sticky transition-all duration-300 translate-y-0 top-0 right-0 left-0 z-[999] w-full flex flex-col'>
        <div className='w-full bg-white  flex flex-col'>
            <div className='relative animate-[auto_ease_0s_1_normal_none_running_none_!important] w-full top-0 right-0 left-0 bg-white box-border h-[4.5rem] p-4 flex justify-between items-center'>
                <div className='flex items-center'>
                    <Link href={"/"} className='ml-10 hidden tablet:block' >
                        <Image width={68} height={34} src={"/icons/header/snappfood-logo.svg"} alt='snappfood' className='outline-none'/>
                    </Link>
                   <Address/>
                </div>
                <Search restaurants={restaurants}/>
                <div className='z-[999] flex items-center'>
                    <Profile/>
                    <Order/>
                </div>
            </div>
        </div>
        </header>
  )
}

export default Header