import React from 'react';
import { cx, getRandomIds } from '@util';
import Link from 'next/link';

import { IMenuItems } from '../types';

const MenuItems: React.FC<IMenuItems> = ({ items, className, ...remains }) => {
  return (
    <ul className={cx(className, 'my-3')} {...remains}>
      {items.map((itm) =>
        itm.disable ? (
          <li className='text-center' key={getRandomIds()}>
            <div className='text-2xl font-lobster text-slate-400 block w-full px-1'>{itm.title}</div>
          </li>
        ) : (
          <li className='hover:bg-pink-950 text-center' key={getRandomIds()}>
            <Link className='text-2xl font-lobster text-white block w-full px-1' href={'#'}>
              {itm.title}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default MenuItems;
