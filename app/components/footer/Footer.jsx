'use client';
import './footer.css';

const Footer = () => {
  const menu = [
    { title: 'Menu', href: '#' },
    { title: 'Store Locations', href: '#' },
    { title: 'Order', href: '#' },
    { title: 'Privacy Policy', href: '#' },
    { title: 'Terms & Conditions', href: '#' },
    { title: 'Contact', href: '#' },
  ];

  const social = [
    { icon: '/social/fb.svg', href: 'fb.com/kfc' },
    { icon: '/social/x.svg', href: 'x.com/kfc' },
    { icon: '/social/insta.svg', href: 'instagram.com/kfc' },
  ];

  return (
    <>
      <footer className='container'>
        <div>
          <img src='/icons/kfc-white.svg' alt='kfc logo' />
        </div>
        <div className='footer_availblity'>
          Items availability, prices, participation, delivery areas and charges,
          purchase requirements for delivery may vary.
        </div>
        <div>
          <ul>
            {menu.map((item, index) => {
              return (
                <li className='footer-menu-li' key={index}>
                  <a href={item.href} className=''>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='social'>
          <ul>
            {social.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href} target='_blank'>
                    <img src={item.icon} alt='' width={18} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='copyrights'>©KFC, Inc. All rights reserved.</div>
        <div className='footer-badge'>
          <img src='/icons/kfc-footer.svg' alt='' />
        </div>
      </footer>
    </>
  );
};

export default Footer;
