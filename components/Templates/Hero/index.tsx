import React from 'react';
import { IconCoverFood } from '@assets/icons';

import './styles.scss';

const Hero: React.FC = () => {
  return (
    <div className='container'>
      <div className='text-wrapper'>
        <div className='title-group'>
          <h3 className='text-6xl font-bold'>Food & Beverage</h3>
          <h3 className='text-6xl font-bold'>Restaurants</h3>
          <h3 className='text-9xl font-bold'>Analysis</h3>
        </div>
        <div className='menu-wrapper'>
          <div className='menu-inner'>
            <h3 className='text-4xl font-bold text-rose-600 font-lobster'>Menu</h3>
            <ol>
              <li>section 1</li>
              <li>section 2</li>
              <li>section 3</li>
              <li>section 4</li>
              <li>section 5</li>
              <li>section 6</li>
            </ol>
          </div>
        </div>
      </div>
      <div className='video-food-wrapper'>
        <section className='video-section'>
          <video muted loop autoPlay={true} preload='preload' className='w-full rounded-t-half'>
            <source type='video/mp4' src='restaurantFootage.mp4' />
          </video>
        </section>
        <span className='food-cover'>
          <IconCoverFood width={'100%'} height={'100%'} />
        </span>
      </div>
    </div>
  );
};

export default Hero;
