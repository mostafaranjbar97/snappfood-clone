import React from 'react'
import CommentItem from './CommentItem'

function FoodComments({food}) {
  return (
    <>
        {food.foodsComments.length>0 &&<div className='p-4 flex justify-between'>
            <p className='font-iransans font-bold text-base inline-block text-carbon-light'>نظرات کاربران</p>
        </div>}
        <div className='flex flex-col'>
            {
                food.foodsComments.map((comment)=>{
                    return(
                        <CommentItem key={comment.id} comment={comment}/>
                    )
                })
            }
        </div>
    </>
  )
}

export default FoodComments