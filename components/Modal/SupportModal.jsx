'use client'
import { setHideSupportModal } from '@/redux/features/ShowModalSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const PROBLEMS_LIST=[{id:"1",title:"مشکل در سفارش",desc:"ارسال نشدن اقلام، نارضایتی از کیفیت، لغو، تغییر آدرس تحویل و..."},
{id:"2",title:"مشکل در پرداخت و کیف‌پول",desc:"پرداخت ناموفق، عدم بازگشت وجه به کیف‌پول و..."},
{id:"3",title:"سایر مشکلات",desc:"تخفیف، خطای اپلیکیشن و..."},
{id:"4",title:"سوالات متداول",desc:""}]
function SupportModal() {
    
    const showModal=useSelector((store)=>store.showModal)
    const {isOpenSupport}=showModal
    const dispatch=useDispatch()
    const handleClose=()=>{
      dispatch(setHideSupportModal())
    }
    if(!isOpenSupport)return null;

  return (
    <div>
        <div className='flex justify-center items-center fixed inset-0 z-[1000] animate-[0.3s_ease_0s_1_normal_forwards_running_modal-animation]' onClick={handleClose}>
            <div className='fixed right-4 bottom-[70px] max-w-[375px] ml-4  bg-white shadow-shadows-modal rounded-xl h-[80vh] laptop:h-[620px] overflow-hidden animate-[0.3s_cubic-bezier(0.4,0,0,1.5)_0s_1_normal_forwards_running_modal-animation3]' onClick={(e)=>e.stopPropagation()}>
                <div className='mt-2.5 px-[15px] '>
                    <div className='mt-[15px] mb-2.5    flex justify-between items-center flex-row-reverse'>
                        <div className='min-w-[30px]'></div>
                        <p className='font-iransans font-bold text-base inline-block text-carbon-main'>پشتیبانی</p>
                        <button className='min-w-[30px] bg-transparent'></button>
                    </div>

                    {
                       PROBLEMS_LIST.map((problem)=>{
                        return(
                            <button key={problem.id} className=' w-full min-h-[60px] text-right bg-transparent border-b border-b-surface-dark flex justify-between items-center'>
                                <div>
                                    <h4 className='font-iransans font-bold text-xs inline-block text-carbon-main py-2'>{problem.title}</h4>
                                    <br />
                                    <p className='font-iransans text-xs inline-block text-carbon-main pb-2'>{problem.desc}</p>
                                </div>
                                <Image width={5} height={16} src={"/icons/modal/left-support.svg"}  alt="arrow"/>
                            </button>
                        )
                       }) 
                    }
                    
                </div>
            </div>
        </div>
    </div>    
  )
}

export default SupportModal