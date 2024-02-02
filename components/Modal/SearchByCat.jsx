import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SearchByCat({searchCategory,handleClose}) {
  return (
    <div className='border-b border-b-surface-dark flex flex-col'>
        {
            searchCategory.map((cat,index)=>{
                return(
                    <Link key={index} className='' href={`/resturants/?cat=${cat.id}`} onClick={handleClose}>
                        <div className='box-border p-5 flex items-center'>
                            <Image width={24} height={22} src={"/icons/modal/search-category.svg"} alt="search" className='ml-4'/>
                            <div>
                                <span className='font-iransans text-sm text-carbon-light inline-block'>دسته‌بندی
                                    <p className='font-iransans font-bold text-sm text-carbon-main inline-block mr-1'>{cat.name}</p>
                                </span>
                            </div>
                        </div>
                    </Link> 
                )
            })
        }
    </div>
  )
}

export default SearchByCat