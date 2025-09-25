import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { Header  } from './header';

const meta: Meta<Header> = {
  title: 'FullScreen/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export default meta;
type Story = StoryObj<Header>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};
