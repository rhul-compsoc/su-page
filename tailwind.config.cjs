/* eslint-disable import/no-extraneous-dependencies, global-require */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  compilerOptions: {
    baseUrl: 'src/',
  },
  theme: {
    extend: {
      colors: {
        'compsoc-red': '#c32126',
        'discord-blurple': '#7289da',
      },
      animation: {
        buttonGradient: 'buttonGradient 0.5s ease infinite',
      },
      keyframes: {
        buttonGradient: {
          '0%, 100%': {
            backgroundPosition: '81% 0%',
          },
          '50%': {
            backgroundPosition: '20% 100%',
          },
        },
      },
    },
    animatedSettings: {
      animatedSpeed: 1000,
      heartBeatSpeed: 2000,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 1000,
    },
  },
  plugins: [
    require('tailwindcss-animatecss'),
    require('tailwindcss-textshadow'),
  ],
  include: [
    'src',
    'types',
  ],
};
