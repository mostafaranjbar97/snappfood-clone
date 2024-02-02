import clsx from 'clsx'
import React, { useState } from 'react'

function SortComment() {

    const [sort,setSort]=useState(1);
    const sortHandler = (e)=>{
        e.target.tagName=="P" ? setSort(e.target.parentElement.id) : setSort(e.target.id)
      }

  return (
    <div className='flex items-center'>
        <span className='ml-2.5 font-iransans font-bold text-xs inline-block text-carbon-main'>به ترتیب</span>
        <div className='relative bg-carbon-alphaLight rounded-xl cursor-pointer flex items-center'>
            <div onClick={sortHandler} id='1' className={clsx('z-[2] w-[7.3125rem] p-2.5 flex justify-center items-center border-2 border-carbon-alphaLight rounded-xl ',sort==1 ? 'text-accent2-main bg-white' : 'text-carbon-main bg-transparent border-transparent')}>
                <p className='font-iransans text-sm inline-block '>جدیدترین</p>
            </div>
            <div onClick={sortHandler} id='2' className={clsx('z-[2] w-[7.3125rem] p-2.5 flex justify-center items-center border-2 border-carbon-alphaLight rounded-xl ',sort==2 ? 'text-accent2-main bg-white' : 'text-carbon-main  bg-transparent border-transparent')}>
                <p className='font-iransans text-sm inline-block '>مرتبط‌ترین</p>
            </div>
        </div>
    </div>
  )
}

export default SortComment