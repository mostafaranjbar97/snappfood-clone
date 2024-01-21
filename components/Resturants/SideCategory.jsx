'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'


 function SideCategory({restaurantCategory}) {

    const router = useRouter()
    const searchParam = useSearchParams()
    const getSearch = searchParam.get("cat")
    const handler = (id)=>{
      router.push(`/resturants?cat=${id}`)
    }
    
    let mainCat= restaurantCategory.filter((cat)=>cat.isShowInMenu == true)
    const fastfoodCat= restaurantCategory.filter((cat)=>cat.categoryId ==2)
    const iraniCat= restaurantCategory.filter((cat)=>cat.categoryId ==1)
    const kabab= restaurantCategory.filter((cat)=>cat.categoryId ==3)
    let parentCat=""
    if(getSearch==1 || iraniCat.filter((cat)=>cat.id ==getSearch).length>0 ) {
        mainCat=iraniCat
        parentCat="ایرانی"
    } 
    if(getSearch==2 || fastfoodCat.filter((cat)=>cat.id ==getSearch).length>0 ) {
        mainCat=fastfoodCat
        parentCat="فست فود"
    } 
    if(getSearch==3 || kabab.filter((cat)=>cat.id ==getSearch).length>0 ) {
        mainCat=kabab
        parentCat="کباب"
    } 

    console.log("mainCat",mainCat)

  return (
    <div className='mt-2 p-4 border border-carbon-alphaLight rounded-xl shadow-shadows-small flex flex-col'>
        <div className='flex flex-col'>
            {
                ( getSearch ) ? 
                <div className='box-border h-12 p-[0.1875rem] text-right rounded-lg cursor-pointer bg-transparent transition-all flex items-center'>
                    <Image width={11} height={12} src={"/icons/resturants/right-side.svg"} className='ml-[5px] mr-[17px]'/>
                    <div className='ml-2.5 flex items-center'>
                        <p className='mr-3 font-iransans text-sm inline-block text-carbon-main'>بازگشت</p>
                    </div>
                </div>
                :
                <div className='box-border h-12 p-[0.1875rem] text-right rounded-lg cursor-pointer bg-carbon-alphaLight transition-all flex justify-between items-center'>
                    <div className='ml-2.5 flex items-center'>
                        <p className='mr-3 font-iransans font-bold text-sm inline-block text-carbon-main'>همه دسته‌بندی‌ها</p>
                    </div>
                </div>    
            }
            

            
        </div>
        
        <div className='flex flex-col'>
            {
                parentCat &&  
                <div className='box-border h-12 p-[0.1875rem] text-right rounded-lg cursor-pointer bg-carbon-alphaLight transition-all flex justify-between items-center'>
                    <div className='ml-2.5 flex items-center'>
                        <p className='mr-3 font-iransans font-bold text-sm inline-block text-carbon-main'>همه {parentCat} ها</p>
                    </div>
                </div>    
            }
            {mainCat.map((cat,index)=>{
                
                return(
                    <div key={index} className='my-1 flex flex-col'>
                        <div onClick={()=>handler(cat.id)} className={clsx('box-border p-[0.1875rem] text-right  rounded-lg cursor-pointer flex justify-between items-center transition-all',cat.id==getSearch ? "bg-carbon-alphaLight" : "bg-transparent")}>
                            <div className='flex items-center'>
                            <img src={cat.logo} alt={cat.name} className='w-8 h-8' />
                            <p className={clsx('mr-3 font-iransans text-sm inline-block text-carbon-main',cat.id==getSearch && "font-bold")}>{cat.name}</p>
                        </div>
                            {cat.categoryId === 0 && <Image width={11} height={12} src={"/icons/resturants/left-side.svg"} className='ml-2.5 mr-[17px]'/>}
                        </div>
                    </div>
                )
            })}

            {/* <div className='my-1 flex flex-col'>
                <div className='box-border p-[0.1875rem] text-right bg-transparent rounded-lg cursor-pointer flex justify-between items-center transition-all'>
                    <div className='flex items-center'>
                        <img src="https://cdn.snappfood.ir/uploads/images/tags/website_image_fastfood_1.jpg" alt="فست‌فود" className='w-8 h-8' />
                        <p className='mr-3 font-iransans text-sm inline-block text-carbon-main'>فست‌فود</p>
                    </div>
                    <Image width={11} height={12} src={"/icons/resturants/left-side.svg"} className='ml-2.5 mr-[17px]'/>
                </div>
            </div> */}

        </div>
    </div>
  )
}

export default SideCategory