import Image from 'next/image'
import React from 'react'

function CommentItem({comment}) {
  return (
   
        <div className='shrink-0 box-border p-4 border-b-border-xs border-b-carbon-alphaMedium flex'>
            <div className='shrink-0 w-40 ml-4 flex flex-col'>
                <p className='mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap font-iransans font-bold text-sm inline-block text-carbon-main'>{comment.name}</p>
                <p className='mt-1.5 font-iransans text-sm inline-block text-carbon-main'>{comment.date}</p>
                <p className='w-12 py-0.5 px-1.5 text-center box-border border-border-xs border-surface-dark rounded mt-1.5 font-iransans text-sm inline-flex items-center justify-center text-carbon-main'>
                    <Image width={12} height={12} src={"/icons/modal/rate-star.svg"} alt='rate' className='ml-[0.15625rem] align-middle'/>
                    {comment.rate}
                </p>
            </div>
            <div className='ml-4 flex justify-center items-start flex-col'>
                <p className='mb-3 font-iransans text-sm inline-block text-carbon-main'>{comment.comment}</p>
                <div className='flex flex-wrap'>

                    {
                        comment.orderTags.map((tag,index)=>{
                            return(
                                <div className=' py-1 px-1.5 text-2xs bg-surface-dark rounded-md mb-2 ml-2 flex justify-center items-center' key={index}>
                                    <p className='font-iransans text-2xs inline-block text-carbon-main'>{tag}</p>
                                </div>
                            )
                        })
                    }

                </div>

                { comment.snappfoodAnswer && <div className='mt-4 p-2 border-border-xs border-carbon-alphaMedium justify-center flex flex-col rounded-lg'>
                    <p className='mb-2 font-iransans text-xs inline-block text-accent-main font-bold'>پاسخ اسنپ‌فود</p>
                    <p className='font-iransans text-xs inline-block text-carbon-main '>{comment.snappfoodAnswer}</p>
                </div>}

                { comment.restaurantManagerAnswer && <div className='mt-4 p-2 border-border-xs border-carbon-alphaMedium justify-center flex flex-col rounded-lg'>
                    <p className='mb-2 font-iransans text-xs inline-block text-accent-main font-bold'>پاسخ مدیر رستوران</p>
                    <p className='font-iransans text-xs inline-block text-carbon-main '>{comment.restaurantManagerAnswer}</p>
                </div>}

            </div>
        </div>
    
  )
}

export default CommentItem