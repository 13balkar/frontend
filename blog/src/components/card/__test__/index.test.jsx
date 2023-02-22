import { render, screen, waitFor } from '@testing-library/react';
import * as React from 'react';
import Cards from '..';
import { makeRequest } from '../../../utils';
jest.mock('../../../utils/makeRequest');

const mockData = {
  id: 2,
  date: '6/29/2022 4:52:48 PM UTC',
  reading_time: '4 mins',
  title: 'mock title 2',
  description: 'mock description 2',
  claps: 12,
  liked: true,
  image: 'abstract.png'
};

describe('Blog Posts', () => {
  it('should show loading when the data is being fetched', () => {
    makeRequest.mockResolvedValue([mockData]);
    render(<Cards />);
    expect(screen.getByText('Loading')).toBeTruthy();
  });
  it('should show the blog posts when the data is fetched', async () => {
    makeRequest.mockResolvedValue([mockData]);
    render(<Cards />);
    await waitFor(() =>
      expect(screen.getAllByText('mock title 2')).toBeTruthy()
    );
  });
  it('should show all the blog posts when the data is fetched', async () => {
    makeRequest.mockResolvedValue([mockData]);
    render(<Cards />);
    await waitFor(() =>
      expect(screen.getAllByTestId('blog')).toHaveLength([mockData].length)
    );
  });
  it('should show error when there is error in data fetching', async () => {
    makeRequest.mockRejectedValue({ message: 'Error' });
    render(<Cards />);
    await waitFor(() =>
      expect(screen.getAllByText('Error')).toBeTruthy()
    );
  });
});
