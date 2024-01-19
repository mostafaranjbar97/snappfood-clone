import React from 'react'
import CategoryItem from './CategoryItem'

function Category() {
  return (
    <div className='flex flex-col mb-16'>
        <p className='font-iransans font-bold text-base inline-block text-carbon-light mb-8'>دسته بندی ها</p>
        <div className='mb-8 box-border flex flex-wrap w-[calc(100%+2rem)] -m-4'>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
        </div>
    </div>
  )
}

export default Category