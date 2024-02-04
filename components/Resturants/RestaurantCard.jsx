import { separate } from '@/utils/separatePrice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DeliveryType from '../Restaurant/DeliveryType'
import RestaurantDescription from './RestaurantCardDescription'
import RestaurantCardDescription from './RestaurantCardDescription'
import ResCardImage from './ResCardImage'

function RestaurantCard({restaurant}) {



     
  return (
    <div className='basis-full max-w-full box-border p-3 laptop:basis-6/12 laptop:max-w-[6/12] desktop:basis-4/12 desktop:max-w-[4/12]'>
                <Link href={`/resturants/${restaurant.id}`} title={restaurant.name} >
            <div className='h-[21.3125rem] bg-white flex justify-between box-border mb-8 pb-6 overflow-hidden cursor-pointer border-carbon-alphaLight border border-solid flex-col text-carbon-main shadow-shadows-small rounded-lg hover:shadow-shadows-high'>
                <ResCardImage restaurant={restaurant}/>
                <div className='shrink-0 flex-grow flex justify-between flex-col'>
                    <RestaurantCardDescription restaurant={restaurant}/> 
                    <div className='flex justify-center'>
                        <div className='px-[0.875rem] py-[0.6875rem] rounded-[4.5rem] bg-white shadow-shadows-small'>
                            <DeliveryType restaurant={restaurant} marginLeft={2}/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default RestaurantCard