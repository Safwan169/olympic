/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import './styles.css';

import image1 from '../../../public/images/product/image1.png';
import image2 from '../../../public/images/product/image2.png';
import image3 from '../../../public/images/product/image3.png';
import image4 from '../../../public/images/product/image4.png';
import image5 from '../../../public/images/product/image5.png';
import image6 from '../../../public/images/product/image6.png';
import image7 from '../../../public/images/product/image7.png';
import image8 from '../../../public/images/product/image8.png';
import image9 from '../../../public/images/product/image9.png';
import image10 from '../../../public/images/product/image10.png';
import image11 from '../../../public/images/product/image11.png';
import image12 from '../../../public/images/product/image12.png';
import image13 from '../../../public/images/product/image13.png';

const ProductSlider = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13];

  return (
    <div style={{ width: '100%', margin: '0 auto', padding: '10px' }}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 4 },
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 10 },
        }}
        loop={true}
        speed={2000} 
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        style={{ width: '100%' }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
