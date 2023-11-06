'use client';
import Banners from './Banners';
import Bestsellers from './Bestsellers';
import Contact from './Contactless';
import TopDeal from './TopDeals';
import './main.css';

const Main = () => {
  return (
    <main className='container '>
      <TopDeal />
      <Bestsellers />
      <Banners />
      <Contact />
    </main>
  );
};

export default Main;
