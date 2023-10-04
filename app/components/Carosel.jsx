'use client';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Container from './assets/Container';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carosel = () => (
  <Container>
    <AutoPlaySwipeableViews>
      <div className='bg-green-300 h-96'>slide n°1</div>
      <div className='bg-green-600 h-96'>slide n°2</div>
      <div className='bg-green-900 h-96'>slide n°3</div>
    </AutoPlaySwipeableViews>
  </Container>
);

export default Carosel;
