import * as React from 'react';
import { render } from '@testing-library/react';
import SongPage from '..';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}));

describe('Sync Page', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<SongPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
