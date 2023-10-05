'use client';
import Link from 'next/link';
import Container from './assets/Container';

// Icons

const Footer = () => {
  const pages = [
    { title: 'Menu', href: 'https://google.com' },
    { title: 'Store Locations', href: 'https://google.com' },
    { title: 'Bulk Order', href: 'https://google.com' },
    { title: 'Privacy Policy', href: 'https://google.com' },
    { title: 'Terms & Conditions', href: 'https://google.com' },
    { title: 'Contact', href: 'https://google.com' },
  ];

  const social = [
    { icon: '/social/fb.svg', href: 'https://fb.com/kfc' },
    { icon: '/social/x.svg', href: 'https://x.com/kfc' },
    { icon: '/social/insta.svg', href: 'https://www.instagram.com/kfc' },
  ];

  return (
    <>
      <Container>
        {/* delete mt-10 */}
        <footer className='bg-[#393f52] flex flex-col items-center gap-[2.5rem] p-[2.5rem] px-[2.5rem] pb-[4rem] mt-10'>
          {/* Logo */}
          <div>
            <img
              src='/icons/kfc-white.svg'
              width={66}
              alt='KFC Logo'
              className=''
            />
          </div>
          {/* Description */}
          <div className='w-[50%] leading-[1.9rem] text-white font-400 text-center mx-0 my-auto opacity-50'>
            <p className='text-[1.2rem]'>
              Items availability, prices, participation, delivery areas and
              charges, purchase requirements for delivery may vary.
            </p>
          </div>
          {/* Links */}
          <ul className='w-[80%] flex text-white flex-row justify-between px-16'>
            {pages.map((page) => (
              <Link href={page.href} key={page.title}>
                <li className='text-xl font-400 text-[1.5rem]'>{page.title}</li>
              </Link>
            ))}
          </ul>
          {/* Social Media */}
          <div className='w-[20%] mx-auto flex items-center' id='social'>
            <ul className='w-[100%] flex items-center justify-center'>
              {social.map((item) => (
                <a href={item.href} key={item.href} className='px-[16px]'>
                  <li>
                    <img src={item.icon} width={18} alt='Social Media Icon' />
                  </li>
                </a>
              ))}
            </ul>
          </div>
          {/* Copyrights */}
          <div>
            <p className='text-[1.4rem] tracking-tight font-100 text-white opacity-50'>
              © KFC, Inc. All rights reserved.
            </p>
          </div>
          <img
            src='/icons/kfc-footer.svg'
            className='-pb-10 -mb-16'
            alt='svg'
          />
        </footer>
      </Container>
    </>
  );
};

export default Footer;
