'use client'
import { showSearchModal } from '@/redux/features/SearchModal'
import Image from 'next/image'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Search({restaurants}) {
    const pathname=usePathname();
    const params=useParams()

    const {searchTerm}=useSelector((store)=>store.searchModal)
    
    let searchIn

    params.restaurant && (searchIn=restaurants[params.restaurant-1].name)
    pathname=="/" && (searchIn = "اسنپ‌فود")
    pathname=="/resturants" && (searchIn="رستوران")


    const dispatch=useDispatch()
    const openHandler=()=>{
      dispatch(showSearchModal())
    }

  return (
    <div onClick={openHandler} className='w-[10.5625rem] bg-white absolute left-0 h-12 p-4 m-auto rounded-xlg box-border flex items-center laptop:right-0 laptop:w-[29vw] laptop:bg-surface-dark '>
        <Image width={18} height={18} src={"/icons/header/search.svg"} alt='search' className='ml-2'/>
        {searchTerm ?  <p className='ml-2 font-iransans font-normal text-base hidden text-inactive-dark laptop:inline-block'>{searchTerm}</p>
        :
         <p className='ml-2 font-iransans font-normal text-base hidden text-inactive-dark laptop:inline-block'>جست‌وجو در {searchIn}</p>}
        
    </div>
  )
}

export default Search