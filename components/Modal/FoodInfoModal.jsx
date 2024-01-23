import Image from 'next/image'
import React from 'react'
import CommentItem from './CommentItem'

function FoodInfoModal() {
  return (
    <div>
        <div className='flex justify-center items-center fixed inset-0 z-[1000] animate-[0.3s_ease_0s_1_normal_forwards_running_modal-animation]'>
        <div className=' bg-white shadow-shadows-modal rounded-xl max-h-[90vh] overflow-hidden animate-[0.3s_cubic-bezier(0.4,0,0,1.5)_0s_1_normal_forwards_running_modal-animation4]'>
            <div className='relative box-border w-full h-14 pl-14 flex justify-between items-center'>
                <button className='w-14 h-14 flex justify-center items-center'>
                    <Image width={14} height={14} src={"/icons/modal/exit-modal.svg"}/>
                </button>
                <p className='font-bold font-iransans text-sm inline-block text-carbon-main'></p>
                <div></div>
            </div>
            <div className='w-[35vw] min-w-[20rem] max-w-[45rem] max-h-[calc(90vh-4rem)] overflow-y-scroll flex flex-col laptop:w-[90vw]'>
                <div className='px-4 pb-4 flex justify-between flex-col laptop:flex-row'>
                    <div className='max-w-[17.5rem]'>
                        <Image alt='فرش برگر' width={280} height={280} src={"https://cdn.snappfood.ir/641x641/cdn/27/89/4/product_image/zoodfood/64d75c3b48028.jpg"} className='rounded-lg '/>
                        <div className='flex flex-wrap'>
                            <div className='mt-1.5 ml-2 cursor-pointer'>
                                <Image alt='فرش برگر' width={40} height={40} src={"https://cdn.snappfood.ir/641x641/cdn/27/89/4/product_image/zoodfood/64d75c3b48028.jpg"} className='rounded-lg opacity-100' />
                            </div>
                            <div className='mt-1.5 ml-2 cursor-pointer'>
                                <Image alt='فرش برگر' width={40} height={40} src={"https://cdn.snappfood.ir/641x641/cdn/27/89/4/product_image/zoodfood/64d75c3b48028.jpg"} className='rounded-lg opacity-70' />
                            </div>
                            <div className='mt-1.5 ml-2 cursor-pointer'>
                                <Image alt='فرش برگر' width={40} height={40} src={"https://cdn.snappfood.ir/641x641/cdn/27/89/4/product_image/zoodfood/64d75c3b48028.jpg"} className='rounded-lg opacity-70' />
                            </div>
                        </div>
                    </div>
                    <div className='w-auto flex justify-start flex-col laptop:w-[24rem]'>

                        <div className='mb-4 flex justify-between items-center'>
                            <p className='font-bold font-iransans text-lg inline-block text-carbon-main w-80'>فرش برگر</p>
                            <span className='border-border-xs border-surface-dark py-0.5 px-1.5 rounded flex flex-wrap'>
                                <Image width={12} height={12} src={"/icons/modal/rate-star.svg"} className='ml-1 align-middle'/>
                                <span className='font-bold font-iransans text-xs inline-block text-carbon-main'>۴.۶</span>
                            </span>
                        </div>

                        <div className='mb-10 flex'>
                            <p className='font-iransans text-sm inline-block text-carbon-main'>همبرگر با گوشت تازه، گوجه، خیارشور، کاهو، سس مخصوص</p>
                        </div>

                        <div className='flex flex-col'>
                            <div className=' w-full min-h-[3.5625rem] transition-all duration-300 flex justify-between items-center hover:bg-surface-main group'>
                                <div className='flex items-start flex-col'>
                                    <div className='flex flex-col'>
                                        <div className='flex'>
                                            <span className='flex items-center justify-center grow py-0.5 px-1 rounded bg-accent-alphaLight m-1 font-iransans font-bold text-xs text-accent-main'>۱۰
                                                <span className='mr-1'>
                                                    <Image width={8} height={10} src={"/icons/restaurant/percent.svg"} />
                                                </span>
                                            </span>
                                            <div className='flex items-start flex-col '>
                                                <s className='font-iransans text-xs inline-block text-inactive-dark'>۲۵۲,۰۰۰</s>
                                                <span className='font-iransans font-bold text-sm inline-block text-carbon-main'> ۲۲۶,۸۰۰ 
                                                    <span className='font-iransans text-sm inline-block text-carbon-main'>تومان</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center flex-col'>
                                    <button className='h-[2.3125rem] text-sm flex justify-center items-center cursor-pointer box-border transition-all min-w-[6.6875rem] border-border-sm border-accent-alphaLight rounded-[3rem] bg-white bg-clip-padding font-iransans shadow-shadows-medium text-accent-main group-hover:text-white group-hover:bg-accent-main  group-active:bg-accent-dark group-active:text-white'>افزودن</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='p-4 flex justify-between'>
                    <p className='font-iransans font-bold text-base inline-block text-carbon-light'>نظرات کاربران</p>
                </div>

                <div className='flex flex-col'>
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                </div>
            </div>

            
        </div>
        </div>
    </div>
  )
}

export default FoodInfoModal