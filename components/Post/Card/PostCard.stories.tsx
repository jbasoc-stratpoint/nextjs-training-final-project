import { Meta, StoryObj } from '@storybook/react';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import PostCard from './PostCard';

export default {
  title: 'Components/PostCard',
  component: PostCard,
  parameters: {
    layout: '',
  },
} as Meta<typeof PostCard>;

type Template = StoryObj<typeof PostCard>;

export const Default: Template = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};

Default.args = {
  post: {
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
  imageUrl: '/test-image.jpg',
};
