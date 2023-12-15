'use client';
import Banners from './Banners';
import Bestsellers from './Bestsellers';
import Contact from './Contactless';
import ExpolreMenu from './ExploreMenu/ExpolreMenu';
import TopDeal from './TopDeals';
import './main.css';

const Main = () => {
  return (
    <main className='container'>
      <ExpolreMenu />
      <TopDeal />
      <Bestsellers />
      <Banners />
      <Contact />
    </main>
  );
};

export default Main;
