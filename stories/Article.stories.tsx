import { Meta, StoryObj } from '@storybook/react';

import PostArticle from '../pages/post/[slug]';

export default {
  title: 'Pages/Article',
  component: PostArticle,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof PostArticle>;

type Template = StoryObj<typeof PostArticle>;

export const SignedIn: Template = {};
SignedIn.parameters = {
  nextAuthMock: {
    session: {
      data: {
        user: {
          name: 'jbasoc-stratpoint',
          email: 'jbasoc@stratpoint.com',
          image: 'https://avatars.githubusercontent.com/u/73691578?v=4',
        },
        expires: '2023-05-13T03:11:42.547Z',
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
  post: {
    _id: '5f132be6-a398-4ae6-8786-a2adc5692d82',
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
      current: 'pnpm-vs-npm-and-yarn-why-you-should-switch-and-how-to-do-it',
    },
    body: [<div key={1}>test</div>],

    imageUrl: '/test-image.jpg',
    fallbackbody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque nec nam aliquam sem et tortor. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Tellus orci ac auctor augue mauris augue neque gravida. Felis donec et odio pellentesque diam volutpat commodo. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Luctus venenatis lectus magna fringilla urna. Eu turpis egestas pretium aenean pharetra magna. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Non enim praesent elementum facilisis leo vel. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. In nisl nisi scelerisque eu ultrices vitae. Amet risus nullam eget felis. Enim diam vulputate ut pharetra. Amet justo donec enim diam vulputate ut pharetra. Viverra nibh cras pulvinar mattis nunc sed blandit.',
  },
};
