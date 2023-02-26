import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import CardList from '..';
import { makeRequest } from '../../../utils';
jest.mock('../../../utils/makeRequest');

const mockData = [
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

describe('CardList', () => {
  describe('data fetching', () => {
    it('should display loading when data is being fetched', async () => {
      makeRequest.mockResolvedValue(mockData);
      expect(makeRequest).toHaveBeenCalledTimes(0);
      render(<CardList />);
      expect(makeRequest).toHaveBeenCalledTimes(1);
      await waitFor(() => {
        expect(screen.getByText('loading')).toBeInTheDocument();
      });
    });
    it('should display error when data fetching fails', async () => {
      makeRequest.mockRejectedValue(new Error('Error'));
      expect(makeRequest).toHaveBeenCalledTimes(0);
      render(<CardList />);
      expect(makeRequest).toHaveBeenCalledTimes(1);
      await waitFor(() => {
        expect(screen.getByText('Error')).toBeInTheDocument();
      });
    });
    it('should display data when data fetching succeeds', async () => {
      makeRequest.mockResolvedValue(mockData);
      expect(makeRequest).toHaveBeenCalledTimes(0);
      render(<CardList />);
      expect(makeRequest).toHaveBeenCalledTimes(1);
      await waitFor(() => {
        expect(screen.getByText('Lost')).toBeTruthy();
      });
    });
  });
  describe('logic', () => {
    it('should display the all songs content when rendered for the first time', async () => {
      makeRequest.mockResolvedValue(mockData);
      expect(makeRequest).toHaveBeenCalledTimes(0);
      render(<CardList />);
      expect(makeRequest).toHaveBeenCalledTimes(1);
      await waitFor(() => {
        expect(screen.getByText('Lost')).toBeTruthy();
      });
    });
    it('should set the genre true and show genre wise songs when clicked on genre view', async () => {
      makeRequest.mockResolvedValue(mockData);
      const { getAllByAltText } = render(<CardList />);
      const button = getAllByAltText('genre');
      expect(button[0]).toHaveAttribute('src', '/assets/icon-genre.svg');
      fireEvent.click(button[0]);
      await waitFor(() => {
        expect(button[0]).toHaveAttribute('src', '/assets/icon-grid.svg');
        expect(screen.getByText('genres')).toBeTruthy();
      });
    });
    it('should set the genre false and show all songs when clicked on all songs view', async () => {
      makeRequest.mockResolvedValue(mockData);
      const { getAllByAltText } = render(<CardList />);
      const button = getAllByAltText('genre');
      fireEvent.click(button[0]);
      fireEvent.click(button[0]);
      await waitFor(() => {
        expect(button[0]).toHaveAttribute('src', '/assets/icon-genre.svg');
        expect(screen.getByText('Lost')).toBeTruthy();
      });
    });
  });
});
