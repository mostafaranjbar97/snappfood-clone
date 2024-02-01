'use client'
import { setHideSupportModal, setShowSupportModal } from '@/redux/features/ShowModalSlice'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Support() {

    const showModal=useSelector((store)=>store.showModal)
    const {isOpenSupport}=showModal
    const dispatch=useDispatch()
    const handleOpen=()=>{
      dispatch(setShowSupportModal())
      isOpenSupport &&  dispatch(setHideSupportModal())
    }


  return (
    <button onClick={handleOpen} className={clsx('group fixed right-4 bottom-4 z-10 rotate-[360deg] transition-transform duration-300 ease-in flex justify-center items-center box-border w-12 h-12 rounded-[50%]   bg-clip-padding  border-border-sm border-accent-alphaLight shadow-shadows-medium focus:z-[1001]  active:z-[1001]',isOpenSupport ? 'bg-surface-main' : 'bg-accent-main' )}>
        {! isOpenSupport ? <Image width={24} height={24} src={"/icons/footer/support.svg"} alt='support' />
        : <Image width={14} height={14} src={"/icons/footer/exit-support.svg"}  alt='exit'/>
        }
    </button>
  )
}

export default Support