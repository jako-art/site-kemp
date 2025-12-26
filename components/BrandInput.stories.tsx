import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BrandInput } from './BrandInput';

const meta = {
  title: 'Brand/BrandInput',
  component: BrandInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BrandInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Тема/запрос',
    placeholder: 'Например: Причины индустриализации',
  },
};

export const WithError: Story = {
  args: {
    label: 'Тема/запрос',
    placeholder: 'Например: Причины индустриализации',
    error: 'Поле обязательно для заполнения',
  },
};

export const Textarea: Story = {
  args: {
    label: 'Тема/запрос',
    as: 'textarea',
    rows: 4,
    placeholder: 'Введите ваш текст здесь...',
  },
};

