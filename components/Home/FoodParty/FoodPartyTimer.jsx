'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function FoodPartyTimer() {

    const [day, setDay] = useState(0)
    const [hour, setHour] = useState(0)
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)

    
    
    const timer=()=>{
        let tomorrow=new Date();
        tomorrow.setHours(24,0,0,0);
        let now = Date.now();
        let gap=tomorrow.getTime()- now
        let second=1000;
        let minute=second*60;
        let hours = minute*60;
        let days=hours*24;
        setDay(Math.floor(gap / days))
        setHour(Math.floor((gap % days) / hours))
        setMin(Math.floor((gap % hours) / minute))
        setSec(Math.floor((gap % minute) / second))
      }

      useEffect(() => {
        let interval  = setInterval(() => timer(), 1000);
        return () => clearInterval(interval);
      }, []);

  return (

            <div className='min-w-[2.625rem] ml-1.5 pt-0.5 drop-shadow-[rgba(0,0,0,0.24)_0px_1px_0px] flex justify-center'>
                <span className='w-6 text-center font-iransans font-bold text-lg text-white inline-block'>{sec}</span>
                <span className='w-2 text-center font-iransans font-bold text-lg text-white inline-block'>:</span>
                <span className='w-6 text-center font-iransans font-bold text-lg text-white inline-block'>{min}</span>
                <span className='w-2 text-center font-iransans font-bold text-lg text-white inline-block'>:</span>
                <span className='w-6 text-center font-iransans font-bold text-lg text-white inline-block'>{hour}</span>
            </div>

  )
}

export default FoodPartyTimer