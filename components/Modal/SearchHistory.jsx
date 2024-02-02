import Image from 'next/image'
import React from 'react'

function SearchHistory({history,removeFromHistoryHandler}) {
  return (
    <>
        {
            history.map((item,index)=>{
                return(
                    <div key={index} className='py-3.5 pr-5 pl-[1.125rem] cursor-pointer flex justify-between items-center'>
                        <div className='flex'>
                        <Image width={18} height={17} src={"/icons/modal/past-time-black.png"} alt="time" className='ml-[1.125rem] '/>
                        <p className='font-iransans text-sm inline-block text-carbon-main'>{item}</p>   
                        </div>
                        <button onClick={removeFromHistoryHandler} id={index} className='flex justify-center items-center transition-all border-transparent box-border w-8 h-8 rounded-[50%] bg-transparent bg-clip-padding border-border-sm hover:bg-accent-alphaLight hover:border-accent-alphaLight active:bg-accent-alphaMedium active:border-accent-alphaMedium'>
                            <Image id={index} width={12} height={14} src={"/icons/modal/exit.svg"} alt='exit' />
                        </button>
                    </div>
                )
            })
        }
    </>
  )
}

export default SearchHistory