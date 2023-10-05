'use client';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Container from './assets/Container';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const caroselData = [
  {
    img: '',
    alt: '',
    href: '',
  },
];

const Carosel = () => (
  <Container>
    <AutoPlaySwipeableViews>
      <div className='w-[1440px] object-cover h-[420px]'>
        <img src='/slider/4X4Meal_En_EG14_0208.jpg' alt='e2e3' />
      </div>
      <div className='w-[1440px] object-cover h-[420px]'>
        <img src='/slider/Chililime_En_EGY_1809.jpg' alt='e2e3' />
      </div>
    </AutoPlaySwipeableViews>
  </Container>
);

export default Carosel;
