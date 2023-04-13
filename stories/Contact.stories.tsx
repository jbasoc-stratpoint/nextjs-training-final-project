import { Meta, StoryObj } from '@storybook/react';

import ContactPage from '../pages/contact';

export default {
  title: 'Pages/Contact',
  component: ContactPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof ContactPage>;

type Template = StoryObj<typeof ContactPage>;

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

SignedIn.args = {};
