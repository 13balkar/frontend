import React from 'react';
import Sync from '..';
import { fireEvent, render } from '@testing-library/react';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}));

describe('Sync card', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Sync/>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should call handle click when click on button', () => {
    const { getByText } = render(<Sync/>);
    const button = getByText('sync');
    fireEvent.click(button);
  });
});
