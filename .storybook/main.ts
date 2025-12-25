import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
};

export default config;
