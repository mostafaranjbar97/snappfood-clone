
import CategorySectionsContainer from '@/components/Restaurant/CategorySectionsContainer'
import RestaurantSideBar from '@/components/Restaurant/RestaurantSideBar'
import React from 'react'

function Resturants() {
  return (
    
        <main className='pt-[4.25rem] px-4 pb-4 grow box-border w-full max-w-[85.375rem] mx-auto'>
           <div className='box-border w-[calc(100%+2rem)] -m-4 flex flex-wrap'>
                <RestaurantSideBar/>
                <section className='max-w-full basis-full box-border p-4 tablet:max-w-[50%] tablet:basis-6/12 ' >
                    <CategorySectionsContainer/>
                </section>
           </div>
        </main>
    
  )
}

export default Resturants