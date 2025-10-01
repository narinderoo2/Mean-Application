import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { SidebarMenus  } from './sidebar';

const meta: Meta<SidebarMenus> = {
  title: 'FullScreen/Sidebar',
  component: SidebarMenus,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<SidebarMenus>;

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


