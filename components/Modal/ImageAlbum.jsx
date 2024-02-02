'use client'
import clsx from 'clsx'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function ImageAlbum({food,isOpen}) {

    const [showImg,setShowImg]=useState()

    useEffect(()=>{
        if (isOpen) {
        setShowImg(food.images[0])
        }
    },[isOpen])

    const albumHandler=(e)=>{
        setShowImg(e.target.src)
    }
  return (
    <div className='max-w-[17.5rem]'>
        <Image alt={food.name} width={280} height={280} src={showImg} className='rounded-lg '/>
        <div className='flex flex-wrap'>
            {
                food.images.length>1 && food.images.map((img,index)=>{
                    return(
                        <div key={index} id={index} className='mt-1.5 ml-2 cursor-pointer' onClick={albumHandler}>
                            <Image alt={food.name} width={40} height={40} src={img} className={clsx('rounded-lg ',showImg==img ? "opacity-100" : "opacity-70")} />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ImageAlbum