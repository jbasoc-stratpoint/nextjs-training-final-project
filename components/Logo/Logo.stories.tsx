import { Meta, StoryObj } from '@storybook/react';

import Logo from './Logo';

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Logo>;

type Template = StoryObj<typeof Logo>;

export const Default: Template = {};

Default.args = {
  width: 176,
  height: 30,
};
