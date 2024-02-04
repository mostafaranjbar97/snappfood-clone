'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import DeliveryInfoModal from '../Modal/DeliveryInfoModal';

function ReceiveTime() {

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
  )
}

export default ReceiveTime