import { Meta, StoryFn } from '@storybook/react';

import { Spinner } from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Spinner>;

const Template: StoryFn<typeof Spinner> = () => (
  <div style={{ minHeight: '100vh' }}>
    <Spinner />
  </div>
);

export const Default = Template.bind({});
