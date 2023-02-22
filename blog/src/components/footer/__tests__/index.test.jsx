import { render, screen } from '@testing-library/react';
import * as React from 'react';
import Footer from '..';
describe('Footer', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render correctly with Footer data', () => {
    render(<Footer/>);
    expect(screen.getByText('©artifact.com 2019')).toBeInTheDocument();
  });
});
