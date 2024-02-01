import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function UserModal({modalRef}) {
  return (
    <div ref={modalRef} className='left-[-1.875rem] absolute top-6 laptop:-left-[7.5rem] w-[16.25rem] min-h-12 text-carbon-main shadow-shadows-high rounded-lg flex flex-col justify-center overflow-hidden bg-white'>
        <Link href={"/"} className='w-full grow bg-transparent'>
            <div className='box-border w-full h-16 py-3 px-4 flex items-center '>
                <Image width={14} height={18} src={"/icons/header/user.svg"}  alt="user" className='ml-4'/>
                <div className='flex flex-col'>
                    <p className='font-iransans font-bold text-sm inline-block text-carbon-main'>مصطفی  رنجبر</p>
                    <p className='mt-1 cursor-pointer font-iransans text-xs inline-block text-accent2-main'>مشاهده حساب کاربری</p>
                </div>
            </div>
        </Link>
        <button className='rtl min-h-12 justify-start flex pr-4 h-14 items-center cursor-pointer box-border min-w-[6.6875rem] rounded-md text-carbon-main w-full transition-all hover:bg-carbon-alphaLight active:bg-carbon-alphaMedium'>
            <div className='w-full flex justify-between '>
                <div className='flex items-center'>
                    <Image width={20} height={20} src={"/icons/modal/snapp-club.svg"}  alt="snapp" className='ml-3.5'/>
                    <p className='font-iransans text-sm text-carbon-main inline-block'>اسنپ! کلاب</p>
                </div>
                <div className='box-border mr-auto py-0.5 pr-1 pl-3 rounded-[2rem] flex items-center bg-golden-yellow-color border border-tangerine-yellow-color'>
                    <Image width={13} height={16} src={"/icons/modal/club-gem.svg"} alt="gem" className='mx-1'/>
                    <div className='flex items-baseline'>
                        <p className='font-iransans font-bold text-sm inline-block text-carbon-main'>۲,۴۳۰</p>
                        <p className='font-iransans text-2xs leading-3 inline-block text-carbon-main mr-0.5'> امتیاز</p>
                    </div>
                </div>
            </div>
        </button>
        <button className='rtl min-h-12 justify-start flex pr-4 h-14 items-center cursor-pointer box-border min-w-[6.6875rem] rounded-md text-carbon-main w-full  transition-all hover:bg-carbon-alphaLight active:bg-carbon-alphaMedium'>
            <div className='w-full flex justify-between '>
                <div className='flex items-center'>
                    <Image width={17} height={16} src={"/icons/modal/wallet.svg"} alt="wallet" className='ml-4'/>
                    <p className='font-iransans text-sm text-carbon-main inline-block'>کیف پول</p>
                </div>
                <div className='flex flex-col '>
                    <div className='flex items-center'>
                        <div className='flex flex-col items-start'>
                            <span className='font-iransans font-bold text-sm inline-block text-carbon-main'> ۰  
                            <span className='font-iransans text-xs inline-block text-carbon-light mr-0.5'>تومان</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </button>
        <button className='rtl min-h-12 justify-start flex pr-4 h-14 items-center cursor-pointer box-border min-w-[6.6875rem] rounded-md text-carbon-main w-full  transition-all hover:bg-carbon-alphaLight active:bg-carbon-alphaMedium'>
            <div className='flex items-center'>
                <Image width={18} height={17} src={"/icons/modal/referral-menu.svg"} alt="referral" className='ml-4'/>
                <p className='font-iransans text-sm text-carbon-main inline-block'>دعوت از دوستان</p>
            </div>
        </button>
        <button className='rtl min-h-12 justify-start flex pr-4 h-14 items-center cursor-pointer box-border min-w-[6.6875rem] rounded-md text-carbon-main w-full transition-all hover:bg-carbon-alphaLight active:bg-carbon-alphaMedium'>
            <div className='flex items-center'>
                <Image width={18} height={18} src={"/icons/modal/logout.svg"} alt="logout" className='ml-4'/>
                <p className='font-iransans text-sm text-carbon-main inline-block'>خروج</p>
            </div>
        </button>
    </div>
  )
}

export default UserModal