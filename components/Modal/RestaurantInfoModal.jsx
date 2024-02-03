'use client'
import React from 'react'
import RestaurantInfo from './RestaurantInfo'
import VendorDetail from './VendorDetail'
import { useDispatch, useSelector } from 'react-redux';
import { setCloseResInfoModalNumber } from '@/redux/features/OpenResInfoModalSlice';

function RestaurantInfoModal({restaurants}) {

  
  const openResInfoModal=useSelector((store)=>store.openResInfoModalNumber)
  const {isOpen,isOpenNumber}=openResInfoModal
  const dispatch=useDispatch()
  const restaurant=restaurants.filter((res)=>res.id==isOpenNumber)[0]

  const handleClose = () => {
    dispatch(setCloseResInfoModalNumber(restaurant.id))
  };

 


  if (!isOpen) return null;
  return (
    <div>
        <div className='flex justify-center items-center fixed inset-0 z-[1000] animate-[0.3s_ease_0s_1_normal_forwards_running_modal-animation]' onClick={handleClose}>
            <div className=' bg-white shadow-shadows-modal rounded-xl max-h-[90vh] overflow-hidden animate-[0.3s_cubic-bezier(0.4,0,0,1.5)_0s_1_normal_forwards_running_modal-animation4]' onClick={(e)=>e.stopPropagation()}>
                <div className=' w-[35vw] min-w-[20rem] max-w-[45rem] max-h-[calc(90vh-4rem)] overflow-y-scroll flex flex-col tablet:w-[70vw] laptop:w-[90vw] mb-4 pb-4'>
                    <RestaurantInfo handleClose={handleClose} restaurant={restaurant}/>
                    <VendorDetail  restaurant={restaurant}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantInfoModal