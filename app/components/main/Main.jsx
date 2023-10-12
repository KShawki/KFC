'use client';
import Banners from './Banners';
import Contact from './Contactless';
import Heading from './Heading';
import './main.css';

const Main = () => {
  return (
    <main className='container '>
      <Heading title='EXPLORE MENU' img='/icons/explore-menu.png' />
      <div className='media-grid border'>
        <div className='mediaContainer'></div>
        <div className='pagination'></div>
      </div>

      <Banners />
      <Contact />
    </main>
  );
};

export default Main;
