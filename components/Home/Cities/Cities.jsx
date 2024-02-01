import { fetchData } from '@/libs/fetchData';
import Link from 'next/link';
import React from 'react'


async function Cities() {

  const { cities } = await fetchData();
  
  return (
    <section className='p-8 box-border w-full bg-white border-t-border-xs border-t-surface-dark'>
      <h2 className='mb-8 font-iransans font-bold text-base text-carbon-main'>اسنپ‌فود در شهرهای ایران</h2>
      <div className='box-border w-[calc(100%+0.5rem)] -m-1 flex flex-wrap'>
        {cities.map((city, index) => (
          <div key={index} className='cursor-pointer p-[0.1875rem] basis-1/3 max-w-[1/3] box-border tablet:basis-1/4 tablet:max-w-1/4 laptop:basis-1/6 laptop:max-w-1/6 desktop:basis-1/12 desktop:max-w-1/12'>
            <Link href={"/"} title={city}>
              <p className='font-iransans text-2xs leading-3 text-center text-inactive-dark inline-block'>{city}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Cities