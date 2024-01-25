'use client'
import React from 'react'
import CategorySection from './CategorySection'
import FoodPartySection from './FoodPartySection'
import { useParams } from 'next/navigation'

function CategorySectionsContainer({restaurants}) {

  const params=useParams()
  const restaurant=restaurants.filter((res)=>res.id==Number(params.restaurant))[0]
  const hasFoodParty=restaurant.restCatsMenu.some((cat)=>cat.name=="فودپارتی")
  console.log(hasFoodParty)
  return (
    <section className='bg-white border-border-xs border-surface-dark rounded-lg '>

        {hasFoodParty && <FoodPartySection cat={1} restaurant={restaurant}/>}
        {restaurant.restCatsMenu.map((cat,index)=>{
          return(
            <CategorySection key={index} cat={cat} restaurant={restaurant}/>
          )
        })
      }
    </section>
  )
}

export default CategorySectionsContainer