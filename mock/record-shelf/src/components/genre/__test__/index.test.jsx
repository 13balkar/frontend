import React from 'react';
import { render } from '@testing-library/react';
import Genre from '..';

const mockPost = [
  {
    id: 'cd3cc1e3-e1e0-4ccd-bc67-747648985838',
    name: 'Lost',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b27386a8ab515de4b7aef28cd631',
    artist: {
      id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708',
      name: 'Maroon 5'
    },
    genre: {
      id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
      name: 'Pop'
    }
  }
];

describe('Genre', () => {
  it('should render Genre correctly', () => {
    const { asFragment } = render(<Genre post={mockPost} genre='Pop'/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
