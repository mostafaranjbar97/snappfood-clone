'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

function SideFoodCategory({restaurants}) {
  const [selectCat,setSelectCat]=useState(1)

  const params=useParams()
  restaurants=restaurants.filter((res)=>res.id==Number(params.restaurant))
  const restaurant=restaurants[0]

  const selectCatHandler=(e)=>{
    setSelectCat(Number(e.target.id))
    console.log(selectCat)
  }

  return (
    <nav dir='rtl' className='h-[30vh] min-h-[9.375rem] overflow-y-auto flex flex-col laptop:h-[calc((100vh-180px)-152px)] ltr-laptop'>

        {
          restaurant.restCatsMenu.map((cat)=>{
            if(cat.name=="فودپارتی"){
              return (
                <p id={cat.id} key={cat.id} onClick={selectCatHandler} className={clsx('mb-4 py-0.5 px-3 text-sm cursor-pointer font-iransans inline-block ',selectCat==cat.id ? "border-r-2 border-r-carbon-main laptop:border-l-carbon-main  laptop:border-l-2 laptop:border-r-0 font-bold text-carbon-main" : "text-carbon-light")}>
                  <span id={cat.id} className='relative flex items-center'>فود پارتی
                      <Image  id={cat.id} width={20} height={20} src={"/icons/restaurant/foodparty.svg"} className='ml-2'/> 
                  </span>
                </p>
              )
            }else if(cat.name=="کوپن‌ها"){
              return (
                <p id={cat.id} key={cat.id} onClick={selectCatHandler} className={clsx('mb-4 py-0.5 px-3 text-sm cursor-pointer font-iransans inline-block ',selectCat==cat.id ? "border-r-2 border-r-carbon-main laptop:border-l-carbon-main  laptop:border-l-2 laptop:border-r-0 font-bold text-carbon-main" : "text-carbon-light")}>
                  <span id={cat.id} className='relative flex items-center  '>کوپن‌ها
                      <Image  id={cat.id} width={20} height={20} src={"/icons/restaurant/coupon.svg"} className='ml-2'/>
                      <span className='absolute -top-2 right-[4.25rem] w-[18px] h-[18px] bg-accent2-main border-2 border-white rounded-3xl flex flex-col items-center laptop:left-[4.25rem]'>
                        <span className='font-iransans text-sm text-white inline-block'>1</span>
                      </span> 
                  </span>
                </p>
              )
            }else{
              return(
                <p id={cat.id} key={cat.id} onClick={selectCatHandler} className={clsx('mb-4 py-0.5 px-3 text-sm cursor-pointer text-carbon-light font-iransans inline-block ',selectCat==cat.id ? "border-r-2 border-r-carbon-main laptop:border-l-carbon-main  laptop:border-l-2 laptop:border-r-0 font-bold text-carbon-main" : "text-carbon-light")}>{cat.name}</p>
              )
            }
           
          })
        }

    </nav>
  )
}

export default SideFoodCategory