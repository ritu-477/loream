import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCube, Pagination, Navigation } from 'swiper/modules';
import sliderImg from '../../assets/images/png/slider-image1.png';
import sliderImage from '../../assets/images/png/slider-image2.png';
import sliderImage3 from '../../assets/images/png/slider-image3.png';
import sliderImage4 from '../../assets/images/png/slider-image4.png';


export const PracticeSwiper = () => {
    return (
        <div className='pt-5'>
            <div className='container'>
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 0.1,
                        shadowScale: 0.9,
                    }}
                    navigation={true}
                    pagination={{ clickable: true }} 
                    modules={[EffectCube, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='w-100 max_w' src={sliderImg} alt="slider-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-100 max_w' src={sliderImage} alt="slider-image2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-100 max_w' src={sliderImage3} alt="slider-image3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-100 max_w' src={sliderImage4} alt="slider-image4" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}


