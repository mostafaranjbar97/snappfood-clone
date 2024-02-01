'use client'
import React, { useEffect, useRef } from 'react'
import CategorySection from './CategorySection'
import FoodPartySection from './FoodPartySection'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { setIsVisibleSection } from '@/redux/features/IsVisibleSectionSlice'
import Image from 'next/image'
import FoodCard from './FoodCard'

function CategorySectionsContainer({restaurants}) {
  const params=useParams()
  const restaurant=restaurants.filter((res)=>res.id==Number(params.restaurant))[0]
  const hasFoodParty=restaurant.restCatsMenu.some((cat)=>cat.name=="فودپارتی")

  const {searchTerm,results}=useSelector((store)=>store.searchModal)
  const searchParams = useSearchParams()
  const getSearch = searchParams.get("search")
  const dispatch = useDispatch();


  const selectedCategory=useSelector((store)=>store.categorySelected)


  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const sectionNode = listNode.querySelectorAll('.section')[index];
    if(!getSearch){
      sectionNode.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }

  }
  
  useEffect(()=>{
    scrollToIndex(selectedCategory-1)
  },[selectedCategory])

  useEffect(() => {
    const targetSections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries) => {
      // console.log(entries);
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

  useEffect(() => {
    const targetSections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries) => {
      // console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting ) {
          dispatch(setIsVisibleSection(entry.target.getAttribute("id")))
        }
      });
    },{
      
      rootMargin: "-40%"
});

    targetSections.forEach((section) => {
      observer.observe(section);
    });
  }, []);


  // console.log(hasFoodParty)
  return (
    <section className='bg-white border-border-xs border-surface-dark rounded-lg ' ref={listRef}>
        
        {(getSearch && results.length>0) && <section className='scroll-mt-[4.375rem]'>
          <div className='my-5 mr-[1.59375rem] flex justify-start items-center font-iransans +3text-base text-carbon-main'>
            <Image width={9} height={16} src={"/icons/restaurant/right.svg"} className='ml-[1.59375rem]'/>
            نتایج برای
            <p className='font-iransans font-bold text-base text-carbon-main inline-block'>«{searchTerm}»</p>
          </div>
          <div className='border-t-border-xs border-t-surface-dark box-border w-full flex flex-wrap'>
            {
              results.map((food)=>{
                return(
                  <FoodCard key={food.id} food={food} cat={0} restaurant={restaurant}/>
                )
              })
            }
          </div>
        </section>}
        {
          (getSearch && results.length==0)&& 
          <div className='flex items-center justify-center flex-col'>
            <div className='h-[50vh] flex items-center justify-center flex-col'>
              <Image width={160} height={160} src={"/icons/restaurant/not-found.svg"}/>
              <p className='font-iransans text-sm text-inactive-dark my-4 inline-block'>هیچ نتیجه‌ای یافت نشد!</p>
            </div>
          </div>
        }
        {!getSearch && 
        <>
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
        </>
        }
        
    </section>
  )
}

export default CategorySectionsContainer