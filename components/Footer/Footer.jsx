import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const SOCIAL = ["twitter", "telegram", "linkedin", "instagram", "aparat"]

function Footer() {
    return (
        <footer className='box-border w-full p-12 bg-surface-main'>
            <button className='group fixed right-4 bottom-4 z-10 rotate-[360deg] transition-transform duration-300 ease-in flex justify-center items-center box-border w-12 h-12 rounded-[50%]  bg-accent-main bg-clip-padding  border-border-sm border-accent-alphaLight shadow-shadows-medium hover:bg-accent-light focus:bg-surface-main focus:z-[1001] active:bg-surface-main active:z-[1001]'>
                <Image width={24} height={24} src={"/icons/footer/support.svg"} className='overflow-hidden group-focus:hidden' />
                <Image width={14} height={14} src={"/icons/footer/exit-support.svg"} className='overflow-hidden hidden group-focus:block ' />
            </button>

            <div className='flex flex-wrap box-border w-[calc(100%+5rem)] -m-10'>
                <div className='p-10 grow'>
                    <div className='flex items-center'>
                        <Link href={"/"} >
                            <Image width={81.65} height={41.73} src={"/icons/footer/logo.svg"} />
                        </Link>
                        <div className='mr-6 flex flex-col'>
                            <p className='mb-1 font-snapp font-bold text-lg text-accent-main'>اسنپ‌فود</p>
                            <p className='font-iransans text-xs text-carbon-light '>تجربه سفارش غذا، از زودفود تا اسنپ‌فود</p>
                        </div>
                    </div>
                    <div className='mt-8 flex'>
                        <Image width={81.65} height={41.73} src={"/icons/footer/nothing.svg"} className='invisible' />
                        <div className='mr-6 box-border flex -m-2 flex-wrap w-[calc(100%+5rem)] '>
                            {SOCIAL.map((item, index) => {
                                return (<div className='box-border p-2 ' key={index}>
                                    <Link href={"/"} >
                                        <button className='flex justify-center items-center cursor-pointer transition-all box-border w-10 h-10 rounded-[50%] shadow-shadows-medium bg-clip-padding border-border-sm border-accent-alphaLight bg-surface-main hover:bg-white'>
                                            <Image width={20} height={20} src={`/icons/footer/${item}.svg`} />
                                        </button>
                                    </Link>
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
                <div className='p-10 grow'>
                    <div className='flex flex-col'>
                        <Link href={"/"} className='m-2'>
                            <p className='font-iransans text-xs text-carbon-main'>درباره اسنپ‌فود</p>
                        </Link>
                        <Link href={"/"} className='m-2'>
                            <p className='font-iransans text-xs text-carbon-main'>فرصت‌های شغلی</p>
                        </Link>
                        <Link href={"/"} className='m-2'>
                            <p className='font-iransans text-xs text-carbon-main'>وبلاگ</p>
                        </Link>
                        <Link href={"/"} className='m-2'>
                            <p className='font-iransans text-xs text-carbon-main'>قوانین سایت</p>
                        </Link>
                        <Link href={"/"} className='m-2'>
                            <p className='font-iransans text-xs text-carbon-main'>حریم خصوصی</p>
                        </Link>
                        <Link href={"/"} className='m-2'>
                            <p className='font-iransans text-xs text-carbon-main'>ثبت نام فروشندگان</p>
                        </Link>
                    </div>
                </div>
                <div className='p-10 grow'>
                    <div className='flex flex-col'>
                        <Link href={"/"} className='m-2'>
                            <p className='font-iransans text-xs text-carbon-main'>تماس با اسنپ‌فود</p>
                        </Link>
                        <Link href={"/"} className='m-2'>
                            <p className='font-iransans text-xs text-carbon-main'>پرسش‌های متداول</p>
                        </Link>
                        <Link href={"/"} className='m-2'>
                            <p className='font-iransans text-xs text-carbon-main'>ثبت شکایات</p>
                        </Link>
                        <Link href={"/"} className='m-2'>
                            <p className='font-iransans text-xs text-carbon-main'>اپلیکیشن موبایل</p>
                        </Link>
                    </div>
                </div>
                <div className='p-10 grow ltr box-border'>
                    <img src="/icons/footer/senf.png" alt="senf" className='max-w-[125px]' />
                </div>
            </div>
        </footer>
    )
}

export default Footer