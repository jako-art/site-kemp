import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BrandButton } from './BrandButton';

const meta = {
  title: 'Brand/BrandButton',
  component: BrandButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof BrandButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Продолжить',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Отмена',
    size: 'md',
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    label: 'Акцентная кнопка',
    size: 'md',
  },
};

