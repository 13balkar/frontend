import { render } from '@testing-library/react';
import * as React from 'react';
import Header from '..';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}));

describe('Header', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
