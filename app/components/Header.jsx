'use client';

import Button from './assets/Button';
import Container from './assets/Container';

const SelectLocation = () => {
  return (
    <div className='flex flex-row items-center bg-[#dfefff4d] border-[0.1rem] px-[1rem] py-[0.8rem] rounded border-[#dfefff]'>
      <img src='/icons/location.svg' className='-mt-2' />
      <div className='flex flex-col justify-between ml-2 -mb-1'>
        <div className='flex flex-row justify-between items-center'>
          <span className='font-medium uppercase text-[1.2rem] text-[#393f52]'>
            Select Location
          </span>
          <button className='flex items-center justify-between bg-blue-500 px-[6px] py-[0.5px] font-medium text-white uppercase rounded-sm'>
            <span>select</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='8'
              height='8'
              fill='none'
              viewBox='0 0 8 8'
              className='ml-1'>
              <path
                fill='#fff'
                d='M4 4.464L6.146 2.318a.5.5 0 01.708.707l-2.5 2.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 01.708-.707L4 4.464z'
              />
            </svg>
          </button>
        </div>
        <p className='text-[1.2rem] tracking-tight text-[#393f52b3] -mt-1'>
          Get accurate pricing and menu listing
        </p>
      </div>
    </div>
  );
};

const Header = () => {
  const HeaderIcons = [
    {
      href: '/',
      title: 'Delivery',
      img: '/icons/delivery_grey.png',
      alt: 'Delivery Icon',
    },
    {
      href: '/',
      title: 'Self-Pickup',
      img: '/icons/self_pickup_grey.png',
      alt: 'Delivery Icon',
    },
    {
      href: '/',
      title: 'Dine-in',
      img: '/icons/dine_in_grey.png',
      alt: 'Delivery Icon',
    },
  ];

  return (
    <header id='header' className='bg-white w-full shadow-md'>
      <Container>
        <nav
          id='navbar'
          className='flex flex-row h-[72px] items-center justify-start gap-3 divide-x-1'>
            <img src='/icons/aside.svg' alt='open aside' />
            <img src='/icons/kfc-logo.svg' />
            <div className='icons flex gap-2'>
              {HeaderIcons.map((item) => (
                <Button
                  href={item.href}
                  img={item.img}
                  title={item.title}
                  alt={item.alt}
                />
              ))}
            </div>
          <div className='location border-l-3 border-gray-900 ml-2'>
            <SelectLocation />{' '}
          </div>
          <div className='shopping'></div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
