import { render } from '@testing-library/react';
import * as React from 'react';
import App from '..';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}));

describe('Home Page', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
