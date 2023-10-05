import Container from './assets/Container';

const Banners = () => {
  return (
    <Container>
      <section className='flex flex-col gap-12 w-full '>
        <div className='flex flex-row items-center justify-between gap-12'>
          <div className='w-1/2'>
            <img src='/HomeDesktop/ic_badge_kfc.png' alt='' />
          </div>
          <div className='w-1/2'>
            <img src='/HomeDesktop/ic_badge_kfc.png' alt='' />
          </div>
        </div>
        <div className='flex flex-row items-center justify-between gap-12'>
          <div className='w-1/2'>
            <img src='/HomeDesktop/ic_badge_kfc.png' alt='' />
          </div>
          <div className='w-1/2'>
            <img src='/HomeDesktop/ic_badge_kfc.png' alt='' />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Banners;
