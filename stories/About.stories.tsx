import { Meta, StoryObj } from '@storybook/react';

import AboutPage from '../pages/about';

export default {
  title: 'Pages/About',
  component: AboutPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof AboutPage>;

type Template = StoryObj<typeof AboutPage>;

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
