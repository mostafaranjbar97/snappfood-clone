import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

function FoodPartyCard({food,takhfif,index}) {
  const foodWithDiscount=((food.price)*(100-(food.discount)))/100
  return (
    <div className='ml-4 shrink-0 w-full h-full relative transform'>
      <div className='box-border min-h-[23.125rem] mx-[0.1875rem] pb-6 px-6 pt-3 overflow-hidden bg-white cursor-pointer drop-shadow-[0_1px_0_rgba(58,61,66,0.06)] text-carbon-main shadow-shadows-small rounded-lg flex flex-col justify-between hover:shadow-shadows-high'>
        <h3 className='grow-0 grayscale-0 font-iransans font-medium text-2xs leading-3 text-carbon-main text-center inline-block '>{takhfif[index].name}</h3>
        <div className='grow-0 grayscale-0 text-center bg-transparent rounded-[4.5rem]'>
          <div>
            <p className='ml-2 grayscale-0 font-iransans text-2xs leading-3 text-carbon-main inline-block '>{takhfif[index].delivery.type}</p>
            <div className='ml-2 inline-flex flex-col text-center grayscale-0'>
              <div className='inline-flex items-center '>
                <div className='inline-flex items-start'>
                  <span className='font-iransans text-2xs leading-3 text-carbon-main inline-block'> {takhfif[index].delivery.price} 
                    <span className='font-iransans text-2xs leading-4 text-carbon-main inline-block mr-1'>تومان</span>
                  </span>
                </div>
              </div>
            </div>
            <div className='w-[7.125rem] h-[7.125rem] mt-5 mx-auto mb-[1.9375rem] overflow-hidden rounded-lg grow-0 grayscale-0 flex justify-center items-end '>
              <img src={food.images[0]} alt={food.name} className='w-full h-full'/>
            </div>
            <h2 className='min-h-12 grow-0 grayscale-0 font-iransans font-bold text-base text-carbon-main inline-block text-center'>{food.name}</h2>
            <div className='my-6 grow-0 flex justify-between '>
              <div className='flex flex-col'>
                <span className='inline-block'>
                  <span className='ltr flex justify-end'>
                    <Image width={12} height={12} src={"/icons/home/rate-star.svg"} className='mr-1 align-middle'/>
                    <span className='font-iransans font-bold text-xs text-carbon-main inline-block'>{food.rate}</span>
                  </span>
                </span>
                <div className='mt-1 flex items-baseline'>
                  <span className={clsx('font-iransans font-bold text-sm text-right  inline-block',food.numberRemaining >= 3 ? "text-carbon-main" : "text-alert-main" )}>{food.numberRemaining}</span>
                  <span className={clsx('mr-1 font-iransans font-light text-xs text-right  inline-block',food.numberRemaining >= 3 ? "text-carbon-main" : "text-alert-main" )}>عدد باقی مانده</span>
                </div>
              </div>
              <div className='flex justify-center items-end flex-col'>
                <div className='ltr mb-1 flex justify-center items-center'>
                  <div className='mr-0.5 w-[1.8125rem] h-4 rounded-[0.25rem] bg-accent-main flex justify-center items-center'>
                    <span className='rtl mt-0.5 font-iransans font-bold text-xs text-white flex'>{food.discount}
                    <Image width={7} height={8} src={"/icons/home/percent.svg"} className='mr-[0.1875rem]'/>
                    </span>
                  </div>
                  <s className='mr-[0.1875rem] font-iransans text-xs text-inactive-dark inline-block'>{food.price}</s>
                </div>
                <div>
                  <p className='font-iransans font-bold text-sm text-carbon-main inline-block'>{foodWithDiscount}</p>
                  <p className='mr-0.5 font-iransans text-xs text-carbon-main inline-block'>تومان</p>
                </div>
              </div>
            </div>
            <div className='h-0.5 w-full rounded bg-surface-dark rtl'>
              <div className={clsx('h-0.5 w-full rounded  text-right transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,0.1.275)]',food.numberRemaining >= 3 ? "bg-inactive-dark" : "bg-alert-light" )}></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FoodPartyCard