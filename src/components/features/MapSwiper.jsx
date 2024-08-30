import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SWIPER_DATA } from '../../common/Helper';

const MapSwiper = () => {
    return (
        <div className="py-5">
            <div className="container">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mymapSwiper"
                >
                    {SWIPER_DATA.map((item, index) => (
                        <SwiperSlide key={index} className="d-flex flex-column align-items-center">
                            <div className="card_box w-100 text-center">
                                <img width={60} src={item.icon} alt="icon" />
                                <h3 className="map_heading">{item.heading}</h3>
                                <p className="mb-0 map_para">
                                    {item.parapgraph} <span className="read_more">{item.read}</span>
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default MapSwiper;
