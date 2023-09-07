import { BASE_FONT_SIZE, BASE_SPACING } from '@config/constants';

export const rem = (px: number) => `${px / BASE_FONT_SIZE}rem`;
export function spacing(value: number): string;
export function spacing(x: number, y: number): string;
export function spacing(top: number, x: number, bottom: number): string;
export function spacing(top: number, right: number, bottom: number, left: number): string;

export function spacing(...args: number[]) {
  return args.map((num) => rem(num * BASE_SPACING)).join(' ');
}
