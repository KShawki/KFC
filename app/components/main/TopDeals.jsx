'use client';
import Heading from './Heading';
import './topDeal.css';

const topDealData = [
  {
    title: 'Dinner Plus',
    description: '3 COB + 1 Fries + 1 Coleslaw + 1 Rizo',
    oldPrice: '200 EGP',
    price: '182 EGP',
    img: '/top/Combo.png',
  },
  {
    title: 'Mix & Match',
    description: '3 pcs of Chicken + Fries + Coleslaw + Zinger OR Twister',
    oldPrice: '190 EGP',
    price: '174 EGP',
    img: '/top/202-Combo.png',
  },
  {
    title: 'Mighty Plus',
    description: 'Mighty Zinger Sandwich + Rizo + Coleslaw+ Drink',
    oldPrice: '243 EGP',
    price: '203 EGP',
    img: '/top/66-Combo.png',
  },
  {
    title: 'Mega Rizo',
    description: '1 Rizo + 3 pcs of Strips + Sauce',
    oldPrice: '190 EGP',
    price: '125 EGP',
    img: '/top/148-Combo.png',
  },
  {
    title: '4X4 Meal',
    description:
      'Mighty Zinger sandwich + Zinger Sandwich + Twister Sandwich + Supreme Sandwich +...',
    oldPrice: '420 EGP',
    price: '373 EGP',
    img: '/top/23-Combo.png',
  },
  {
    title: 'PUBG Box',
    description:
      '1 Pochinki Twister +1 Drink + 1 Chicken Piece + Rice + Colelslaw',
    oldPrice: '160 EGP',
    price: '143 EGP',
    img: '/top/201-Combo.png',
  },
];

const TopDeal = () => {
  return (
    <section style={{ margin: '10px 0' }}>
      <Heading title='Top Deals' img='/icons/top-deals.png' />

      <div className='topDeals-container '>
        {topDealData.map((item, index) => (
          <div className='top-deal-card' key={index}>
            {/* photo */}
            <div className='thumbnail'>
              <img
                src={item.img}
                width={210}
                height={210}
                alt={item.title}
                quality={100}
              />
            </div>
            {/* Favorite Icon */}
            <div className='fav-icon'>
              <img src='/icons/favorite.svg' alt='favorite' />
            </div>
            {/* Title */}
            <div className='title-style'>
              <h3 className='title'>{item.title}</h3>
            </div>
            {/* Description */}
            <div className='description'>
              {item.description}
            </div>
            {/* Price */}
            {/* Add To Cart */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDeal;
