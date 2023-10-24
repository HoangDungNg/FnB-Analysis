import { BASE_FONT_SIZE, BASE_SPACING } from '@config/constants';

export const rem = (px: number) => `${px / BASE_FONT_SIZE}rem`;
export function spacing(value: number): string;
export function spacing(x: number, y: number): string;
export function spacing(top: number, x: number, bottom: number): string;
export function spacing(top: number, right: number, bottom: number, left: number): string;

export function spacing(...args: number[]) {
  return args.map((num) => rem(num * BASE_SPACING)).join(' ');
}

/** Function to generate random ids */
function processRandomIds() {
  const name = 'FnB';
  let num = 0;
  function generateId() {
    num++;
    return `${name}-${num}`;
  }
  return generateId;
}
export const getRandomIds = processRandomIds();

/** Function to combine list of classNames */
export function cx(...args: unknown[]) {
  const classNames = args.filter((arg) => typeof arg === 'string');

  // Extract the keys from the object argument
  const objectArgs = args.filter((arg) => typeof arg === 'object') as {
    [key: string]: boolean;
  }[];

  const classNamesExtractedFromObjects = objectArgs.map((obj) => {
    const keys = obj ? Object.keys(obj) : [];
    if (obj[keys[0]]) return keys.join(' ');
    return '';
  });

  return [...classNames, ...classNamesExtractedFromObjects].join(' ');
}
