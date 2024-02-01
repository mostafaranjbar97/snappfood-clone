import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function VendorRegister() {
  return (
    <section className='h-auto'>
        <div className='mt-[10.0625rem] p-12 bg-surface-main rounded-[2rem] flex'>
            <div className='grow flex flex-col  ' >
                <p className='text-[2rem] mb-10 font-snapp font-bold leading-8 inline-block text-carbon-main'>صاحب کسب و کار هستید؟</p>
                <p className='mb-10 font-snapp text-lg font-normal inline-block text-carbon-main'>با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.</p>
                <Link href={"/"} className='mb-10 '>
                    <button className='flex justify-center items-center box-border min-w-[6.6875rem] w-auto h-12 rounded-md bg-accent-main cursor-pointer bg-clip-padding transition-all border-border-sm border-accent-main hover:bg-accent-light hover:border-accent-light'>
                        <Image width={24} height={26} src={"/icons/home/shop.svg"}  alt="shop" />
                        <span className='font-iransans font-bold text-lg inline-block text-white mr-2'>ثبت نام فروشندگان</span>
                    </button>
                </Link>
            </div>
            <div className='hidden grow laptop:flex laptop:flex-col laptop:items-end'>
                <img src="https://snappfood.ir/static/images/vendor_pic.png" alt="shop" className='-mt-[8.75rem] mb-10' />
            </div>
        </div>
    </section>
  )
}

export default VendorRegister