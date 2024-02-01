import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DownloadSection() {
  return (
    <section className='h-auto'>
        <div className='relative box-border py-16 px-2 rounded-br-none mt-10 bg-surface-dark flex laptop:rounded-br-[7.5rem] laptop:mt-[9.375rem] laptop:px-16'>
            <div className='max-w-full px-4 box-border flex flex-col laptop:max-w-[60%] laptop:pr-20 laptop:pl-24'>
                <p className='mb-10 leading-8 text-[2rem] text-carbon-main font-snapp font-bold inline-block'>اپلیکیشن اسنپ‌فود</p>
                <p className='mb-10 leading-8 text-sm text-carbon-light font-snapp inline-block'>با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.</p>
                <div className='mb-10 leading-8'>
                    <p className='text-xs text-carbon-light font-iransans font-bold inline-block'> برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید </p>
                    <form action=""  className='box-border mt-1.5 w-[35vw] min-w-[17.8125rem] max-w-[50%] h-12 overflow-hidden bg-white border border-carbon-alphaMedium rounded-md shadow-shadows-medium flex justify-between items-center'>
                        <div className='grow relative h-12 bg-white rounded-md box-border transition-[border] rtl '>
                            <input type="text" placeholder='*********۰۹' name='cellphone' className='p-3 rtl w-full h-full rounded-md text-carbon-main box-border outline-0'/>
                        </div>
                        <button type='submit' className='ml-2 flex justify-center items-center box-border min-w-[6.6875rem] h-8 bg-accent-main text-white transition-all border-border-sm border-accent-main bg-clip-padding font-iransans font-bold rounded-md text-sm hover:bg-accent-light '>دریافت لینک</button>
                    </form>
                </div>
                <div className='mb-10 leading-8 flex flex-wrap w-full desktop:w-[40.625rem] '>
                    <Link href={"/"} className='ml-4'>
                        <Image width={135} height={41} src={"/icons/home/download-myket.svg"}  alt="Download Myket" />
                    </Link>
                    <Link href={"/"} className='ml-4'>
                        <Image width={135} height={41} src={"/icons/home/download-bazaar.svg"}  alt="Download Bazaar" />
                    </Link>
                    <Link href={"/"} className='ml-4'>
                        <Image width={135} height={41} src={"/icons/home/download-sibapp.svg"}  alt="SibApp logo" />
                    </Link>
                    <div className='ml-4 relative inline-block'>
                        <Link href={"/"} className='w-full flex'>
                            <Image width={135} height={41} src={"/icons/home/download-iapps.svg"}  alt="Download iApps" />
                        </Link>
                        <div className='absolute top-[-0.7rem] left-[50%] w-[18.75rem] bg-white px-2 py-[0.35625rem] shadow-shadows-medium rounded-lg -translate-x-1/2 -translate-y-full invisible opacity-0 transition-all'></div>
                    </div>
                </div>
            </div>
            <Image width={424} height={636} src={"https://snappfood.ir/static/images/img_app_mockup@2x.png"} alt='home' className='hidden absolute left-[3.4375rem] -translate-y-[31%] overflow-clip laptop:block  '/>
        </div>
    </section>
  )
}

export default DownloadSection