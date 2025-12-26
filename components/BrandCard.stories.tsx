import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BrandCard } from './BrandCard';
import React from 'react';

const meta = {
  title: 'Brand/BrandCard',
  component: BrandCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BrandCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="w-64 text-center">
        <h3 className="text-lg font-bold">Заголовок карточки</h3>
        <p className="text-sm text-gray-500">Контент карточки в стиле Kampus AI</p>
      </div>
    ),
  },
};

