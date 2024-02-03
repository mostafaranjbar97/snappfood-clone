import { separate } from '@/utils/separatePrice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function RestaurantCard({restaurant}) {

    restaurant.restaurantCategory.length=3
     const restaurantCategory=restaurant.restaurantCategory.join(", ")
     let copon3
     if(restaurant.coupon){
        const copon=restaurant.coupon.map((coupon)=>` ${coupon.value} ${coupon.title}`)
        const copon2=copon.join(" و ")
        copon3=copon2
     }
     let copon4= restaurant.proUsers ? copon3 ? `${copon3} و ${restaurant.proUsers}% تخفیف ویژه کاربران PRO` : `${restaurant.proUsers}% تخفیف ویژه کاربران PRO` : copon3
     
  return (
    <div className='basis-full max-w-full box-border p-3 laptop:basis-6/12 laptop:max-w-[6/12] desktop:basis-4/12 desktop:max-w-[4/12]'>
                <Link href={`/resturants/${restaurant.id}`} title={restaurant.name} >
            <div className='h-[21.3125rem] bg-white flex justify-between box-border mb-8 pb-6 overflow-hidden cursor-pointer border-carbon-alphaLight border border-solid flex-col text-carbon-main shadow-shadows-small rounded-lg hover:shadow-shadows-high'>
                <div className='h-[9.6875rem] min-h-[9.6875rem] max-h-[9.6875rem] relative shrink-0 grow flex items-end justify-center'>
                    <img src={restaurant.image} alt='' className='object-cover w-full h-full'/>
                    <div className='absolute right-0 left-0 m-auto translate-y-5 h-[5.5rem] w-[5.5rem] bg-white rounded-xl shadow-shadows-high flex justify-center items-center'>
                        <img alt={restaurant.name} src={restaurant.logo} className='border-carbon-alphaLight border rounded-xl'/>
                    </div>
                    {(restaurant.coupon || restaurant.proUsers) && <div className='absolute right-0 top-5 left-auto max-w-[calc(100%-26px)] py-1 pr-2 pl-3 bg-white rounded-l-2xl flex items-center'>
                        <span className='w-4 h-4'>
                            <Image width={16} height={16} src={"/icons/home/coupon-badge.svg"} alt='coupon' />
                        </span>
                        <span className='mr-[0.28125rem] pt-0.5 overflow-hidden font-medium whitespace-nowrap text-ellipsis font-iransans text-xs inline-block text-accent2-dark'>{copon4}</span>
                    </div>}
                    {restaurant.discount && <div className='absolute right-0 bottom-0 py-1 px-3 bg-white rounded-tl-2xl'>
                        <span className='font-iransans font-bold text-xs text-accent-dark'>%{restaurant.discount}</span>
                    </div>}
                </div>
                <div className='shrink-0 flex-grow flex justify-between flex-col'>
                    <div className='mt-7 flex items-center flex-col'>
                        <h2 className='max-w-full mb-2 overflow-hidden text-ellipsis whitespace-nowrap font-iransans font-bold text-lg text-carbon-main text-center inline-block'>{restaurant.name}</h2>
                        <div className='mb-2'>
                            <div className='ml-2 flex'>
                                <span className='ml-2 flex'>
                                    <Image width={12} height={12} src={"/icons/home/rate-star.svg"} alt='rate' className='ml-1 align-middle'/>
                                    <span className='font-iransans font-bold text-xs text-carbon-main inline-block '>{restaurant.rate}</span>
                                </span>
                                <p className='font-iransans text-xs text-inactive-dark inline-block'>({separate(restaurant.totalPoints)} امتیاز)</p>
                            </div>
                        </div>
                        <h3 className='mb-3 font-iransans text-xs text-inactive-dark inline-block'>{restaurantCategory}</h3>
                    </div>
                    <div className='flex justify-center'>
                        <div className='px-[0.875rem] py-[0.6875rem] rounded-[4.5rem] bg-white shadow-shadows-small'>
                            <div className='flex'>
                                <Image width={17} height={18} src={ restaurant.delivery.snappfoodDelivery===true ? "/icons/home/express.svg" : "/icons/home/courier.svg"}  alt="delivery" className='ml-2 align-middle'/>
                                <p className='ml-2 font-iransans text-xs text-carbon-main inline-block'>{restaurant.delivery.type}</p>
                                <div className='ml-2 flex flex-col'>
                                    <div className='flex items-center'>
                                        <div className='flex flex-col items-start'>
                                            <span className='font-iransans font-bold text-xs text-carbon-main inline-block'> {separate(restaurant.delivery.price)} 
                                                <span className='font-iransans font-normal text-xs text-carbon-main inline-block'>تومان</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default RestaurantCard