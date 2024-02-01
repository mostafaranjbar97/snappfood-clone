import React from 'react'
import Services from './Services'
import { fetchData } from '@/libs/fetchData'

async function Navbar() {

  const {services}= await fetchData()


  return (
    <>
        <Services services={services}/>
    </>
  )
}

export default Navbar