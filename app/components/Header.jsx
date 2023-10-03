'use client';

const Header = () => {
  return (
    <header id='header' className='bg-white w-full shadow-md'>
      <nav
        id='navbar'
        className='flex flex-row mx-auto w-[90%] h-[72px] items-center justify-between'>
          <img src='/icons/aside.svg' alt='open aside' />
          <img src='/icons/kfc-logo.svg' />
          <div className="icons"></div>
          <div className="location"></div>
          <div className="shopping"></div>
      </nav>
    </header>
  );
};

export default Header;
