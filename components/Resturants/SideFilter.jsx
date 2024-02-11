'use client'
import clsx from 'clsx'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'


function SideFilter() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const getFilters = searchParams.getAll("filters")

    const queryHandler = (value)=>{

        if(getFilters){
            if(searchParams.has("filters",value)) {
                const newSearchParams = new URLSearchParams(searchParams)
                newSearchParams.delete("filters",value)
                const newUrl = `${pathname}?${newSearchParams}`
                router.push(newUrl)
            }else{
                const newSearchParams = new URLSearchParams(searchParams)
                newSearchParams.append("filters",value)
                const newUrl = `${pathname}?${newSearchParams}`
                router.push(newUrl)      
            }}else{
                const newSearchParams = new URLSearchParams(searchParams)
                newSearchParams.set("filters",value)
                const newUrl = `${pathname}?${newSearchParams}`
                router.push(newUrl)     
            }
      }
    
      const filterList=
      [{name:"پیک اسنپ‌فود",query:"has_express"},
      {name:"دارای کوپن",query:"has_coupon"},
      {name:"دارای تخفیف",query:"has_discount"},
      {name:"فودپرو",query:"is_vip"},
      {name:"به‌صرفه",query:"is_economical"},
      {name:"خوش‌قیمت",query:"is_eco"}]
  return (
    <div className='mb-2 p-4 border border-carbon-alphaLight rounded-xl shadow-shadows-small flex'>
        <div className='grow flex flex-col flex-wrap'>

            {
                filterList.map((filterItem,index)=>{
                    return(
                        <div key={index} onClick={()=>queryHandler(filterItem.query)} className='border-b border-b-carbon-alphaLight min-h-[3.4375rem] flex justify-between items-center'>
                            <span className='font-iransans text-sm text-carbon-main inline-block'>{filterItem.name}</span>
                            <label htmlFor="checkbox" className='flex items-center select-none ltr' >
                                <input name='checkbox' type="checkbox" className='hidden p-0 box-border' />
                                <span className={clsx('outline-0 inline-block w-10 h-6 relative cursor-pointer select-none  rounded-3xl p-0.5 transition-all duration-[400ms] after:rounded-[50%] after:bg-white after:transition-all after:duration-200  after:relative after:size-5 after:block',searchParams.has("filters",filterItem.query)?"after:left-4 bg-accent2-main" :"bg-carbon-alphaLight after:left-0")}></span>
                            </label>
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default SideFilter