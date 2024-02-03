'use client'
import React from 'react'
import CloseModal from './CloseModal'
import MapModal from './MapModal'
import { useDispatch, useSelector } from 'react-redux'
import { setHideMapModal } from '@/redux/features/ShowModalSlice'

function RestaurantMapModal({restaurants}) {

  const showModal=useSelector((store)=>store.showModal)
  const {isOpenMapModal,resIdMap}=showModal
  const dispatch=useDispatch()
  const handleClose=()=>{
    dispatch(setHideMapModal())
  }
  let restaurant
  if(isOpenMapModal){
    restaurant=restaurants.filter((res)=>res.id==resIdMap)[0]
  }
 
  if(!isOpenMapModal)return null;

  return (
    <div>
        <div className='flex justify-center items-center fixed inset-0 z-[1000] animate-[0.3s_ease_0s_1_normal_forwards_running_modal-animation]' onClick={handleClose}>
            <div className='w-[640px] bg-white shadow-shadows-modal rounded-xl max-h-[90vh] overflow-hidden animate-[0.3s_cubic-bezier(0.4,0,0,1.5)_0s_1_normal_forwards_running_modal-animation4]' onClick={(e)=>e.stopPropagation()}>
                <div className='relative box-border w-full h-14 pl-14 flex justify-between items-center'>
                    <CloseModal handleClose={handleClose} />
                    <p className='font-bold text-sm inline-block text-carbon-main'>{restaurant.name}</p>
                    <div></div>
                </div>
                <section className='relative'>
                    <MapModal restaurant={restaurant}/>
                </section>
            </div>
        </div>
    </div> 
  )
}

export default RestaurantMapModal