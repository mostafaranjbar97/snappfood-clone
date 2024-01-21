import React from 'react'

function SideFilter() {
  return (
    <div className='mb-2 p-4 border border-carbon-alphaLight rounded-xl shadow-shadows-small flex'>
        <div className='grow flex flex-col flex-wrap'>

            <div className='border-b border-b-carbon-alphaLight min-h-[3.4375rem] flex justify-between items-center'>
                <span className='font-iransans text-sm text-carbon-main inline-block'>پیک اسنپ‌فود</span>
                <label htmlFor="checkbox" className='flex items-center select-none ltr' >
                    <input name='checkbox' type="checkbox" className='hidden p-0 box-border' />
                    <span className='outline-0 inline-block w-10 h-6 relative cursor-pointer select-none bg-carbon-alphaLight rounded-3xl p-0.5 transition-all duration-[400ms] after:rounded-[50%] after:bg-white after:transition-all after:duration-200 after:left-0 after:relative after:size-5 after:block'></span>
                </label>
            </div>

            <div className='border-b border-b-carbon-alphaLight min-h-[3.4375rem] flex justify-between items-center'>
                <span className='font-iransans text-sm text-carbon-main inline-block'>دارای کوپن</span>
                <label htmlFor="" className='flex items-center select-none ltr'>
                    <input type="checkbox" className='hidden p-0 box-border' />
                    <span className='outline-0 inline-block w-10 h-6 relative cursor-pointer select-none bg-accent2-main rounded-3xl p-0.5 transition-all duration-[400ms] after:rounded-[50%] after:bg-white after:transition-all after:duration-200 after:left-4 after:relative after:size-5 after:block'></span>
                </label>
            </div>

            <div className='border-b border-b-carbon-alphaLight min-h-[3.4375rem] flex justify-between items-center'>
                <span className='font-iransans text-sm text-carbon-main inline-block'>دارای تخفیف</span>
                <label htmlFor="" className='flex items-center select-none ltr '>
                    <input type="checkbox" className='hidden p-0 box-border' />
                    <span className='outline-0 inline-block w-10 h-6 relative cursor-pointer select-none bg-carbon-alphaLight rounded-3xl p-0.5 transition-all duration-[400ms] after:rounded-[50%] after:bg-white after:transition-all after:duration-200 after:left-4 after:relative after:size-5 after:block'></span>
                </label>
            </div>

            <div className='border-b border-b-carbon-alphaLight min-h-[3.4375rem] flex justify-between items-center'>
                <span className='font-iransans text-sm text-carbon-main inline-block'>فودپرو</span>
                <label htmlFor="" className='flex items-center select-none ltr '>
                    <input type="checkbox" className='hidden p-0 box-border' />
                    <span className='outline-0 inline-block w-10 h-6 relative cursor-pointer select-none bg-carbon-alphaLight rounded-3xl p-0.5 transition-all duration-[400ms] after:rounded-[50%] after:bg-white after:transition-all after:duration-200 after:left-4 after:relative after:size-5 after:block'></span>
                </label>
            </div>

            <div className='border-b border-b-carbon-alphaLight min-h-[3.4375rem] flex justify-between items-center'>
                <span className='font-iransans text-sm text-carbon-main inline-block'>به‌صرفه</span>
                <label htmlFor="" className='flex items-center select-none ltr '>
                    <input type="checkbox" className='hidden p-0 box-border' />
                    <span className='outline-0 inline-block w-10 h-6 relative cursor-pointer select-none bg-carbon-alphaLight rounded-3xl p-0.5 transition-all duration-[400ms] after:rounded-[50%] after:bg-white after:transition-all after:duration-200 after:left-4 after:relative after:size-5 after:block'></span>
                </label>
            </div>

            <div className='border-b border-b-carbon-alphaLight min-h-[3.4375rem] flex justify-between items-center'>
                <span className='font-iransans text-sm text-carbon-main inline-block'>خوش‌قیمت</span>
                <label htmlFor="" className='flex items-center select-none ltr'>
                    <input type="checkbox" className='hidden p-0 box-border' />
                    <span className='outline-0 inline-block w-10 h-6 relative cursor-pointer select-none bg-carbon-alphaLight rounded-3xl p-0.5 transition-all duration-[400ms] after:rounded-[50%] after:bg-white after:transition-all after:duration-200 after:left-4 after:relative after:size-5 after:block'></span>
                </label>
            </div>

        </div>
    </div>
  )
}

export default SideFilter