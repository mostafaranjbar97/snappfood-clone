import React from 'react'
import CategorySection from './CategorySection'
import FoodPartySection from './FoodPartySection'

function CategorySectionsContainer() {
  return (
    <section className='bg-white border-border-xs border-surface-dark rounded-lg '>
        <FoodPartySection/>
        <CategorySection/>
        <CategorySection/>
    </section>
  )
}

export default CategorySectionsContainer