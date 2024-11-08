import type { Config } from 'tailwindcss';
import sharedConfig from '@app/tailwind-config';
import { nextui } from '@nextui-org/react';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
// @ts-expect-error
import scrollbarHide from 'tailwind-scrollbar-hide';

const config: Omit<Config, 'content'> = {
  presets: [
    {
      ...sharedConfig,
      content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        // h/t to https://www.willliu.com/blog/Why-your-Tailwind-styles-aren-t-working-in-your-Turborepo,
        '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
        extend: {
          ...sharedConfig?.theme?.extend,
          backgroundImage: {
            'glow-conic':
              'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
          },
        },
      },
      darkMode: sharedConfig?.darkMode || 'class',
      plugins: [
        ...(sharedConfig?.plugins || []),
        forms,
        typography,
        scrollbarHide,
        nextui({}),
      ],
    },
  ],
};

export default config;
