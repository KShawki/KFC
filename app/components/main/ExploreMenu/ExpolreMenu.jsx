import Link from 'next/link';
import Image from 'next/image';

import './exploreMenu.css';
import { useRef } from 'react';
import Heading from '../Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperNavButtons } from './NavButtons';



const menu = [
  {
    img: '/Exclusive_Deals.png',
    title: 'EXCLUSIVE OFFERS',
    exclusive: true,
  },
  {
    img: '/For_One.png',
    title: 'for one',
  },
  {
    img: '/For_Sharing.png',
    title: 'for sharing',
  },
  {
    img: '/Sides.png',
    title: 'Sides & Desserts',
  },
  {
    img: '/Beverages.png',
    title: 'Beverages',
  },
];

const ExploreMenu = () => {
  const swiperRef = useRef(null);

  return (
    <section style={{ marginBottom: '100px', position: 'relative' }}>
      <Heading title='EXPLORE MENU' img='/icons/explore-menu.png' />
      <Swiper
        cssMode={true}
        navigation={false}
        pagination={false}
        slidesPerView={5}
        spaceBetween={40}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='mySwiper'
        style={{ position: 'relative', marginTop: '20px' }}
        ref={swiperRef}>
        {menu.map((item, index) => (
          <SwiperSlide key={index} style={{background: 'transparent'}}>
            <Link href='#'>
              <img src={`/explore-menu${item.img}`} width={80} height={80} />
            </Link>
            <p
              style={{
                height: "20px",
                display: "flex",
                alignItems: "center", 
                justifyContent: "center", 
                marginTop: "12px",
                textTransform: "capitalize", 
                fontWeight: "bold", 
                fontSize: "14px",
                color: `${item.exclusive ? 'white' : 'black'}`,
                background: `url(${item.exclusive ? `/explore-menu/bggg.png` : "none"}) center / cover`,
              }}
            >{item.title}</p>
          </SwiperSlide>
        ))}
        {/* <SwiperNavButtaons /> */}
      </Swiper>
    </section>
  );
};

export default ExploreMenu;
