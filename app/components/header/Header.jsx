'use client';
import './header.css';

const Header = () => {
  return (
    <header className='' id='header'>
      <nav className='container nav '>
        {/* Aside Bar */}
        <div className='flex'>
          <img src='/icons/aside.svg' alt='' width={32} />
        </div>
        {/* Logo */}
        <div className='flex'>
          <img src='/icons/kfc-logo.svg' alt='' width={64} />
        </div>
        {/* Orders Mode */}
        <div className='orderModes flex'>
          <button>
            <img src='/icons/delivery_grey.png' alt='delivery' width={30} />
            <span>Delivery</span>
          </button>
          <button>
            <img src='/icons/delivery_grey.png' alt='delivery' width={30} />
            <span>Self-Pickup</span>
          </button>
          <button>
            <img src='/icons/delivery_grey.png' alt='delivery' width={30} />
            <span>Dine-In</span>
          </button>
        </div>

        {/* Divider */}
        <div className='divider'>
          <hr className='divider-vertical' />
        </div>

        <div className='right-menu-contianer flex justify-between'>
          {/* Address Selector */}
          <div className='addressSelector'>
            <a href='' className='selectLocation flex'>
              <img src='/icons/location.svg' alt='location icon' />
              <div className='addressContent'>
                <div className='titleArea'>
                  <h3 className='bold'>SELECT LOCATION</h3>
                  <span className='bg-blue flex items-center'>
                    <span>SELECT</span>
                    <img
                      src='/icons/select-down.svg'
                      width={10}
                      style={{ marginLeft: '5px', fontSize: '0.8rem' }}
                      alt=''
                    />
                  </span>
                </div>
                <p className='description'>
                  Get accurate pricing and menu listing
                </p>
              </div>
            </a>
          </div>

          {/* Right Menu */}
          <div className='right-menu flex items-center justify-between'>
            <div className='cart-container'>
              <img src='/icons/cart.svg' width={32} />
              <span className='cart-count'>0</span>
            </div>
            <button className='btn arabic'>عربي</button>
            <button className='btn login'>LOGIN</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
