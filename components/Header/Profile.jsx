'use client'
import React, { useEffect, useRef, useState } from 'react'
import UserModal from '../Modal/UserModal'
import Image from 'next/image'

function Profile() {

    const [isOpen, setOpen] = useState(false);
    const modalRef = useRef();
 
    const handleClose = (e) => {

            setOpen(false)

    };
     // Define a function to handle outside click
  const handleOutsideClick = (e) => {
    // Check if the click target is the modal element or its children
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      // If not, close the modal
      handleClose();
    }
  };

  // Use useEffect to add and remove the event listener
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
        setOpen(!isOpen);
    };

  return (
    <>
        <div className='hidden' onClick={handleClose}></div>
        <div className='p-4 cursor-pointer select-none flex laptop:ml-[0.5625rem]' onClick={handleOpen}>
            <Image width={20} height={20} src={"/icons/header/user.svg"} alt='user' className='ml-2'/>
        </div>
        <div className='relative w-0 h-0 laptop:ml-[0.5625rem] usermodal'>
            {isOpen && <UserModal modalRef={modalRef}/>}
        </div>
    </>
  )
}

export default Profile