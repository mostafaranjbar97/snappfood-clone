import React from 'react'
import RestaurantInfo from './RestaurantInfo'
import VendorDetail from './VendorDetail'

function RestaurantInfoModal() {
  return (
    <div>
        <div className='flex justify-center items-center fixed inset-0 z-[1000] animate-[0.3s_ease_0s_1_normal_forwards_running_modal-animation]'>
            <div className=' bg-white shadow-shadows-modal rounded-xl max-h-[90vh] overflow-hidden animate-[0.3s_cubic-bezier(0.4,0,0,1.5)_0s_1_normal_forwards_running_modal-animation4]'>
                <div className=' flex flex-col w-[45rem]'>
                    <RestaurantInfo/>
                    <VendorDetail/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantInfoModal