'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';

// Import Swiper styles
import 'swiper/css';
import SliderCard from './SliderCard';
import { useCallback, useRef } from 'react';
import Image from 'next/image';

function Slider({restaurants})  {
    const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
    // console.log(sliderRef.current.swiper.activeIndex)
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    // console.log(sliderRef.current.swiper.activeIndex)
  }, []);

  return (
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
          slidesPerGroup: 1
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
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >

    {restaurants.map((res)=>{
      return(

        <SwiperSlide key={res.id}>
            <SliderCard restaurant={res}/>
          </SwiperSlide>
      )
    })}

      <div className="prev-arrow -left-6 absolute top-[55%] b-0 z-20 h-8 opacity-100 scale-100 transition-all ease-in-out duration-500 hidden laptop:block " onClick={handleNext} >
        <button className='inline-flex justify-center items-center box-border size-12 rounded-[50%] border-border-sm border-accent-alphaLight bg-white bg-clip-padding shadow-shadows-medium active:bg-accent-alphaMedium'>
            <Image width={9} height={16} src={"/icons/home/left-purple.svg"} alt="left" />
        </button>
      </div>
      <div className="next-arrow -right-6 absolute top-[55%] b-0 z-50 h-8 opacity-100 scale-100 transition-all ease-in-out duration-500 hidden laptop:block " onClick={handlePrev} >
        <button className='inline-flex justify-center items-center box-border size-12 rounded-[50%] border-border-sm border-accent-alphaLight bg-white bg-clip-padding shadow-shadows-medium active:bg-accent-alphaMedium'>
            <Image width={9} height={16} src={"/icons/home/right-purple.svg"}  alt="right"/>
        </button>
      </div>
    </Swiper>



  );
};

export default Slider