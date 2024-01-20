import BreadCrumbs from '@/components/Resturants/BreadCrumbs'
import Sort from '@/components/Resturants/Sort'
import React from 'react'

function Resturants() {
  return (
    <>
        <BreadCrumbs/>    
        <main className='p-6 box-border w-full grow max-w-[85.375rem] mx-auto'>
           <Sort/>
        </main>
    </>
  )
}

export default Resturants