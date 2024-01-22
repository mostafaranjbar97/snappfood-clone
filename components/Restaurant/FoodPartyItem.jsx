import Image from 'next/image'
import React from 'react'

function FoodPartyItem() {
  return (
    <div className='w-full border-border-xs border-surface-dark box-border max-w-full basis-full laptop:max-w-[50%] laptop:basis-1/2'>
        <section className='box-border h-full py-4 flex flex-col'>
            <div className='px-4 cursor-pointer flex'>
                <div className='flex flex-col pt-4 pl-4 grow'>
                    <h2 className='font-iransans font-bold text-base inline-block text-carbon-main'>پیتزا فیتکس مخلوط</h2>
                    <strong className='mt-2 break-words font-iransans font-normal text-xs inline-block text-inactive-dark'>ژامبون گوشت و مرغ، هات داگ فرانکفورتر، قارچ، زیتون، گوجه، فلفل دلمه ای، پنیر موزارلا، سس مخصوص، سیب زمینی سرخ شده</strong>
                </div>
                <div className='relative shrink-0'>
                    <img src="https://cdn.snappfood.ir/200x201/cdn/93/50/product_image/zoodfood/64d244e7745f2.jpg" alt="پیتزا فیتکس مخلوط" width={112} height={112} className='rounded-lg' />
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='px-4'>
                    <div className='mt-4'>
                        <p className='mb-2 font-iransans font-bold text-sm inline-block text-carbon-main'>۱۰</p>
                        <p className='mb-2 font-iransans text-xs inline-block text-carbon-main'>عدد باقی مانده</p>
                        <div className='mb-2 h-0.5 bg-surface-dark w-full rtl'>
                            <div className='w-full h-full bg-inactive-dark text-right transition-all'></div>
                        </div>
                    </div>
                </div>
                <footer className='mt-2 flex justify-between items-center group'>
                    <div className='px-3 w-full min-h-[3.5625rem] transition-all duration-300 flex justify-between items-center hover:bg-surface-main'>
                        <div className='flex items-start flex-col'>
                            <div className='flex flex-col'>
                                <div className='flex'>
                                    <span className='flex items-center justify-center grow py-0.5 px-1 rounded bg-accent-alphaLight m-1 font-iransans font-bold text-xs text-accent-main'>۱۰
                                        <span className='mr-1'>
                                            <Image width={8} height={10} src={"/icons/restaurant/percent.svg"} />
                                        </span>
                                    </span>
                                    <div className='flex items-start flex-col '>
                                        <s className='font-iransans text-xs inline-block text-inactive-dark'>۲۵۲,۰۰۰</s>
                                        <span className='font-iransans font-bold text-sm inline-block text-carbon-main'> ۲۲۶,۸۰۰ 
                                            <span className='font-iransans text-sm inline-block text-carbon-main'>تومان</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center flex-col'>
                            <button className='h-[2.3125rem] text-sm flex justify-center items-center cursor-pointer box-border transition-all min-w-[6.6875rem] border-border-sm border-accent-alphaLight rounded-[3rem] bg-white bg-clip-padding font-iransans shadow-shadows-medium text-accent-main group-hover:text-white group-hover:bg-accent-main  group-active:bg-accent-dark group-active:text-white'>افزودن</button>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    </div>
  )
}

export default FoodPartyItem