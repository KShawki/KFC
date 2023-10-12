'use client';
import Heading from './Heading';
import './contactless.css';

const data = [
  {
    img: '/contactless-delivery/icon_handwash.png',
    desc: 'Our delivery drivers sanitize their hands before and after every food order',
  },
  {
    img: '/contactless-delivery/icon_delivery_mask.png',
    desc: 'All our delivery drivers wear masks and gloves',
  },
  {
    img: '/contactless-delivery/icon_delivery_bag.png',
    desc: 'All delivery bags are sanitized before and after every order',
  },
  {
    img: '/contactless-delivery/icon_delivery_bag.png',
    desc: 'Takeaway food bags will be sealed with tape',
  },
];

const Card = ({ img, desc }) => {
  return (
    <article className='card'>
      <img src={img} width={56} alt={desc} />
      <p style={{ fontSize: '11px', lineHeight: '1.3' }}>{desc}</p>
    </article>
  );
};

export default function Contact() {
  return (
    <section className='container' style={{ margin: '28px 0' }}>
      <Heading
        title='Contactless Delivery'
        img='/icons/contactless-delivery.png'
        viewAll='false'
      />

      <div className='flex contactless'>
        <article className='card special-card'>
          <img src='/contactless-delivery/banner.png' />
        </article>
        {data.map((item, index) => (
          <div key={index}>
            <Card img={item.img} desc={item.desc} />
          </div>
        ))}
      </div>
    </section>
  );
}
