import React from 'react'
import FoodCard from './FoodCard'

function CategorySection({restaurant,cat}) {
  const restaurantfood= restaurant.foods.filter((food)=>food.categoryId.includes(cat.id))
  const isCouponCategory= cat.name == "کوپن‌ها"
  
  return (
    <>
    

          {isCouponCategory ? <section id={cat.id} className='scroll-mt-[4.375rem] p-4 box-border section'>
            <p className='h-12 text-carbon-main font-bold text-xs flex justify-center items-center font-iransans '>{cat.name}</p>
            <div className='box-border w-full flex flex-wrap min-h-[4.25rem] '>
              {
                restaurant.coupon.map((coupon,index)=>{
                  return(
                    <div key={index} className=' min-w-[102px] ml-4 shrink-0 h-full mb-3 text-inactive-dark first:text-carbon-main first:bg-white rounded-md bg-surface-main border-surface-dark border-border-xs first:border-accent2-main '>
                      <section className='box-border h-[3.25rem] py-2 px-3 rounded-md flex flex-col '>
                        <p className=' inline-block text-sm font-iransans'>{coupon.value}</p>
                        <p className=' inline-block text-xs font-iransans'>{coupon.title}</p>
                      </section>
                    </div>
                  )
                })
              }
            </div>
          </section> :
          <section id={cat.id} className='scroll-mt-[4.375rem] mt-8  first:mt-0 section'>
            <p className='h-12 text-carbon-light font-bold text-xs flex justify-center items-center font-iransans '>{cat.name}</p>
            <div className='border-border-xs border-surface-dark w-full box-border flex flex-wrap  '>
              {
                restaurantfood.map((food)=>{
                  return(
                    <FoodCard key={food.id} food={food} cat={cat} restaurant={restaurant}/>
                  )
                })
              }
            </div>
          </section>}
    </>
    


   
  )
}

export default CategorySection