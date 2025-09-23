import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { Button  } from './button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Button> = {
  title: 'App/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    label: {
      control: { type: 'select' },
      options: ['Normal', 'Bold', 'Italic'],
      mapping: {
        // Bold: <b>Bold</b>,
        // Italic: <i>Italic</i>,
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

export const Primary: Story = {
  args: {
    backgroundColor: "#3437bf"
  },

  // 👇 Story-level parameters
  parameters: {
    backgrounds: {
      options: {
        red: { name: 'Red', value: '#f00' },
        green: { name: 'Green', value: '#0f0' },
        blue: { name: 'Blue', value: '#00f' },
      },
    },
  }
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    ...Secondary.args,
    size: 'large',
     
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
export const SmallWithColor: Story = {
  name:"i am Smalll color",
  args: {
    size: "medium",
    label: 'Button',
    backgroundColor:"#41abc5",
    primary: false,
  },
};

 