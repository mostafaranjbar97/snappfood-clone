import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategoryItem({data}) {
  return (
  <div className="basis-1/2 max-w-[50%] p-4 box-border tablet:basis-1/3 tablet:max-w-[1/3] laptop:basis-1/4 laptop:max-w-[1/4] desktop:basis-1/6 desktop:max-w-[1/6] ">
    <Link href={`/resturants/?cat=${data.id}`} className="bg-transparent">
      <div className="relative p-[0.1875rem] h-[5.9375rem] border border-white rounded-xl shadow-shadows-high cursor-pointer transition-all ease-in-out duration-200 flex bg-white hover:shadow-shadows-medium">
        <img src={data.img}  alt={data.name} className="rounded-xl w-full h-full object-cover" />
        <div className="absolute right-0 bottom-0 py-1 pr-4 pl-[0.8125rem] rounded-tl-xl rounded-br-xl bg-white flex items-center cursor-pointer transition-all ease-in-out duration-200 ">
          <p className="ml-[0.8125rem] font-iransans text-base text-carbon-main inline-block">{data.name}</p>
          <Image src={"/icons/home/left-purple.svg"} alt='left' width={7} height={11}  className="translate-x-0 transition-all ease-in-out duration-200 hover:-translate-x-0.5" />
        </div>
      </div>
    </Link>
  </div>
  )
}

export default CategoryItem