import { Meta, StoryObj } from '@storybook/react';

import NavBar from './NavBar';

export default {
  title: 'Components/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof NavBar>;

type Template = StoryObj<typeof NavBar>;

export const Default: Template = {};

Default.args = {
  list: [
    {
      id: 1,
      url: '/about',
      title: 'About',
      category: 'Link',
    },
    {
      id: 2,
      url: '/contact',
      title: 'Contact',
      category: 'Link',
    },
    {
      id: 3,
      url: '/',
      title: 'Follow',
      category: 'FullText',
    },
  ],
};
