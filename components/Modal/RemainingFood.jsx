import { clsx } from 'clsx'
import React from 'react'

function RemainingFood({food}) {
  return (
    <>
        <div>
            <p className={clsx('mb-2 font-bold font-iransans text-sm inline-block',food.numberRemaining > 3 ? "text-carbon-main" : "text-alert-main" )}>{food.numberRemaining}</p>
            <p className={clsx('mb-2 font-iransans text-sm inline-block mr-1',food.numberRemaining > 3 ? "text-carbon-main" : "text-alert-main" )}>عدد باقی مانده</p>
        </div>
        <div className={clsx('mb-2 h-0.5 w-full',food.numberRemaining > 3 ? "bg-inactive-dark" : "bg-alert-light" )}></div>
    </>
  )
}

export default RemainingFood