import * as React from 'react';
import { render } from '@testing-library/react';
import SyncPage from '..';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}));

describe('Sync Page', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<SyncPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
