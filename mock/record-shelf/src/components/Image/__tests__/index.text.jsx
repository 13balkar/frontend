import { render } from '@testing-library/react';
import * as React from 'react';
import Image from '..';

describe('Image', () => {
  it('should render Image correctly', () => {
    const { asFragment } = render(<Image src='imgsrc' />);
    expect(asFragment()).toMatchSnapshot();
  });
});
