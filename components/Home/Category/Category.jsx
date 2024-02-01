import React from 'react'
import CategoryItem from './CategoryItem'
import { fetchData } from '@/libs/fetchData'

async function Category() {

  const {restaurantCategory} = await fetchData()
  const categoryShowInHome=restaurantCategory.filter((cat)=>cat.isShowInHome==true)

  return (
    <div className='flex flex-col mb-16'>
        <p className='font-iransans font-bold text-base inline-block text-carbon-light mb-8'>دسته بندی ها</p>
        <div className='mb-8 box-border flex flex-wrap w-[calc(100%+2rem)] -m-4'>
          {categoryShowInHome.map((cat)=>{
            return(
              <CategoryItem key={cat.id} data={cat}/>
            )
          })}
           
        </div>
    </div>
  )
}

export default Category