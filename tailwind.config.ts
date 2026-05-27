import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de marca Bike Setting
        amarillo: {
          DEFAULT: '#FFCB05', // acento principal
          dark: '#E6B400',
        },
        negro: {
          DEFAULT: '#0A0A0A', // base / fondos
          soft: '#161616',
        },
        rojo: {
          DEFAULT: '#E10600', // secundario / detalles
          dark: '#B00500',
        },
        blanco: '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
