'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import FoodPartyCard from './FoodPartyCard';
import { clearCart } from '@/redux/features/CartSlice';
import { useDispatch } from 'react-redux';

function FoodPartySlider({restaurants})  {
    const sliderRef = useRef(null);
    const [isFirst,setIsFirst]=useState(false)
    const [isLast,setIsLast]=useState(false)
    const dispatch = useDispatch();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  useEffect(()=>{
    setIsFirst(sliderRef.current.swiper.isBeginning)
    setIsLast(sliderRef.current.swiper.isEnd)
    },[sliderRef])
  
    const foods=restaurants.map((res)=>res.foods)
    const food=foods.flat()
    const offtime=food.filter((food)=>food.numberRemaining!=="")
    
    const resetCart=()=>{
      dispatch(clearCart())
   }

   useEffect(()=>{resetCart()},[])
  return (

    <div className='w-full tablet:w-4/5 relative'>
        <Swiper  
      ref={sliderRef}

      spaceBetween={16}

      breakpoints={{
        350: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        960: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        1280: {
          slidesPerView: 4,
          slidesPerGroup: 4
        },
      }}
      onReachBeginning={()=>{
        setIsFirst(true)
      }}
      onReachEnd={()=>{
        setIsLast(true)
      }}
      onRealIndexChange={()=>{
        if (isFirst){
          setIsFirst(false)
        }
        if (isLast){
          setIsLast(false)
        }
      }}
    >

  {offtime.map((food,index)=>{
            return(
              <SwiperSlide  key={index}>
                  <FoodPartyCard food={food} restaurants={restaurants} />
              </SwiperSlide>
            )
        })}

      
      
    </Swiper>   
    {! isLast &&<div className="prev-arrow -left-3 absolute top-[45%] b-0 z-10 h-8 opacity-100 scale-100 transition-all ease-in-out duration-500 hidden laptop:block " onClick={handleNext} >
        <button className='inline-flex justify-center items-center box-border size-12 rounded-[50%] border-border-sm border-accent-alphaLight bg-white bg-clip-padding shadow-shadows-medium active:bg-accent-alphaMedium'>
            <Image width={9} height={16} src={"/icons/home/left-purple2.svg"} alt="left" />
        </button>
      </div>}
      {! isFirst && <div className="next-arrow -right-3 absolute top-[45%] b-0 z-10 h-8 opacity-100 scale-100 transition-all ease-in-out duration-500 hidden laptop:block " onClick={handlePrev} >
        <button className='inline-flex justify-center items-center box-border size-12 rounded-[50%] border-border-sm border-accent-alphaLight bg-white bg-clip-padding shadow-shadows-medium active:bg-accent-alphaMedium'>
            <Image width={9} height={16} src={"/icons/home/right-purple.svg"} alt="right"/>
        </button>
      </div>} 
    </div>
    



  );
};

export default FoodPartySlider