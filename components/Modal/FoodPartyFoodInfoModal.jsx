'use client'

import React from 'react'
import FoodDescription from './FoodDescription';
import ImageAlbum from './ImageAlbum';
import PriceTag from './PriceTag';
import AddToCartBtn from './AddToCartBtn';
import FoodComments from './FoodComments';
import FoodPartyHeader from './FoodPartyHeader';
import CloseModal from './CloseModal';

function FoodPartyFoodInfoModal({isOpen,handleClose,food,foodCount}) {

    if (!isOpen) return null;

  return (
    <div >
        <div className='flex justify-center items-center fixed inset-0 z-[1000] animate-[0.3s_ease_0s_1_normal_forwards_running_modal-animation]' onClick={handleClose} >
        <div className=' bg-white shadow-shadows-modal rounded-xl max-h-[90vh] overflow-hidden animate-[0.3s_cubic-bezier(0.4,0,0,1.5)_0s_1_normal_forwards_running_modal-animation4]' onClick={(e)=>e.stopPropagation()}>

                <header className='py-3.5 px-[1.625rem] flex justify-between rounded-t-lg bg-food-party'>
                    <FoodPartyHeader/>
                </header>  
            <div className='relative box-border w-full h-14 pl-14 flex justify-between items-center'>
                <CloseModal handleClose={handleClose}/>
            </div>
            <div className='w-[35vw] min-w-[20rem] max-w-[45rem] max-h-[calc(90vh-4rem)] overflow-y-scroll flex flex-col laptop:w-[90vw]'>
                <div className='px-4 pb-4 flex justify-between flex-col laptop:flex-row'>
                    <ImageAlbum food={food} isOpen={isOpen}/>
                    <div className='w-auto flex justify-start flex-col laptop:w-[24rem]'>
                    <FoodDescription food={food}/>
                        <div className='flex flex-col'>
                            <div className=' w-full min-h-[3.5625rem] transition-all duration-300 flex justify-between items-center hover:bg-surface-main group'>
                                <PriceTag food={food}/>
                                <AddToCartBtn foodCount={foodCount} food={food}/>
                            </div>
                        </div>
                    </div>
                </div>
                <FoodComments food={food}/>
            </div>   
        </div>
        </div>
    </div>
  )
}

export default FoodPartyFoodInfoModal