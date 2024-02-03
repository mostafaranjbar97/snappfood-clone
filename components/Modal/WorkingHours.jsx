import React from 'react'

const DAYS=["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه"]
function WorkingHours() {
  return (
    <div className='h-auto p-2 my-4  opacity-100 border-border-xs border-surface-dark transition-all duration-200 ease-linear shadow-shadows-small rounded-lg flex overflow-hidden bg-white justify-around flex-col max-w-28 mx-auto tablet:flex-row tablet:mx-6 tablet:max-w-[90vw]'>
        {DAYS.map((day,index)=>{
            return(
                <div key={index} className='flex justify-start items-center flex-col'>
                    <p className='mb-2 font-iransans text-2xs leading-3 inline-block text-carbon-main'>{day}</p>
                    <section className='mb-2'>
                        <div className='mb-2 mt-[0.3rem] flex justify-center'>
                            <span className='font-iransans text-xs inline-block text-carbon-main'>۲۳:۵۹</span>
                            <span className='font-iransans text-xs inline-block text-carbon-main mx-1'>-</span>
                            <span className='font-iransans text-xs inline-block text-carbon-main'>۰۷:۰۰</span>
                        </div>
                    </section>
                </div>
            )
        })}        
    </div>
  )
}

export default WorkingHours