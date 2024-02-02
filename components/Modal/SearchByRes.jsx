import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SearchByRes({searchRestaurant,first5Restaurant,handleClose}) {
  return (
    <div className='border-b border-b-surface-dark flex flex-col'>
        <div className='mt-[1.125rem] flex justify-between items-center'>
            <span className='mr-3 font-iransans text-sm text-carbon-main inline-block'>فروشگاه‌ها</span>
            <Link className='' href={"/"}>
                <div className='ml-3 flex items-center'>
                    <span className='ml-1 font-iransans text-sm text-accent2-main inline-block'>
                    مشاهده همه
                    ({searchRestaurant.length})
                    </span>
                    <Image width={12} height={12} src={"/icons/modal/left.svg"}  alt="back" />
                </div>
            </Link>
        </div>
        {
            first5Restaurant.map((res,index)=>{
                return(
                    <Link key={index} href={`/resturants/${res.id}`} onClick={handleClose}>
                        <div className='p-5 box-border flex items-center'>
                            <Image width={24} height={18} src={"/icons/modal/shop.svg"} alt="shop" className='ml-4'/>
                            <div>
                                <span className='font-iransans text-sm text-carbon-main inline-block'>{res.name}</span>
                            </div>
                        </div>
                    </Link>
                )
            })
        }

    </div>
  )
}

export default SearchByRes