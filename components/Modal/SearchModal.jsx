import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SearchModal() {
  return (
    <div>
        <div className='flex justify-center items-center fixed inset-0 z-[1000] animate-[0.3s_ease_0s_1_normal_forwards_running_modal-animation]'>
            <div className='fixed top-0 flex justify-center w-[31vw] min-w-[18.75rem] m-auto py-3 rounded-t-none rounded-xl max-h-[90vh] overflow-hidden animate-[0.3s_cubic-bezier(0.4,0,0,1.5)_0s_1_normal_forwards_running_modal-animation3]'>
                <div className='w-[95%] flex flex-col'>
                    <div className='relative w-full'>
                        <Image width={18} height={18} src={"/icons/modal/exit-search.svg"} className='absolute top-0 right-4 bottom-0 m-auto cursor-pointer'/>
                        <input type="text" className='w-full box-border h-12 text-carbon-main rounded-xlg font-iransans text-base py-3 pr-10 pl-3 border-border-xs border-carbon-alphaHigh focus:border focus:border-carbon-main'/>
                    </div>

                    <div className='mt-1 overflow-auto bg-white rounded-md flex flex-col'>

                        <div className='py-3.5 pr-5 pl-[1.125rem] cursor-pointer flex justify-between items-center'>
                            <div className='flex'>
                            <Image width={18} height={17} src={"/icons/modal/past-time-black.png"} className='ml-[1.125rem] '/>
                            <p className='font-iransans text-sm inline-block text-carbon-main'>پیتز</p>   
                            </div>
                            <button className='flex justify-center items-center transition-all border-transparent box-border w-8 h-8 rounded-[50%] bg-transparent bg-clip-padding border-border-sm hover:bg-accent-alphaLight hover:border-accent-alphaLight active:bg-accent-alphaMedium active:border-accent-alphaMedium'>
                                <Image width={12} height={14} src={"/icons/modal/exit.svg"} />
                            </button>
                        </div>

                        <div className='py-3.5 pr-5 pl-[1.125rem] cursor-pointer flex justify-between items-center'>
                            <div className='flex'>
                            <Image width={18} height={17} src={"/icons/modal/past-time-black.png"} className='ml-[1.125rem] '/>
                            <p className='font-iransans text-sm inline-block text-carbon-main'>پیتز</p>   
                            </div>
                            <button className='flex justify-center items-center transition-all border-transparent box-border w-8 h-8 rounded-[50%] bg-transparent bg-clip-padding border-border-sm hover:bg-accent-alphaLight hover:border-accent-alphaLight active:bg-accent-alphaMedium active:border-accent-alphaMedium'>
                                <Image width={12} height={14} src={"/icons/modal/exit.svg"} />
                            </button>
                        </div>

                        <div className='py-3.5 pr-5 pl-[1.125rem] cursor-pointer flex justify-between items-center'>
                            <div className='flex'>
                            <Image width={18} height={17} src={"/icons/modal/past-time-black.png"} className='ml-[1.125rem] '/>
                            <p className='font-iransans text-sm inline-block text-carbon-main'>پیتز</p>   
                            </div>
                            <button className='flex justify-center items-center transition-all border-transparent box-border w-8 h-8 rounded-[50%] bg-transparent bg-clip-padding border-border-sm hover:bg-accent-alphaLight hover:border-accent-alphaLight active:bg-accent-alphaMedium active:border-accent-alphaMedium'>
                                <Image width={12} height={14} src={"/icons/modal/exit.svg"} />
                            </button>
                        </div>

                        <div className='py-3.5 pr-5 pl-[1.125rem] cursor-pointer flex justify-between items-center'>
                            <div className='flex'>
                            <Image width={18} height={17} src={"/icons/modal/past-time-black.png"} className='ml-[1.125rem] '/>
                            <p className='font-iransans text-sm inline-block text-carbon-main'>پیتز</p>   
                            </div>
                            <button className='flex justify-center items-center transition-all border-transparent box-border w-8 h-8 rounded-[50%] bg-transparent bg-clip-padding border-border-sm hover:bg-accent-alphaLight hover:border-accent-alphaLight active:bg-accent-alphaMedium active:border-accent-alphaMedium'>
                                <Image width={12} height={14} src={"/icons/modal/exit.svg"} />
                            </button>
                        </div>

                        <div className='py-3.5 pr-5 pl-[1.125rem] cursor-pointer flex justify-between items-center'>
                            <div className='flex'>
                            <Image width={18} height={17} src={"/icons/modal/past-time-black.png"} className='ml-[1.125rem] '/>
                            <p className='font-iransans text-sm inline-block text-carbon-main'>پیتز</p>   
                            </div>
                            <button className='flex justify-center items-center transition-all border-transparent box-border w-8 h-8 rounded-[50%] bg-transparent bg-clip-padding border-border-sm hover:bg-accent-alphaLight hover:border-accent-alphaLight active:bg-accent-alphaMedium active:border-accent-alphaMedium'>
                                <Image width={12} height={14} src={"/icons/modal/exit.svg"} />
                            </button>
                        </div>

                        <div className='border-b border-b-surface-dark flex flex-col'>
                            <Link className='' href={"/"}>
                                <div className='box-border p-5 flex items-center'>
                                    <Image width={24} height={22} src={"/icons/modal/search-category.svg"} className='ml-4'/>
                                    <div>
                                        <span className='font-iransans text-sm text-carbon-light inline-block'>دسته‌بندی
                                            <p className='font-iransans font-bold text-sm text-carbon-main inline-block'>پیتزا</p>
                                        </span>
                                    </div>
                                </div>
                            </Link> 
                        </div>

                        <div className='border-b border-b-surface-dark flex flex-col'>
                            <div className='mt-[1.125rem] flex justify-between items-center'>
                                <span className='mr-3 font-iransans text-sm text-carbon-main inline-block'>فروشگاه‌ها</span>
                                <Link className='' href={"/"}>
                                    <div className='ml-3 flex items-center'>
                                        <span className='ml-1 font-iransans text-sm text-accent2-main inline-block'>
                                        مشاهده همه
                                        (۵۵)
                                        </span>
                                        <Image width={12} height={12} src={"/icons/modal/left.svg"} />
                                    </div>
                                </Link>
                            </div>
                            
                            <Link href={"/"}>
                                <div className='p-5 box-border flex items-center'>
                                    <Image width={24} height={18} src={"/icons/modal/shop.svg"} className='ml-4'/>
                                    <div>
                                        <span className='font-iransans text-sm text-carbon-main inline-block'>پیتزا شیلا (چهارراه ولیعصر)</span>
                                    </div>
                                </div>
                            </Link>

                            <Link href={"/"}>
                                <div className='p-5 box-border flex items-center'>
                                    <Image width={24} height={18} src={"/icons/modal/shop.svg"} className='ml-4'/>
                                    <div>
                                        <span className='font-iransans text-sm text-carbon-main inline-block'>پیتزا شیلا (چهارراه ولیعصر)</span>
                                    </div>
                                </div>
                            </Link>

                            <Link href={"/"}>
                                <div className='p-5 box-border flex items-center'>
                                    <Image width={24} height={18} src={"/icons/modal/shop.svg"} className='ml-4'/>
                                    <div>
                                        <span className='font-iransans text-sm text-carbon-main inline-block'>پیتزا شیلا (چهارراه ولیعصر)</span>
                                    </div>
                                </div>
                            </Link>

                            <Link href={"/"}>
                                <div className='p-5 box-border flex items-center'>
                                    <Image width={24} height={18} src={"/icons/modal/shop.svg"} className='ml-4'/>
                                    <div>
                                        <span className='font-iransans text-sm text-carbon-main inline-block'>پیتزا شیلا (چهارراه ولیعصر)</span>
                                    </div>
                                </div>
                            </Link>

                            <Link href={"/"}>
                                <div className='p-5 box-border flex items-center'>
                                    <Image width={24} height={18} src={"/icons/modal/shop.svg"} className='ml-4'/>
                                    <div>
                                        <span className='font-iransans text-sm text-carbon-main inline-block'>پیتزا شیلا (چهارراه ولیعصر)</span>
                                    </div>
                                </div>
                            </Link>

                        </div>

                        <div className='border-b border-b-surface-dark flex flex-col pb-5'>
                            <div className='mt-[1.125rem] flex justify-between items-center'>
                                <span className='mr-3 font-iransans text-sm text-carbon-main inline-block'>محصولات</span>
                                <Link className='' href={"/"}>
                                    <div className='ml-3 flex items-center'>
                                        <span className='ml-1 font-iransans text-sm text-accent2-main inline-block'>
                                        مشاهده همه
                                        (۹۱۱)
                                        </span>
                                        <Image width={12} height={12} src={"/icons/modal/left.svg"} />
                                    </div>
                                </Link>
                            </div>

                            <Link href={"/"}>
                                <div className='box-border p-5 flex items-start flex-col border-b border-b-surface-dark'>
                                    <div className='flex'>
                                        <Image width={56} height={56} src={"https://cdn.snappfood.ir/200x201/cdn/93/50/product_image/zoodfood/64d2458aa8987.jpg"} alt="" className='ml-4 rounded'/>
                                        <div className='flex flex-col'>
                                            <span className='font-iransans font-bold text-xs text-carbon-main inline-block'>پیتزا کویین (۲۳ سانتی‌ متری)</span>
                                            <span className='font-iransans text-xs text-gray5-color inline-block mt-3'>پیتزا پرپروک (گیشا)</span>
                                        </div>
                                    </div>
                                    <div className='w-full mt-3 flex justify-between '>
                                        <div className='flex items-center'>
                                            <p className='font-iransans text-xs text-carbon-light inline-block mx-1'>پیک فروشنده</p>
                                            <div className=' flex flex-col'>
                                                <div className='flex items-center'>
                                                    <div className='flex items-start flex-col'>
                                                    <span className=' text-carbon-main font-iransans text-xs inline-block'>  ۱۲,۴۰۰  
                                                        <span className=' text-carbon-light font-iransans text-xs inline-block'>تومان</span>
                                                    </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='flex'>
                                                <span className='pt-1.5 pb-0.5 leading-[0.625rem] text-sm flex justify-center items-center grow  px-1 rounded m-1 bg-accent-alphaLight font-iransans font-bold text-accent-main '>
                                                    ۲۰
                                                    <span className='mr-1'>
                                                        <Image width={8} height={10} src={"/icons/modal/percent.svg"}/>
                                                    </span>
                                                </span>
                                                <div className='flex items-center'>
                                                    <s className='mx-1 font-iransans inline-block text-xs text-inactive-dark'>۲۴۲,۰۰۰</s>
                                                    <span className='font-iransans font-bold inline-block text-base text-carbon-main'> ۱۹۳,۶۰۰ 
                                                        <span className='font-iransans font-normal inline-block text-xs text-carbon-light'>تومان</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link href={"/"}>
                                <div className='box-border p-5 flex items-start flex-col border-b border-b-surface-dark'>
                                    <div className='flex'>
                                        <Image width={56} height={56} src={"https://cdn.snappfood.ir/200x201/cdn/93/50/product_image/zoodfood/64d2458aa8987.jpg"} alt="" className='ml-4 rounded'/>
                                        <div className='flex flex-col'>
                                            <span className='font-iransans font-bold text-xs text-carbon-main inline-block'>پیتزا کویین (۲۳ سانتی‌ متری)</span>
                                            <span className='font-iransans text-xs text-gray5-color inline-block mt-3'>پیتزا پرپروک (گیشا)</span>
                                        </div>
                                    </div>
                                    <div className='w-full mt-3 flex justify-between '>
                                        <div className='flex items-center'>
                                            <p className='font-iransans text-xs text-carbon-light inline-block mx-1'>پیک فروشنده</p>
                                            <div className=' flex flex-col'>
                                                <div className='flex items-center'>
                                                    <div className='flex items-start flex-col'>
                                                    <span className=' text-carbon-main font-iransans text-xs inline-block'>  ۱۲,۴۰۰  
                                                        <span className=' text-carbon-light font-iransans text-xs inline-block'>تومان</span>
                                                    </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='flex'>
                                                <span className='pt-1.5 pb-0.5 leading-[0.625rem] text-sm flex justify-center items-center grow  px-1 rounded m-1 bg-accent-alphaLight font-iransans font-bold text-accent-main '>
                                                    ۲۰
                                                    <span className='mr-1'>
                                                        <Image width={8} height={10} src={"/icons/modal/percent.svg"}/>
                                                    </span>
                                                </span>
                                                <div className='flex items-center'>
                                                    <s className='mx-1 font-iransans inline-block text-xs text-inactive-dark'>۲۴۲,۰۰۰</s>
                                                    <span className='font-iransans font-bold inline-block text-base text-carbon-main'> ۱۹۳,۶۰۰ 
                                                        <span className='font-iransans font-normal inline-block text-xs text-carbon-light'>تومان</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    
  )
}

export default SearchModal