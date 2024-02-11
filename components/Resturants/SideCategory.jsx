'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'


 function SideCategory({restaurantCategory}) {

    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const search = searchParams.get("cat")

    const queryHandler = (value)=>{
        
            if(searchParams.has("cat",value)) {
                return
            }else if(searchParams.has("cat")){
                const newSearchParams = new URLSearchParams(searchParams)
                newSearchParams.delete("cat")
                newSearchParams.append("cat",value)
                const newUrl = `${pathname}?${newSearchParams}`
                router.push(newUrl)      
            }else {
                const newSearchParams = new URLSearchParams(searchParams)
                newSearchParams.append("cat",value)
                const newUrl = `${pathname}?${newSearchParams}`
                router.push(newUrl)      
            }
      }

      const backHandler = ()=>{
        const newSearchParams = new URLSearchParams(searchParams)
            newSearchParams.delete("cat")
            const newUrl = `${pathname}?${newSearchParams}`
            router.push(newUrl)      
  }
    
    let mainCat= restaurantCategory.filter((cat)=>cat.isShowInMenu == true)
    const fastfoodCat= restaurantCategory.filter((cat)=>cat.categoryId ==2)
    const iraniCat= restaurantCategory.filter((cat)=>cat.categoryId ==1)
    const kabab= restaurantCategory.filter((cat)=>cat.categoryId ==3)
    let parentCat=""
    let parentId
    const isIrani=iraniCat.filter((cat)=>cat.id ==search).length>0
    const isFastfood=fastfoodCat.filter((cat)=>cat.id ==search).length>0
    const isKebab=kabab.filter((cat)=>cat.id ==search).length>0
    const isparentCat= search==1 || search==2 || search==3

    if(search==1 || isIrani ) {
        mainCat=iraniCat
        parentCat="ایرانی"
        parentId=1
    } 
    if(search==2 || isFastfood ) {
        mainCat=fastfoodCat
        parentCat="فست فود"
        parentId=2
    } 
    if(search==3 || isKebab ) {
        mainCat=kabab
        parentCat="کباب"
        parentId=3
    } 



  return (
    <div className='mt-2 p-4 border border-carbon-alphaLight rounded-xl shadow-shadows-small flex flex-col'>
        <div className='flex flex-col'>
            {
                ( isparentCat || isFastfood || isIrani || isKebab ) ? 
                <div onClick={()=>backHandler()} className='box-border h-12 p-[0.1875rem] text-right rounded-lg cursor-pointer bg-transparent transition-all flex items-center'>
                    <Image width={11} height={12} src={"/icons/resturants/right-side.svg"} alt='right' className='ml-[5px] mr-[17px]'/>
                    <div className='ml-2.5 flex items-center'>
                        <p className='mr-3 font-iransans text-sm inline-block text-carbon-main'>بازگشت</p>
                    </div>
                </div>
                :
                <div onClick={()=>backHandler()} className={clsx('box-border h-12 p-[0.1875rem] text-right rounded-lg cursor-pointer transition-all flex justify-between items-center', !search ? "bg-carbon-alphaLight" : "bg-transparent")}>
                    <div className='ml-2.5 flex items-center'>
                        <p className={clsx('mr-3 font-iransans text-sm inline-block text-carbon-main',!search && "font-bold")}>همه دسته‌بندی‌ها</p>
                    </div>
                </div>    
            }
            

            
        </div>
        
        <div className='flex flex-col'>
            {
                parentCat &&  
                <div onClick={()=>queryHandler(parentId)} className={clsx('box-border h-12 p-[0.1875rem] text-right rounded-lg cursor-pointer  transition-all flex justify-between items-center',isparentCat ? "bg-carbon-alphaLight" : "bg-transparent")}>
                    <div className='ml-2.5 flex items-center'>
                        <p className={clsx('mr-3 font-iransans  text-sm inline-block text-carbon-main', isparentCat && "font-bold" )}>همه {parentCat} ها</p>
                    </div>
                </div>    
            }
            {mainCat.map((cat,index)=>{
                
                return(
                    <div key={index} className='my-1 flex flex-col'>
                        <div onClick={()=>queryHandler(cat.id)} className={clsx('box-border p-[0.1875rem] text-right  rounded-lg cursor-pointer flex justify-between items-center transition-all',cat.id==search ? "bg-carbon-alphaLight" : "bg-transparent")}>
                            <div className='flex items-center'>
                            <img src={cat.logo} alt={cat.name} className='w-8 h-8 rounded-[50%]' />
                            <p className={clsx('mr-3 font-iransans text-sm inline-block text-carbon-main',cat.id==search && "font-bold")}>{cat.name}</p>
                        </div>
                            {cat.categoryId === 0 && <Image width={11} height={12} src={"/icons/resturants/left-side.svg"} alt='left' className='ml-2.5 mr-[17px]'/>}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default SideCategory