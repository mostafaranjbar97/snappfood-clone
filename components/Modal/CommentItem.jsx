import Image from 'next/image'
import React from 'react'

function CommentItem() {
  return (
   
        <div className='shrink-0 box-border p-4 border-b-border-xs border-b-carbon-alphaMedium flex'>
            <div className='shrink-0 w-40 ml-4 flex flex-col'>
                <p className='mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap font-iransans font-bold text-sm inline-block text-carbon-main'>پورنگ</p>
                <p className='mt-1.5 font-iransans text-sm inline-block text-carbon-main'>۲۸ دی ۱۴۰۲</p>
                <p className='w-8 py-0.5 px-[0.375rem] text-center box-border border-border-xs border-surface-dark rounded mt-1.5 font-iransans text-sm inline-flex text-carbon-main'>
                    <Image width={12} height={12} src={"/icons/modal/rate-star.svg"} className='ml-[0.15625rem] align-middle'/>
                    ۴
                </p>
            </div>
            <div className='ml-4 flex justify-center items-start flex-col'>
                <p className='mb-3 font-iransans text-sm inline-block text-carbon-main'>ظرف بسته بندی بر خلاف ظرف های یک کلیویی که  مقاوم و عایق هستند، گیاهی بود.</p>
                <div className='flex flex-wrap'>

                    <div className='h-5 py-1 px-1.5 text-2xs bg-surface-dark rounded-md mb-2 ml-2 flex justify-center items-center'>
                        <p className='font-iransans text-2xs inline-block text-carbon-main'>حلیم  یک پرس (۴۰۰ تا ۵۰۰ گرم)</p>
                    </div>

                    <div className='h-5 py-1 px-1.5 text-2xs bg-surface-dark rounded-md mb-2 ml-2 flex justify-center items-center'>
                        <p className='font-iransans text-2xs inline-block text-carbon-main'>حلیم  یک پرس (۴۰۰ تا ۵۰۰ گرم)</p>
                    </div>

                </div>

                <div className='mt-4 p-2 border-border-xs border-carbon-alphaMedium justify-center flex flex-col rounded-lg'>
                    <p className='mb-2 font-iransans text-xs inline-block text-accent-main font-bold'>پاسخ اسنپ‌فود</p>
                    <p className='font-iransans text-xs inline-block text-carbon-main '>شیده ماشین چی عزیز، از همراهی شما سپاس‌گزاریم و خوشحالیم که نظرتان را با ما در میان گذاشتید. مورد ذکرشده بررسی می‌شود.</p>
                </div>
            </div>
        </div>
    
  )
}

export default CommentItem