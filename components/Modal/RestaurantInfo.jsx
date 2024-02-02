import Image from 'next/image'
import React from 'react'
import Map from './Map'
import { useDispatch } from 'react-redux';
import { addResIdToMap, setShowMapModal } from '@/redux/features/ShowModalSlice';

const DAYS=["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه"]

function RestaurantInfo({handleClose,restaurant}) {

    const dispatch = useDispatch();
    const handleOpen = () => {
        dispatch(addResIdToMap(restaurant.id))
        dispatch(setShowMapModal())
    };

    restaurant.restaurantCategory.length=3
     const restaurantCategory=restaurant.restaurantCategory.join(", ")

  return (
    <div>
        <div className='py-[1.375rem] px-[1.625rem] flex justify-between'>
            <div className='cursor-pointer' onClick={handleClose}>
                <Image width={14} height={14} src={"/icons/modal/exit-modal.svg"}  alt="close" />
            </div>
        </div>
        <div className='px-4 pb-4 flex justify-between'>
            <div className='flex'>
                <img src={restaurant.logo} alt={restaurant.name} className='w-24 h-24 ml-5 rounded-xl shadow-shadows-high' />
                <div className='flex justify-center flex-col'>
                    <p className='mb-1 font-iransans font-bold text-xl inline-block text-carbon-main'>{restaurant.name}</p>
                    <p className='mb-1 font-iransans text-sm inline-block text-carbon-main'>{restaurantCategory}</p>
                    <p className='mb-1 font-iransans text-xs inline-block text-carbon-light'>
                        <Image width={16} height={18} src={"/icons/modal/location.svg"} alt='location' className='relative  ml-[0.3125rem] mb-1 inline-block'/>
                        {restaurant.address}
                    </p>
                </div>
            </div>
            <section className='min-w-[11.5rem] h-24 overflow-hidden bg-surface-dark rounded-lg'>
                <section className='relative'>
                    <Map restaurant={restaurant}/>
                    <div className='absolute top-0 z-[4000] w-full h-full flex justify-center'>
                        <button onClick={handleOpen} className='mt-[0.6rem] mx-auto flex justify-center items-center min-w-[6.6875rem] rounded-[3rem] bg-clip-padding shadow-shadows-medium  bg-white text-accent2-main transition-all h-10 border-border-sm border-accent2-alphaLight hover:text-accent2-dark active:text-accent2-dark active:bg-accent2-alphaMedium'>
                            <p className='font-iransans text-sm inline-block font-bold'>مشاهده روی نقشه</p>
                            <Image width={9} height={16} src={"/icons/restaurant/left-map.svg"} alt='left' className='mr-2' />
                        </button>
                    </div>
                </section>
               
            </section>
        </div>
        <div className='my-2 flex justify-around'>
            <div className='flex flex-col items-center'>
                <Image width={18} height={18} src={"/icons/modal/clock.svg"}  alt="time"/>
                <p className='mt-2.5 mb-1 font-iransans text-xs inline-block text-carbon-main'>ساعت کاری</p>
                <p className='font-iransans text-xs flex text-carbon-main font-bold'>
                    <span className='font-iransans text-xs inline-block text-accent2-main font-bold ml-1'> باز </span>
                    {restaurant.workingHours}
                    <Image width={11} height={9} src={"/icons/modal/bottom-info.svg"} alt='bottom' className='top-[0.0625rem] relative mr-1' />
                </p>
            </div>

            <div className='flex items-center flex-col'>
                <Image width={19} height={14} src={"/icons/modal/payment.png"}  alt="payment"/>
                <p className='mt-2.5 mb-1 font-iransans text-xs inline-block text-carbon-main'>شیوه‌های پرداخت</p>
                <p className='font-iransans text-xs inline-block text-carbon-main font-bold'>{restaurant.paymentMethod}</p>
            </div>

            <div className='flex items-center flex-col'>
                <Image width={19} height={19} src={"/icons/modal/shopping-cart.png"}   alt="cart"/>
                <p className='mt-2.5 mb-1 font-iransans text-xs inline-block text-carbon-main'>حداقل سبد خرید</p>
                <span className='font-iransans text-sm inline-block text-carbon-main font-bold'> {restaurant.minimumCart} 
                    <span className='font-iransans text-xs inline-block text-carbon-main'>تومان</span>
                </span>
            </div>
        </div>

        <div className='h-auto p-2 my-4 mx-6 opacity-100 border-border-xs border-surface-dark transition-all duration-200 ease-linear shadow-shadows-small rounded-lg flex overflow-hidden bg-white justify-around'>
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
    </div>
  )
}

export default RestaurantInfo