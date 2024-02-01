'use client'
import { setAddress, setHideAddressModal } from '@/redux/features/ShowAddressModalSlice'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function AddressModal() {
    const addressRef1=useRef()
    const addressRef2=useRef()


    const showAddressModal=useSelector((store)=>store.showAddressModal)
    const {isOpen,address}=showAddressModal
    const dispatch=useDispatch()

        const isAddress1= address=="تهران، دانشگاه تهران، کارگر شمالی، امین"


        const isAddress2= address=="سبزوار، میدان شهید حسین فهمیده، طالقانی، کوشک ۱۹ + ولی عصر ۸ تقاطع علامه طباطبایی ۶"



    const changeAddressHandler=(e)=>{
        console.log(e)
        dispatch(setAddress(e.target.innerText))
    }
    const closeHandler=()=>{
        dispatch(setHideAddressModal())
    }
    if (!isOpen) return null;
  return (
    <div>
        <div className='flex justify-center items-center fixed inset-0 z-[1000] animate-[0.3s_ease_0s_1_normal_forwards_running_modal-animation]' onClick={closeHandler}>
            <div className='w-[90vw] max-w-[640px] bg-white shadow-shadows-modal rounded-xl max-h-[90vh] overflow-hidden animate-[0.3s_cubic-bezier(0.4,0,0,1.5)_0s_1_normal_forwards_running_modal-animation2]' onClick={(e)=>e.stopPropagation()}>
                <div className='relative box-border w-full h-14 pl-14 flex justify-between items-center'>
                    <button className='h-14 w-14 flex justify-center items-center' onClick={closeHandler}>
                        <Image width={14} height={14} src={"/icons/modal/exit.svg"}/>
                    </button>
                    <p className='font-iransans font-bold text-sm inline-block text-carbon-main'>انتخاب آدرس</p>
                    <div></div>
                </div>
                <div className='px-4 pb-4'>
                    <section className='max-h-[64vh] mb-4 overflow-auto'>
                        <div className='relative box-border w-full mb-4 py-2.5 pr-4 rounded-md border-accent-alphaLight border flex justify-between items-center'>
                            <label onClick={changeAddressHandler} ref={addressRef1} htmlFor='address1' id='1' className='grow shrink basis-0 cursor-pointer inline-flex items-center rtl select-none' >
                                <input  type="checkbox" className='hidden' name='address1' />
                                {isAddress1 ? <Image width={22} height={22} src={"/icons/modal/check.png"} className='rounded-[50%]'/> 
                                : <div className='w-5 h-5 rounded-[50%] border border-carbon-alphaMedium bg-transparent'></div>}
                                <div className='mr-2 pr-2.5 w-[calc(100%-55px)] cursor-pointer flex flex-col'>
                                    <p className='mb-[5px]'></p>
                                    <div>
                                        <span className='font-iransans text-sm text-carbon-light'>تهران، دانشگاه تهران، کارگر شمالی، امین</span>
                                    </div>
                                </div>
                            </label>
                            <div className='min-w-4 flex' >
                                <button className='justify-start h-14 flex items-center'>
                                    <Image width={20} height={20} src={"/icons/modal/delete.svg"} className='mr-[0.6rem]'/>
                                </button>
                                <button className='justify-start h-14 flex items-center'>
                                    <Image width={20} height={20} src={"/icons/modal/edit.svg"} className='mr-[0.6rem]'/>
                                </button>
                            </div>
                        </div>
                        <div className='relative box-border w-full mb-4 py-2.5 pr-4 rounded-md border-accent-alphaLight border flex justify-between items-center'>
                            <label onClick={changeAddressHandler} ref={addressRef2} htmlFor='address'  className='grow shrink basis-0 cursor-pointer inline-flex items-center rtl select-none' >
                                <input type="checkbox" className='hidden' name='address'/>
                                {isAddress2 ? <Image width={22} height={22} src={"/icons/modal/check.png"} className='rounded-[50%]'/> 
                                : <div className='w-5 h-5 rounded-[50%] border border-carbon-alphaMedium bg-transparent'></div>}
                                <div  className='mr-2 pr-2.5 w-[calc(100%-55px)] cursor-pointer flex flex-col'>
                                    <p className='mb-[5px]'></p>
                                    <div>
                                        <span className='font-iransans text-sm text-carbon-light'>سبزوار، میدان شهید حسین فهمیده، طالقانی، کوشک ۱۹ + ولی عصر ۸ تقاطع علامه طباطبایی ۶</span>
                                    </div>
                                </div>
                            </label>
                            <div className='min-w-4 flex' >
                                <button className='justify-start h-14 flex items-center'>
                                    <Image width={20} height={20} src={"/icons/modal/delete.svg"} className='mr-[0.6rem]'/>
                                </button>
                                <button className='justify-start h-14 flex items-center'>
                                    <Image width={20} height={20} src={"/icons/modal/edit.svg"} className='mr-[0.6rem]'/>
                                </button>
                            </div>
                        </div>
                    </section>
                    <button className='flex justify-start items-center w-full h-14 min-w-[6.6875rem] rounded-md bg-clip-padding bg-transparent text-accent2-main border-border-sm border-transparent font-iransans font-bold text-base rtl hover:bg-accent2-alphaLight hover:text-accent2-dark hover:border-accent2-alphaLight active:bg-accent2-alphaMedium active:text-accent2-dark active:border-accent2-alphaMedium'>
                        <Image width={12} height={12} src={"/icons/modal/plus.png"} className='ml-4'/>
                        ساخت آدرس جدید 
                    </button>
                </div>
                <form></form>
            </div>
        </div>
    </div>
  )
}

export default AddressModal