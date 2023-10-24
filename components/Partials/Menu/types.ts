import { HTMLProps } from 'react';

type MenuItem = {
  title: string;
  disable?: boolean;
};

export interface IMenuItems extends HTMLProps<HTMLUListElement> {
  items: MenuItem[];
}

export interface ISubTitle extends HTMLProps<HTMLDivElement> {}

export interface IMenuWrapper extends HTMLProps<HTMLDivElement> {}
