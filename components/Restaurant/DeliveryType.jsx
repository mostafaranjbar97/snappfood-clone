'use client'
import { separate } from '@/utils/separatePrice'
import clsx from 'clsx'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

function DeliveryType({restaurant,marginLeft}) {

  return (
    <div className='flex'>
        <Image width={17} height={18} src={ restaurant.delivery.snappfoodDelivery===true ? "/icons/home/express.svg" : "/icons/home/courier.svg"}  alt="delivery" className={clsx('align-middle',`ml-${marginLeft}`)}/>
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
  )
}

export default DeliveryType