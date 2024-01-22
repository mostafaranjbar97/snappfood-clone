import React from 'react'
import CategorySection from './CategorySection'

function CategorySectionsContainer() {
  return (
    <section className='bg-white border-border-xs border-surface-dark rounded-lg first:mt-0'>
        <CategorySection/>
        <CategorySection/>
    </section>
  )
}

export default CategorySectionsContainer