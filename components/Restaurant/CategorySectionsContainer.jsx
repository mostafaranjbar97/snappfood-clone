'use client'
import React, { useEffect, useRef } from 'react'
import CategorySection from './CategorySection'
import FoodPartySection from './FoodPartySection'
import { useParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { setIsVisibleSection } from '@/redux/features/IsVisibleSectionSlice'

function CategorySectionsContainer({restaurants}) {
  const dispatch = useDispatch();


  const selectedCategory=useSelector((store)=>store.categorySelected)


  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const sectionNode = listNode.querySelectorAll('.section')[index];
    sectionNode.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }
  
  useEffect(()=>{
    scrollToIndex(selectedCategory-1)
  },[selectedCategory])

  useEffect(() => {
    const targetSections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting ) {
          dispatch(setIsVisibleSection(entry.target.getAttribute("id")))
        }
      });
    },{
      
      rootMargin: "-50% -50%"
});

    targetSections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

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