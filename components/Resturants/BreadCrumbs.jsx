'use client'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

function BreadCrumbs({restaurants,restaurantCategory}) {
  const pathname=usePathname();
  let restaurantId
  if(pathname.split("/").length>2) {restaurantId=pathname.split("/")[2]}
  const searchParams  = useSearchParams()
  let search  = searchParams.get("cat")

  const fastfoodCat= restaurantCategory.filter((cat)=>cat.categoryId ==2)
  const iraniCat= restaurantCategory.filter((cat)=>cat.categoryId ==1)
  const kabab= restaurantCategory.filter((cat)=>cat.categoryId ==3)

  if(search==1 || iraniCat.filter((cat)=>cat.id ==search).length>0 ) {
    search=1
  } 
  if(search==2 || fastfoodCat.filter((cat)=>cat.id ==search).length>0 ) {
    search=2
  } 
  if(search==3 || kabab.filter((cat)=>cat.id ==search).length>0 ) {
    search=3
  } 

  
  return (
    <div className='mt-[1.5625rem] pr-5 flex items-center'>
        <Link href={"/"} className='flex items-center cursor-pointer ml-2.5'>
            <p className='ml-1 font-iransans text-2xs leading-3 text-inactive-dark inline-block'>اسنپ فود</p>
            <Image width={5} height={16} src={"/icons/resturants/left-breadcrumb.svg"}  alt="back" />
        </Link>
        <Link href={"/resturants"} className='flex items-center cursor-pointer ml-2.5'>
            <p className= {clsx('ml-1 font-iransans text-2xs leading-3 inline-block', (search || restaurantId) ? "text-inactive-dark" :"text-carbon-main")}>رستوران</p>
            {(search || restaurantId) && <Image width={5} height={16} src={"/icons/resturants/left-breadcrumb.svg"}  alt="back"/>}
        </Link>
        {search && <div className='flex'>
            <p className='font-iransans text-2xs leading-3 text-carbon-main inline-block'>{restaurantCategory[search-1].name}</p>
        </div>}
        {restaurantId && <div className='flex'>
            <p className='font-iransans text-2xs leading-3 text-carbon-main inline-block'>{restaurants[restaurantId-1].name}</p>
        </div>}
    </div>
  )
}

export default BreadCrumbs