import type { Config } from 'tailwindcss';
import {
  backgroundImage,
  boxShadow,
  colors,
  dropShadow,
  fontFamily,
  fontSize,
  opacity,
  spacing,
  transitionDuration,
  transitionTimingFunction,
} from './src/styles/tokens';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors,
      fontFamily,
      fontSize,
      spacing,
      opacity,
      transitionTimingFunction,
      transitionDuration,
      backgroundImage,
      dropShadow,
      boxShadow,
      maxWidth: {
        stats: '1100px',
        media: '340px',
      },
    },
  },
  plugins: [],
} satisfies Config;
