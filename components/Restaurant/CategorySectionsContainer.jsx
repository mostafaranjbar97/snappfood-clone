'use client'
import React, { useEffect, useRef } from 'react'
import CategorySection from './CategorySection'
import FoodPartySection from './FoodPartySection'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'

function CategorySectionsContainer({restaurants}) {

  const selectedCategory=useSelector((store)=>store.categorySelected)


  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const sectionNode = listNode.querySelectorAll('.section')[index];
    sectionNode.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  
  useEffect(()=>{
    scrollToIndex(selectedCategory-1)
  },[selectedCategory])

  
  const params=useParams()
  const restaurant=restaurants.filter((res)=>res.id==Number(params.restaurant))[0]
  const hasFoodParty=restaurant.restCatsMenu.some((cat)=>cat.name=="فودپارتی")
  console.log(hasFoodParty)
  return (
    <section className='bg-white border-border-xs border-surface-dark rounded-lg ' ref={listRef}>
        {/* {hasFoodParty && <FoodPartySection cat={1} restaurant={restaurant}/>} */}
        {restaurant.restCatsMenu.map((cat,index)=>{
          if(index==0 && hasFoodParty){
            return(
              <FoodPartySection key={index} cat={cat} restaurant={restaurant}/>
            )}else{
              return(
                <CategorySection  key={index} cat={cat} restaurant={restaurant}/>
              )
            }
          }
      )}
    </section>
  )
}

export default CategorySectionsContainer