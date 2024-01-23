import Image from 'next/image'
import React from 'react'

function SideVendorInfo() {
  return (
    <section>
        <header className='flex items-center pb-6 '>
            <div className='ml-3 relative size-[5.5rem] min-w-[5.5rem] bg-white rounded-xl shadow-shadows-high flex justify-center items-center'>
                <img src="https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/5e425b0493bab.jpg" width={80} height={80} alt="پیتزا شیلا (میدان انقلاب)"  className='border border-carbon-alphaLight rounded-xl '/>
            </div>
            <div className='w-[70%] flex flex-col '>
                <div className='flex justify-between items-center'>
                    <div className=''>
                        <div className='ml-2 flex flex-wrap'>
                            <span className='ml-2 flex'>
                                <Image width={12} height={12} src={"/icons/home/rate-star.svg"} className='ml-1 align-middle'/>
                                <span className='font-iransans inline-block font-bold text-carbon-main text-xs'>۴.۷</span>
                            </span>
                            <p className='font-iransans text-xs text-inactive-dark inline-block'>(۶۳,۳۷۰ امتیاز)</p>
                        </div>
                    </div>
                    <span className='shrink-0 py-1 px-3 bg-white border border-carbon-alphaLight shadow-shadows-medium font-iransans inline-block text-sm text-accent-dark rounded-[2.5rem]'>۱۰
                        <span className='ml-[0.0625rem] font-iransans inline-block text-xs text-accent-main'>%</span>
                    </span>
                </div>
                <h1 className='mt-3.5 overflow-hidden text-ellipsis whitespace-nowrap font-bold text-lg inline-block text-carbon-main'>پیتزا شیلا (میدان انقلاب)</h1>
            </div>
        </header>
        <div className='flex flex-wrap items-center mb-6'>
            <button className='mt-2.5 flex justify-center items-center box-border transition-all min-w-[6.6875rem] w-full h-10 border-border-sm border-accent2-alphaLight rounded-[3rem] bg-white bg-clip-padding shadow-shadows-medium desktop:mt-0 text-accent2-main hover:text-accent2-dark active:text-accent2-dark active:bg-accent2-alphaMedium'>
                <Image width={17} height={17} src={"/icons/restaurant/info.svg"}/>
                <p className='inline-block font-iransans text-sm  mr-2'>اطلاعات و نظرات</p>
            </button>
        </div>
    </section>
  )
}

export default SideVendorInfo