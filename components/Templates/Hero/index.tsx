import React from 'react';
import { IconCoverFood, IconFlower, IconPizza, IconPlate, IconRiceRecipe, IconSteak } from '@assets/icons';
import { Menu } from '@components';
import { menuItems1, menuItems2 } from '@config';
import { rem } from '@util';

import './styles.scss';

const Hero: React.FC = () => {
  return (
    <div className='container'>
      <div className='text-wrapper'>
        <div className='title-group'>
          <h3 className='text-6xl font-bold flex'>
            F
            <span className='flip block overflow-hidden'>
              <span className='block'>o</span>
              <span className='block'>
                <IconRiceRecipe width={rem(40)} height={rem(40)} />
              </span>
              <span className='block'>
                <IconPlate width={rem(40)} height={rem(40)} />
              </span>
              <span className='block'>o</span>
            </span>
            <span className='flip flip2 block overflow-hidden'>
              <span className='block'>o</span>
              <span className='block'>
                <IconPizza width={rem(40)} height={rem(40)} />
              </span>
              <span className='block'>
                <IconSteak width={rem(40)} height={rem(40)} />
              </span>
              <span className='block'>o</span>
            </span>
            d & Beverage
          </h3>
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
          <IconCoverFood width='100%' height='100%' />
        </span>
        <div className='w-full text-center self-end mb-14 text-black'>
          <button className='custom-button'>
            <span className='block w-full z-10 relative'>Summarized Board</span>
            <IconFlower className='absolute z-20 -top-1 right-0' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
