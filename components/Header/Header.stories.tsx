import { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Header>;

type Template = StoryObj<typeof Header>;

export const Default: Template = {};

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
