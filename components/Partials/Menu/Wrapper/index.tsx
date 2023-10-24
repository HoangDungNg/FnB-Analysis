import React from 'react';

import { IMenuWrapper } from '../types';

const MenuWrapper: React.FC<IMenuWrapper> = ({ children, ...remains }) => {
  return (
    <div className='menu-wrapper' {...remains}>
      <div className='menu-inner'>
        <h3 className='text-5xl font-bold text-rose-600 font-lobster'>Menu</h3>
        <hr className='line-break' />
        {children}
      </div>
    </div>
  );
};

export default MenuWrapper;
