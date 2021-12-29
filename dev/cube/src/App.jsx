
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";



// import Swiper core and required modules
import SwiperCore, {
  EffectCube,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCube,Pagination]);


export default function App() {
  
  
  
  return (
    <>
    <Swiper effect={'cube'} grabCursor={true} cubeEffect={{
  "shadow": true,
  "slideShadows": true,
  "shadowOffset": 20,
  "shadowScale": 0.94
}} pagination={true} className="mySwiper">
  <SwiperSlide><img src="/1.jpg" /></SwiperSlide><SwiperSlide><img src="/2.jpg" /></SwiperSlide><SwiperSlide><img src="/3.jpg" /></SwiperSlide><SwiperSlide><img src="/4.jpg" /></SwiperSlide>
  </Swiper>
    </>
  )
}