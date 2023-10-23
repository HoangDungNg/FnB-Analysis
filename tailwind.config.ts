import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      borderRadius: {
        half: '1100px'
      },
      width: {
        half: '50%'
      },
      height: {
        half: '50%'
      },
      fontFamily: {
        lobster: ['Lobster Two', 'sans']
      }
    }
  },
  plugins: []
};
export default config;
