import React from 'react';
import { useSwiper } from 'swiper/react';
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from 'react-icons/fa';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div
      className='swiper-nav-btns'
      style={{
        display: 'flex',
        position: 'relative',
        gap: '10px',
        marginTop: '20px',
      }}>
      <FaRegArrowAltCircleLeft onClick={() => swiper.slidePrev()} size={20} />
      <FaRegArrowAltCircleRight onClick={() => swiper.slideNext()} size={20} />
    </div>
  );
};
