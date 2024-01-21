'use client'
import clsx from 'clsx'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

function SidePriceFilter() {

    const router = useRouter()
    const searchParam = useSearchParams()
    const getSearch = searchParam.get("pricefilter")
    const pathname = usePathname()
    const handler = (e)=>{
        e.stopPropagation();
      router.push(`${pathname}?pricefilter=${e.target.id}`)
    }

  return (
    <div className='mb-2 p-4 rounded-xl  flex-col shadow-shadows-small border border-carbon-alphaLight hidden laptop:flex'>
        <p className='font-iransans text-xs inline-block text-carbon-main'>کلاس قیمتی</p>
        <div className='mt-4 relative rounded-xl bg-carbon-alphaLight cursor-pointer flex items-center'>
            <div className={clsx('w-[25%] absolute h-[2.25rem] mr-0.5 bg-white rounded-xlg transition-all', getSearch==1 && 'translate-x-0',getSearch==2 && 'translate-x-[-98%]',getSearch==3 && 'translate-x-[-196%]',getSearch==4 && 'translate-x-[-294%]')}></div>
            <div id='1' className='z-10 w-[7.3125rem] p-2.5 flex justify-center items-center' onClick={handler}>
                <p className={clsx( 'font-iransans text-sm inline-block ',getSearch==1 || !getSearch ? 'text-accent2-main' : 'text-carbon-main' )}>همه</p>
            </div>
            <div id="2" className='z-10 w-[7.3125rem] p-2.5 flex justify-center items-center' onClick={handler}>
                <p className={clsx( 'font-iransans text-sm inline-block ',getSearch==2 ? 'text-accent2-main' : 'text-carbon-main' )}>اقتصادی</p>
            </div>
            <div  className='z-10 w-[7.3125rem] p-2.5 flex justify-center items-center' id={3} onClick={handler}>
                <p className={clsx( 'font-iransans text-sm inline-block ',getSearch==3 ? 'text-accent2-main' : 'text-carbon-main' )}>متوسط</p>
            </div>
            <div id='4' className='z-10 w-[7.3125rem] p-2.5 flex justify-center items-center' onClick={(e)=>{console.log(e)}}>
                <p className={clsx( 'font-iransans text-sm inline-block ',getSearch==4 ? 'text-accent2-main' : 'text-carbon-main' )}>گران</p>
            </div>
        </div>
    </div>
  )
}

export default SidePriceFilter