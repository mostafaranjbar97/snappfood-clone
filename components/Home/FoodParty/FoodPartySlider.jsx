'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';

// Import Swiper styles
import 'swiper/css';
import { useCallback, useRef } from 'react';
import Image from 'next/image';
import FoodPartyCard from './FoodPartyCard';

function FoodPartySlider()  {
    const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
    console.log(sliderRef.current.swiper.activeIndex)
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    console.log(sliderRef.current.swiper.activeIndex)
  }, []);

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
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    <SwiperSlide>
        <FoodPartyCard/>
    </SwiperSlide>
    <SwiperSlide>
    <FoodPartyCard/>
    </SwiperSlide>
    <SwiperSlide>
    <FoodPartyCard/>
    </SwiperSlide>
    <SwiperSlide>
    <FoodPartyCard/>
    </SwiperSlide>
    <SwiperSlide>
    <FoodPartyCard/>
    </SwiperSlide>
    <SwiperSlide>
    <FoodPartyCard/>
    </SwiperSlide>
        
   
    <div className="prev-arrow -left-3 absolute top-[45%] b-0 z-[30000] h-8 opacity-100 scale-100 transition-all duration-500 hidden laptop:block " onClick={handleNext} >
        <button className='inline-flex justify-center items-center box-border size-12 rounded-[50%] border-border-sm border-accent-alphaLight bg-white bg-clip-padding shadow-shadows-medium active:bg-accent-alphaMedium'>
            <Image width={9} height={16} src={"/icons/home/left-purple2.svg"} />
        </button>
      </div>
      <div className="next-arrow -right-3 absolute top-[45%] b-0 z-[30000] h-8 opacity-100 scale-100 transition-all duration-500 hidden laptop:block " onClick={handlePrev} >
        <button className='inline-flex justify-center items-center box-border size-12 rounded-[50%] border-border-sm border-accent-alphaLight bg-white bg-clip-padding shadow-shadows-medium active:bg-accent-alphaMedium'>
            <Image width={9} height={16} src={"/icons/home/right-purple.svg"} />
        </button>
      </div>
      
    </Swiper>    
    </div>
    



  );
};

export default FoodPartySlider