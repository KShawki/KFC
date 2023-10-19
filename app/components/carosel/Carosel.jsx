'use client';
import './carosel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './carosel.css';

const slides = [
  { id: 1, text: 'Chililime', bgImage: '/slider/Chililime.jpeg' },
  { id: 2, text: 'Duetto', bgImage: '/slider/Duetto.jpeg' },
  { id: 3, text: 'Mega Rizo', bgImage: '/slider/MegaRizo.jpeg' },
];

const Slider = () => {
  return (
    <section id='slider' className='container'>
      <Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <img
                src={item.bgImage}
                width={1000}
                height={200}
                alt={item.text}
                className='photo-slider'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
