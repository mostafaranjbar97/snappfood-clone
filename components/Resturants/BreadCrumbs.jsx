import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BreadCrumbs() {
  return (
    <div className='mt-[1.5625rem] pr-5 flex items-center'>
        <Link href={"/"} className='flex items-center cursor-pointer ml-2.5'>
            <p className='ml-1 font-iransans text-2xs leading-3 text-inactive-dark inline-block'>اسنپ فود</p>
            <Image width={5} height={16} src={"/icons/resturants/left-breadcrumb.svg"}/>
        </Link>
        <Link href={"/"} className='flex items-center cursor-pointer ml-2.5'>
            <p className='ml-1 font-iransans text-2xs leading-3 text-inactive-dark inline-block'>رستوران</p>
            <Image width={5} height={16} src={"/icons/resturants/left-breadcrumb.svg"}/>
        </Link>
        <div className='flex'>
            <p className='font-iransans text-2xs leading-3 text-carbon-main inline-block'>فست‌فود</p>
        </div>
    </div>
  )
}

export default BreadCrumbs