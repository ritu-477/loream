import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import sliderImg from '../../assets/images/png/slider-image1.png';
import sliderImage from '../../assets/images/png/slider-image2.png';
import sliderImage3 from '../../assets/images/png/slider-image3.png';
import sliderImage4 from '../../assets/images/png/slider-image4.png';


const EffectSlider = () => {
  return (
      <div className='py-5'>
          <div className='container'>
              <Swiper
                  grabCursor={true}
                  effect={'creative'}
                  creativeEffect={{
                      prev: {
                          shadow: false,
                          translate: [0, 0, -400],
                      },
                      next: {
                          translate: ['100%', 0, 0],
                      },
                  }}
                  modules={[EffectCreative, Pagination, Navigation]}
                  className="mySwiper"
                  navigation={true}
                  pagination={{ clickable: true }}
              >
                  <SwiperSlide>  <img className='w-100 max_w' src={sliderImg} alt="slider-image" /></SwiperSlide>
                  <SwiperSlide><img className='w-100 max_w' src={sliderImage} alt="slider-image2" /></SwiperSlide>
                  <SwiperSlide><img className='w-100 max_w' src={sliderImage3} alt="slider-image3" /></SwiperSlide>
                  <SwiperSlide><img className='w-100 max_w' src={sliderImage4} alt="slider-image4" /></SwiperSlide>
              </Swiper>
           </div>
    </div>
  )
}

export default EffectSlider