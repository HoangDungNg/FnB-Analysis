import React from 'react';

import { ISubTitle } from '../types';

import './styles.scss';

const SubTitle: React.FC<ISubTitle> = ({ children, ...remains }) => {
  return (
    <div className='menu-sub-title' {...remains}>
      <h3 className='text-xl font-lobster'>{children}</h3>
    </div>
  );
};

export default SubTitle;
