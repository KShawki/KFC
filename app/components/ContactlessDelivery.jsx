import Container from './assets/Container';

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
    <article className='bg-white flex items-center flex-col gap-2 w-[128px] h-[128px] p-[1.6rem] text-center justify-center rounded-xl'>
      <img src={img} width={56} className='h-1/2' alt={desc} />
      <p className='text-[10px] text-[#393f52] leading-[12px] h-1/2'>{desc}</p>
    </article>
  );
};

const ContactLessDelivery = () => {
  return (
    <Container>
      <section className='text-[1.6rem] my-10'>
        <h1 className='heading-section items-center font-medium text-[#393f52]'>
          <span className='text-2xl font-bold inline-flex mb-0.5'>
            Contactless Delivery
            <img
              src='/icons/contactless-delivery.png'
              alt='Contactless icon'
              width={18}
              className='ml-4'
            />
          </span>
        </h1>
        <div className='flex items-center justify-start gap-4 mt-4'>
          <article className='bg-white flex items-center flex-col gap-2 justify-center rounded-xl'>
            <img src='/contactless-delivery/banner.png' width={56} className='h-full min-w-full' alt='banner' width={200} />
          </article>

          {data.map((item) => (
            <div className='' key={item.img}>
              <Card img={item.img} desc={item.desc} />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default ContactLessDelivery;
