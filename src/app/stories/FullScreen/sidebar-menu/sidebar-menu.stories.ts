import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { SidebarMenu  } from './sidebar-menu';

const meta: Meta<SidebarMenu> = {
  title: 'FullScreen/Sidebar',
  component: SidebarMenu,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<SidebarMenu>;

export const Primary: Story = {
  args: {
    menuName: 'Dashboard',

  },
};

export const Secondary: Story = {
  args: {
    menuName: 'Monitor',
  },
};

export const Large: Story = {
  args: {
    menuName: 'Setup',
  },
};


