import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchFoodItem from './SearchFoodItem'

function SearchByFood({searchProdouct,first2Prodouct,handleClose,restaurants}) {
  return (
    <div className='border-b border-b-surface-dark flex flex-col pb-5'>
        <div className='mt-[1.125rem] flex justify-between items-center'>
            <span className='mr-3 font-iransans text-sm text-carbon-main inline-block'>محصولات</span>
            <Link className='' href={"/"}>
                <div className='ml-3 flex items-center'>
                    <span className='ml-1 font-iransans text-sm text-accent2-main inline-block'>
                    مشاهده همه
                    ({searchProdouct.length})
                    </span>
                    <Image width={12} height={12} src={"/icons/modal/left.svg"} alt="left" />
                </div>
            </Link>
        </div>
        {
            first2Prodouct.map((prodouct,index)=>{
                return(
                    <SearchFoodItem  key={index} prodouct={prodouct} restaurants={restaurants} handleClose={handleClose}/>
                )
            })
        }
    </div>
  )
}

export default SearchByFood