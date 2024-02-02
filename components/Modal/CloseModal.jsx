import Image from 'next/image'
import React from 'react'

function CloseModal({handleClose}) {
  return (
    <button className='w-14 h-14 flex justify-center items-center' onClick={handleClose} >
        <Image width={14} height={14} src={"/icons/modal/exit-modal.svg"}  alt="close modal"/>
    </button>
  )
}

export default CloseModal