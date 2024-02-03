import { addResIdToMap, setShowMapModal } from '@/redux/features/ShowModalSlice';
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux';
import Map from './Map';

function MapContainer({restaurant}) {
    const dispatch = useDispatch();
    const handleOpen = () => {
        dispatch(addResIdToMap(restaurant.id))
        dispatch(setShowMapModal())
    };
  return (
    <section className='min-w-[11.5rem]  h-24 overflow-hidden bg-surface-dark rounded-lg mx-auto'>
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
  )
}

export default MapContainer