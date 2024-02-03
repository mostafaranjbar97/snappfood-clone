'use state'
import Image from 'next/image'
import React from 'react'
import CommentItem from './CommentItem'
import VendorRate from './VendorRate';
import SortComment from './SortComment';
import { separate } from '@/utils/separatePrice';

function VendorDetail({restaurant}) {

  return (
    <div className='h-[calc(90vh-16rem)] tablet:overflow-y-auto '>
        <div className='h-[6.75rem]  hidden tablet:flex'>
            <div className='pr-5 pb-4 flex justify-end flex-col'>
                <p className='font-iransans font-bold text-2xl  text-carbon-main flex'>
                    <Image width={20} height={20} src={"/icons/modal/rate-star.svg"} alt="rate" className='ml-2'/>
                    {restaurant.rate}
                </p>
                <p className='font-iransans text-xs inline-block text-inactive-dark'>
                از مجموع
                <span className='font-iransans font-bold text-xs inline-block text-carbon-main mx-1'>{separate(restaurant.totalPoints)}</span>
                امتیاز و 
                <span className='font-iransans font-bold text-xs inline-block text-carbon-main mx-1'>{separate(restaurant.totalComments)}</span>
                نظر
                </p>
            </div>
            <VendorRate/>
        </div>
        <div className='p-4 flex justify-between flex-col tablet:flex-row'>
            <p className='font-iransans font-bold text-base inline-block text-carbon-main'>نظرات کاربران</p>
            <SortComment/>
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