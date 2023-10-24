import React from 'react';
import { IconCoverFood } from '@assets/icons';
import { Menu } from '@components';

import './styles.scss';

const Hero: React.FC = () => {
  const menuItems1 = [
    { title: 'Current Hot Trends' },
    { title: 'Restaurant List' },
    { title: 'Searching' },
    { title: 'Analysis' }
  ];
  const menuItems2 = [
    { title: 'Statistic 1', disable: true },
    { title: 'Statistic 2', disable: true },
    { title: '...', disable: true }
  ];
  return (
    <div className='container'>
      <div className='text-wrapper'>
        <div className='title-group'>
          <h3 className='text-6xl font-bold'>Food & Beverage</h3>
          <h3 className='text-6xl font-bold'>Restaurants</h3>
          <h3 className='text-9xl font-bold'>Analysis</h3>
        </div>
        <Menu.Wrapper>
          <Menu.SubTitle>Signatures</Menu.SubTitle>
          <Menu.Items items={menuItems1} />
          <Menu.SubTitle>Recently Viewed Statistics</Menu.SubTitle>
          <Menu.Items items={menuItems2} />
        </Menu.Wrapper>
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
        <div>
          <button>Go to Hot Trends</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
