import { Meta, StoryObj } from '@storybook/react';

import Home from '../pages/index';

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Home>;

type Template = StoryObj<typeof Home>;

export const Default: Template = {};

Default.args = {
  posts: [
    {
      _id: '1',
      _createdAt: 'December 1, 2023',
      title: 'Title',
      author: {
        name: 'Jan Basoc',
        image: '/test-image.jpg',
      },
      description: 'Sample Description',
      mainImage: {
        asset: {
          url: '/test-image.jpg',
        },
      },
      slug: {
        current: 'sample-post',
      },
      body: [<div key={1}>test</div>],
    },
  ],
  imageUrl: '/test-image.jpg',
};

export const SignedIn: Template = {};
SignedIn.parameters = {
  nextAuthMock: {
    session: {
      data: {
        user: { name: 'Jan Basoc' },
        id: 999,
        login: 'user',
        name: 'Jan Basoc',
        roles: ['user'],
        username: 'jbasoc',
        email: 'jbasoc@stratpoint.com',
      },
      status: 'authenticated',
    },
  },
};

SignedIn.args = {
  posts: [
    {
      _id: '1',
      _createdAt: 'December 1, 2023',
      title: 'Title',
      author: {
        name: 'Jan Basoc',
        image: '/test-image.jpg',
      },
      description: 'Sample Description',
      mainImage: {
        asset: {
          url: '/test-image.jpg',
        },
      },
      slug: {
        current: 'sample-post',
      },
      body: [<div key={1}>test</div>],
    },
  ],
  imageUrl: '/test-image.jpg',
};
