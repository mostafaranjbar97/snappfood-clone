'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import DeliveryInfoModal from '../Modal/DeliveryInfoModal'
import Cart from './Cart'
import { useParams } from 'next/navigation'
import { separate } from '@/utils/separatePrice'
import ReceiveTime from './ReceiveTime'
import DeliveryType from './DeliveryType'

function LeftRestaurantSideBar({restaurants}) {

    const params=useParams()
    const restaurant=restaurants.filter((res)=>res.id==Number(params.restaurant))[0]
    const {delivery}=restaurant

    

  return (
    <aside className='max-w-full basis-full box-border p-4 laptop:max-w-[25%] laptop:basis-3/12' >
        <div className='sticky top-[5.5rem] transition-[top]'>
            <ReceiveTime/>
            <div className='mb-2 px-3 py-1 bg-white border border-carbon-alphaLight rounded-lg flex '>
              <div className='flex items-center justify-between grow shrink basis-0 py-3' >
                <DeliveryType restaurant={restaurant} marginLeft={4}/>
              </div>
            </div>
            <Cart delivery={delivery}/>
        </div>
    </aside>
  )
}

export default LeftRestaurantSideBar