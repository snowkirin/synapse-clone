import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Button } from '@/components/ui/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    color: {
      control: 'select',
      options: ['blue', 'red', 'green', 'yellow'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'tint', 'outline', 'ghost'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Solid: Story = {
  args: {
    variant: 'solid',
    size: 'md',
    rounded: 'default',
    color: 'blue',
    children: 'Button',
  },
};

export const Tint: Story = {
  args: {
    variant: 'tint',
    size: 'md',
    rounded: 'default',
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    rounded: 'default',
    children: 'Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    rounded: 'default',
    children: 'Button',
  },
};
