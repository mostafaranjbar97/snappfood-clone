import Image from 'next/image'
import React from 'react'

function Sort() {
  return (
    <div className='flex justify-between items-center mb-8'>
        {/* <select name="" id="" className='appearance-none flex items-center justify-between rounded-md bg-white w-[200px] h-12 transition-all border border-carbon-alphaLight outline-0 hover:border-[rgb(179,179,179)] focus:shadow-[rgb(38,132,255)_0px_0px_0px_1px]'>
            <div className='py-2 px-3 bg-transparent hover:bg-[rgb(222,235,255)]'>
                <option value="">بالاترین امتیاز</option>
            </div>
            
            <option value="" className='appearance-none py-2 px-3 bg-transparent hover:bg-[rgb(222,235,255)]'>نزدیک‌ترین</option>
        </select> */}
        <div></div>
        <div className='rtl relative box-border text-base leading-6'>
            <span className='z-[9999] h-px w-px absolute whitespace-nowrap'></span>
            <div className='flex items-center justify-between rounded-md bg-white flex-wrap min-h-[38px] relative box-border w-[200px] h-12 transition-all border border-carbon-alphaLight outline-0 hover:border-[rgb(179,179,179)] focus:shadow-[rgb(38,132,255)_0px_0px_0px_1px]'>
                <div className='flex items-center flex-wrap grow shrink basis-0 py-0.5 px-2 relative overflow-hidden box-border'>
                    <div className='text-[rgb(128,128,128)] mx-0.5 absolute top-1/2 -translate-y-1/2 box-border max-w-[calc(100%-8px)] overflow-hidden text-ellipsis whitespace-nowrap opacity-100 z-[1000]'>به ترتیب پیش‌فرض</div>
                    <div className='m-0.5 py-0.5 box-border'>
                        <div className='inline-block'>
                            <input type="text" name="" id="" className='w-0.5 bg-[0px_center] opacity-100 box-content ' />
                            <div className='absolute top-0 left-0 h-0 invisible overflow-scroll whitespace-pre text-base font-iransans'></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center self-stretch shrink-0 box-border'>
                    <div className='text-[rgb(204,204,204)] flex p-2 transition-[color] box-border hover:text-[rgb(153,153,153)]'>
                        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg>
                    </div>
                    <span className='self-stretch my-2 w-px box-border bg-[rgb(204,204,204)]'></span>
                    <div className='flex transition-[color] text-[rgb(204,204,204)] p-2'>
                        <Image width={8} height={5} src={"/icons/resturants/bottom-sort.svg"} />
                    </div>
                </div>
            </div>
            <div className='absolute top-full bg-white rounded my-2 w-[200px] box-border shadow-[rgba(0,0,0,0.1)_0px_0px_0px_1px,rgba(0,0,0,0.1)_0px_4px_11px]'>
                <div className='max-h-[300px] overflow-y-auto py-1 relative'>
                    <div className='bg-transparent py-2 px-3 w-full box-border select-none hover:bg-[rgb(222,235,255)] active:bg-[rgb(178,212,255)] focus:bg-[rgb(38,132,255)] focus:text-white'>بالاترین امتیاز</div>
                    <div className='bg-transparent py-2 px-3 w-full box-border select-none hover:bg-[rgb(222,235,255)] active:bg-[rgb(178,212,255)] focus:bg-[rgb(38,132,255)] focus:text-white'>نزدیک‌ترین</div>
                    <div className='bg-transparent py-2 px-3 w-full box-border select-none hover:bg-[rgb(222,235,255)] active:bg-[rgb(178,212,255)] focus:bg-[rgb(38,132,255)] focus:text-white'>جدیدترین</div>
                    <div className='bg-transparent py-2 px-3 w-full box-border select-none hover:bg-[rgb(222,235,255)] active:bg-[rgb(178,212,255)] focus:bg-[rgb(38,132,255)] focus:text-white'>ارزان‌ترین</div>
                    <div className='bg-transparent py-2 px-3 w-full box-border select-none hover:bg-[rgb(222,235,255)] active:bg-[rgb(178,212,255)] focus:bg-[rgb(38,132,255)] focus:text-white'>عملکرد کلی</div>
                    <div className='bg-transparent py-2 px-3 w-full box-border select-none hover:bg-[rgb(222,235,255)] active:bg-[rgb(178,212,255)] focus:bg-[rgb(38,132,255)] focus:text-white'>گران‌ترین</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sort