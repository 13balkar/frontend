import { render, screen } from '@testing-library/react';
import * as React from 'react';
import Header from '..';
describe('Header', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render correctly with header data', () => {
    render(<Header/>);
    expect(screen.getByText('The Artifact')).toBeInTheDocument();
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveTextContent('Blog');
    expect(links[1]).toHaveTextContent('About');
    expect(links[2]).toHaveTextContent('Contact');
    expect(links[0]).toHaveAttribute('href', '');
    expect(links[1]).toHaveAttribute('href', '');
    expect(links[2]).toHaveAttribute('href', '');
  });
});
