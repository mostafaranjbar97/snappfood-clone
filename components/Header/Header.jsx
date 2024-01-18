import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='sticky transition-all duration-300 translate-y-0 top-0 right-0 left-0 z-[999] w-full flex flex-col'>
        <header className='w-full bg-white shadow-shadows-small flex flex-col'>
            <div className='relative animate-[auto_ease_0s_1_normal_none_running_none_!important] w-full top-0 right-0 left-0 bg-white box-border h-[4.5rem] p-4 flex justify-between items-center'>
                <div className='flex items-center'>
                    <Link href={"/"} className='ml-10 hidden tablet:block' >
                        <Image width={68} height={34} src={"/icons/header/snappfood-logo.svg"} className='outline-none'/>
                    </Link>
                    <div className='h-10 p-1 cursor-pointer flex items-center'>
                        <Image width={12} height={14} src={"/icons/header/location.svg"} className='ml-2.5'/>
                        <div className='ml-2.5 flex flex-col'>
                            <p className='font-iransans font-bold text-sm inline-block text-carbon-main'></p>
                            <div className='flex justify-center '>
                                <span className='font-iransans min-w-[29vw] max-w-[29vw] pt-0.5 overflow-hidden text-ellipsis opacity-60 whitespace-nowrap font-normal text-2xs leading-3 inline-block text-carbon-main tablet:max-w-[calc(57vw-85px)] laptop:min-w-[9.375rem] laptop:max-w-[calc(24vw-85px)]'>تهران، دانشگاه تهران، کارگر شمالی، امین</span>
                                <Image width={12} height={9} src={"/icons/header/bottom-purple.svg"} className='mt-1 mr-[0.6rem] '/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[10.5625rem] bg-white absolute left-0 h-12 p-4 m-auto rounded-xlg box-border flex items-center laptop:right-0 laptop:w-[29vw] laptop:bg-surface-dark '>
                    <Image width={17} height={17} src={"/icons/header/search.svg"} className='ml-2'/>
                    <p className='ml-2 font-iransans font-normal text-base hidden text-inactive-dark laptop:inline-block'>جست‌وجو در اسنپ‌فود</p>
                </div>
                <div className='z-[999] flex items-center'>
                    <div className='p-4 cursor-pointer select-none flex laptop:ml-[0.5625rem]'>
                        <Image width={20} height={20} src={"/icons/header/user.svg"} className='ml-2'/>
                    </div>
                    <div className='relative w-0 h-0 laptop:ml-[0.5625rem]'></div>
                    <div className='mr-4 relative cursor-pointer select-none flex laptop:ml-[0.5625rem]'>
                        <Image width={20} height={20} src={"/icons/header/order.svg"} className='ml-2'/>
                        <p className='hidden ml-2 font-iransans font-bold text-carbon-main text-sm laptop:inline-block'>سفارش‌ها</p>
                    </div>
                </div>
            </div>
            <nav className='mt-4 overflow-x-auto flex'>

                <Link className='grow' href={"/"} title='رستوران' >
                    <div className='min-w-[5.5rem] pb-4 cursor-pointer flex justify-center items-center flex-col'>
                        <img src="https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_1_603508bf202d8_img_st_food.png" alt="رستوران" className='mb-4 w-10 h-10' />
                        <span className='font-iransans text-xs text-carbon-light inline-block'>رستوران</span>
                    </div>
                </Link>

                <Link className='grow' href={"/"} title='رستوران' >
                    <div className='min-w-[5.5rem] pb-4 cursor-pointer flex justify-center items-center flex-col'>
                        <img src="https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_1_603508bf202d8_img_st_food.png" alt="رستوران" className='mb-4 w-10 h-10' />
                        <span className='font-iransans text-xs text-carbon-light inline-block'>رستوران</span>
                    </div>
                </Link>

                <Link className='grow' href={"/"} title='رستوران' >
                    <div className='min-w-[5.5rem] pb-4 cursor-pointer flex justify-center items-center flex-col'>
                        <img src="https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_1_603508bf202d8_img_st_food.png" alt="رستوران" className='mb-4 w-10 h-10' />
                        <span className='font-iransans text-xs text-carbon-light inline-block'>رستوران</span>
                    </div>
                </Link>

                <Link className='grow' href={"/"} title='رستوران' >
                    <div className='min-w-[5.5rem] pb-4 cursor-pointer flex justify-center items-center flex-col'>
                        <img src="https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_1_603508bf202d8_img_st_food.png" alt="رستوران" className='mb-4 w-10 h-10' />
                        <span className='font-iransans text-xs text-carbon-light inline-block'>رستوران</span>
                    </div>
                </Link>

                <Link className='grow' href={"/"} title='رستوران' >
                    <div className='min-w-[5.5rem] pb-4 cursor-pointer flex justify-center items-center flex-col'>
                        <img src="https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_1_603508bf202d8_img_st_food.png" alt="رستوران" className='mb-4 w-10 h-10' />
                        <span className='font-iransans text-xs text-carbon-light inline-block'>رستوران</span>
                    </div>
                </Link>

                <Link className='grow' href={"/"} title='رستوران' >
                    <div className='min-w-[5.5rem] pb-4 cursor-pointer flex justify-center items-center flex-col'>
                        <img src="https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_1_603508bf202d8_img_st_food.png" alt="رستوران" className='mb-4 w-10 h-10' />
                        <span className='font-iransans text-xs text-carbon-light inline-block'>رستوران</span>
                    </div>
                </Link>

                <Link className='grow' href={"/"} title='رستوران' >
                    <div className='min-w-[5.5rem] pb-4 cursor-pointer flex justify-center items-center flex-col'>
                        <img src="https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_1_603508bf202d8_img_st_food.png" alt="رستوران" className='mb-4 w-10 h-10' />
                        <span className='font-iransans text-xs text-carbon-light inline-block'>رستوران</span>
                    </div>
                </Link>

                <Link className='grow' href={"/"} title='رستوران' >
                    <div className='min-w-[5.5rem] pb-4 cursor-pointer flex justify-center items-center flex-col'>
                        <img src="https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_1_603508bf202d8_img_st_food.png" alt="رستوران" className='mb-4 w-10 h-10' />
                        <span className='font-iransans text-xs text-carbon-light inline-block'>رستوران</span>
                    </div>
                </Link>

                <Link className='grow' href={"/"} title='رستوران' >
                    <div className='min-w-[5.5rem] pb-4 cursor-pointer flex justify-center items-center flex-col'>
                        <img src="https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_1_603508bf202d8_img_st_food.png" alt="رستوران" className='mb-4 w-10 h-10' />
                        <span className='font-iransans text-xs text-carbon-light inline-block'>رستوران</span>
                    </div>
                </Link>

                <Link className='grow' href={"/"} title='رستوران' >
                    <div className='min-w-[5.5rem] pb-4 cursor-pointer flex justify-center items-center flex-col'>
                        <img src="https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_1_603508bf202d8_img_st_food.png" alt="رستوران" className='mb-4 w-10 h-10' />
                        <span className='font-iransans text-xs text-carbon-light inline-block'>رستوران</span>
                    </div>
                </Link>
                
            </nav>
        </header>
    </div>
  )
}

export default Header