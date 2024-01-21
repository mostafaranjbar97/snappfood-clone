import Image from 'next/image'
import React from 'react'

function SideFoodCategory() {
  return (
    <nav className='h-[30vh] rtl min-h-[9.375rem] overflow-y-auto flex flex-col laptop:h-[calc((100vh-180px)-152px)]'>
        <p className='mb-4 border-r-2 border-r-carbon-main py-0.5 px-3 text-sm cursor-pointer font-bold text-carbon-main font-iransans inline-block laptop:border-l-2 laptop:border-r-0 laptop:border-l-carbon-main'>
            <span className='relative flex items-center'>فود پارتی
                <Image width={20} height={20} src={"/icons/restaurant/foodparty.svg"} className='ml-2'/> 
            </span>
        </p>
        <p className='mb-4 py-0.5 px-3 text-sm cursor-pointer text-carbon-light font-iransans inline-block'>پر‌طرفدارها</p>
        <p className='mb-4 py-0.5 px-3 text-sm cursor-pointer text-carbon-light font-iransans inline-block'>تخفیف‌دارها</p>
        <p className='mb-4 py-0.5 px-3 text-sm cursor-pointer text-carbon-light font-iransans inline-block'>کمبو</p>
        <p className='mb-4 py-0.5 px-3 text-sm cursor-pointer text-carbon-light font-iransans inline-block'>پیتزا فیتکس</p>
        <p className='mb-4 py-0.5 px-3 text-sm cursor-pointer text-carbon-light font-iransans inline-block'>پیتزا </p>
        <p className='mb-4 py-0.5 px-3 text-sm cursor-pointer text-carbon-light font-iransans inline-block'>استرامبولی</p>
        <p className='mb-4 py-0.5 px-3 text-sm cursor-pointer text-carbon-light font-iransans inline-block'>ساندویچ</p>
        <p className='mb-4 py-0.5 px-3 text-sm cursor-pointer text-carbon-light font-iransans inline-block'>هات داگ</p>
        <p className='mb-4 py-0.5 px-3 text-sm cursor-pointer text-carbon-light font-iransans inline-block'>سوخاری</p>
        <p className='mb-4 py-0.5 px-3 text-sm cursor-pointer text-carbon-light font-iransans inline-block'>سالاد و پیش غذا</p>
        <p className='mb-4 py-0.5 px-3 text-sm cursor-pointer text-carbon-light font-iransans inline-block'>نوشیدنی</p>
    </nav>
  )
}

export default SideFoodCategory