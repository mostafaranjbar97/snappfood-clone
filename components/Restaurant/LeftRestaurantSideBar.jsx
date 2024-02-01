'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import DeliveryInfoModal from '../Modal/DeliveryInfoModal'
import Cart from './Cart'
import { useParams } from 'next/navigation'

function LeftRestaurantSideBar({restaurants}) {

    const params=useParams()
    const restaurant=restaurants.filter((res)=>res.id==Number(params.restaurant))[0]
    const {delivery}=restaurant

    const [isOpen, setOpen] = useState(false);
 
    const handleClose = (e) => {
         setOpen(false);
    };

    const modalRef = useRef();

    const handleOutsideClick = (e) => {
        // Check if the click target is the modal element or its children
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          // If not, close the modal
          handleClose();
        }
      };

    useEffect(() => {
        // Add the event listener when the modal is open
        if (isOpen) {
          document.addEventListener("click", handleOutsideClick);
        }
    
        // Remove the event listener when the modal is closed
        return () => {
          document.removeEventListener("click", handleOutsideClick);
        };
      }, [isOpen]); // Only re-run when showModal changes
 
    const handleOpen = () => {
        setOpen(true);
    };

  return (
    <aside className='max-w-full basis-full box-border p-4 laptop:max-w-[25%] laptop:basis-3/12' >
        <div className='sticky top-[5.5rem] transition-[top]'>
            <div className='w-full' >
                <div className='mb-2 px-3 py-3.5 bg-white border border-carbon-alphaLight rounded-lg flex justify-between items-center'>
                    <div className='flex items-center justify-center' >
                        <Image width={20} height={20} src={"/icons/restaurant/fast-time.svg"} alt="time" className='ml-4'/>
                        <p className='font-iransans text-xs inline-block text-carbon-main'>دریافت در سریع‌ترین زمان ممکن</p>
                    </div>
                    <div className='size-5 cursor-pointer flex items-center justify-center' onClick={handleOpen}>
                        <Image width={12} height={16} src={"/icons/restaurant/bottom-green.svg"}  alt="Green bar" />
                    </div>
                </div>
                {isOpen && <DeliveryInfoModal modalRef={modalRef} handleClose={handleClose}/>}
            </div>
            <div className='mb-2 px-3 py-1 bg-white border border-carbon-alphaLight rounded-lg flex '>
                <div className='flex items-center justify-between grow shrink basis-0 py-3' >
                    <div className='flex items-center'>
                        {delivery.type== "اسنپ‌اکسپرس" ? <Image width={20} height={20} src={"/icons/restaurant/delivery-express.svg"} alt="express" className='ml-4'/> 
                        : <Image width={20} height={20} src={"/icons/restaurant/delivery-courier.svg"} alt="courier" className='ml-4'/> }
                        <p className='font-iransans text-xs inline-block text-carbon-main'>{delivery.type}</p> 
                        <span className='mr-1 font-iransans text-xs font-bold inline-block text-carbon-main'>{delivery.price}</span>
                        <span className='mr-1 font-iransans text-xs  inline-block text-carbon-main'>تومان</span>
                    </div>
                </div>
            </div>
            <Cart delivery={delivery}/>
        </div>
    </aside>
  )
}

export default LeftRestaurantSideBar