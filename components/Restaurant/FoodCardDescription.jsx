'use client'

import React from 'react'


function FoodCardDescription({food,handleOpen}) {

  return (
    <div className='px-4 cursor-pointer flex' onClick={handleOpen}>
        <div className='flex flex-col pt-4 pl-4 grow'>
            <h2 className='font-iransans font-bold text-base inline-block text-carbon-main'>{food.name}</h2>
            <strong className='mt-2 break-words font-iransans font-normal text-xs inline-block text-inactive-dark'>{food.desc}</strong>
        </div>
        <div className='relative shrink-0'>
            <img src={food.images[0]} alt={food.name} width={112} height={112} className='rounded-lg' />
        </div>
    </div>
  )
}

export default FoodCardDescription