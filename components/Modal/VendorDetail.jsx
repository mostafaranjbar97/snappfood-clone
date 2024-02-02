'use state'
import Image from 'next/image'
import React, { useState } from 'react'
import CommentItem from './CommentItem'
import clsx from 'clsx';

function VendorDetail({restaurant}) {
    const [sort,setSort]=useState(1);
    const sortHandler = (e)=>{
        e.target.tagName=="P" ? setSort(e.target.parentElement.id) : setSort(e.target.id)
      }
  return (
    <div className='h-[calc(90vh-16rem)] overflow-y-auto'>
        <div className='h-[6.75rem] flex'>
            <div className='pr-5 pb-4 flex justify-end flex-col'>
                <p className='font-iransans font-bold text-2xl  text-carbon-main flex'>
                    <Image width={20} height={20} src={"/icons/modal/rate-star.svg"} alt="rate" className='ml-2'/>
                    {restaurant.rate}
                </p>
                <p className='font-iransans text-xs inline-block text-inactive-dark'>
                از مجموع
                <span className='font-iransans font-bold text-xs inline-block text-carbon-main mx-1'>{restaurant.totalPoints}</span>
                امتیاز و 
                <span className='font-iransans font-bold text-xs inline-block text-carbon-main mx-1'>{restaurant.totalComments}</span>
                نظر
                </p>
            </div>

            <div className='pb-4 flex justify-end items-end flex-col '>

                <div className='flex items-center mt-[0.3125rem] '>
                    <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className=''/>
                    <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
                    <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
                    <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
                    <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
                    <div className='w-[25.25rem] h-0.5 mr-4 bg-surface-dark rounded flex after:w-[60%] after:bg-[rgb(2,137,10)] after:rounded-lg after:shadow-shadows-small '></div>
                </div>

                <div className='flex items-center mt-[0.3125rem] '>
                    <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
                    <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
                    <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
                    <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
                    <div className='w-[25.25rem] h-0.5 mr-4 bg-surface-dark rounded flex after:w-[60%] after:bg-[rgb(104,195,66)] after:rounded-lg after:shadow-shadows-small '></div>
                </div>

                <div className='flex items-center mt-[0.3125rem] '>
                    <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
                    <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
                    <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
                    <div className='w-[25.25rem] h-0.5 mr-4 bg-surface-dark rounded flex after:w-[11%] after:bg-[rgb(171,232,35)] after:rounded-lg after:shadow-shadows-small '></div>
                </div>

                <div className='flex items-center mt-[0.3125rem] '>
                    <img width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
                    <img width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2'/>
                    <div className='w-[25.25rem] h-0.5 mr-4 bg-surface-dark rounded flex after:w-[3%] after:bg-[rgb(254,157,7)] after:rounded-lg after:shadow-shadows-small '></div>
                </div>

                <div className='flex items-center mt-[0.3125rem] '>
                    <Image width={12} height={12} src={"/icons/modal/gray-star.svg"} alt="star" className='mr-2 '/>
                    <div className='w-[25.25rem] h-0.5 mr-4 bg-surface-dark rounded flex after:w-[6%] after:bg-[rgb(254,57,0)] after:rounded-lg after:shadow-shadows-small '></div>
                </div>
            </div>

        </div>

        <div className='p-4 flex justify-between'>
            <p className='font-iransans font-bold text-base inline-block text-carbon-main'>نظرات کاربران</p>
            <div className='flex items-center'>
                <span className='ml-2.5 font-iransans font-bold text-xs inline-block text-carbon-main'>به ترتیب</span>
                <div className='relative bg-carbon-alphaLight rounded-xl cursor-pointer flex items-center'>
                    {/* <div className='absolute h-9 mr-0.5 bg-white rounded-xlg transition-all duration-100 w-[50%] translate-x-[-133px]'></div> */}
                    <div onClick={sortHandler} id='1' className={clsx('z-[2] w-[7.3125rem] p-2.5 flex justify-center items-center border-2 border-carbon-alphaLight rounded-xl ',sort==1 ? 'text-accent2-main bg-white' : 'text-carbon-main bg-transparent border-transparent')}>
                        <p className='font-iransans text-sm inline-block '>جدیدترین</p>
                    </div>
                    <div onClick={sortHandler} id='2' className={clsx('z-[2] w-[7.3125rem] p-2.5 flex justify-center items-center border-2 border-carbon-alphaLight rounded-xl ',sort==2 ? 'text-accent2-main bg-white' : 'text-carbon-main  bg-transparent border-transparent')}>
                        <p className='font-iransans text-sm inline-block '>مرتبط‌ترین</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col'>
            {
                restaurant.restaurantComments.map((comment)=>{
                    return(
                        <CommentItem key={comment.id} comment={comment}/>
                    )
                })
            }
            
        </div>

    </div>
  )
}

export default VendorDetail