import React from 'react'
import FoodPartyItem from './FoodPartyItem'
import FoodPartyHeader from '../Modal/FoodPartyHeader'

function FoodPartySection({restaurant,cat}) {

    const foodPartyFood= restaurant.foods.filter((food)=>food.categoryId.includes(cat.id))
  return (
    <section className='mb-4 bg-white border-t-border-xs border-surface-dark rounded-t-lg '>
        <section id={cat.id} className='scroll-mt-[4.375rem] section'>
            <div className='py-3.5 px-[1.625rem] rounded-t-lg flex justify-between bg-food-party '>
                <FoodPartyHeader/>
            </div>

            <div className='border-t-border-xs border-surface-dark w-full flex flex-wrap'>
                {
                    foodPartyFood.map((food)=>{
                        return(
                            <FoodPartyItem key={food.id} food={food}/>
                        )
                    })
                }

            </div>
        </section>
    </section>
  )
}

export default FoodPartySection