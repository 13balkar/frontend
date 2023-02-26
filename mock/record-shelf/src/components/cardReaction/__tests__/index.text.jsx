import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import CardReaction from '..';
import { makeRequest } from '../../../utils';
jest.mock('../../../utils/makeRequest');
const mockData = {
  count: 14,
  like: false
};

describe('CardReaction', () => {
  describe('data fetching', () => {
    it('should display loading when data is being fetched', async () => {
      makeRequest.mockResolvedValue(mockData);
      expect(makeRequest).toHaveBeenCalledTimes(0);
      render(<CardReaction id='1' />);
      expect(makeRequest).toHaveBeenCalledTimes(1);
      await waitFor(() => {
        expect(screen.getByText('loading')).toBeInTheDocument();
      });
    });
    it('should display error when data fetching fails', async () => {
      makeRequest.mockRejectedValue(new Error('Err'));
      expect(makeRequest).toHaveBeenCalledTimes(0);
      render(<CardReaction id='1' />);
      expect(makeRequest).toHaveBeenCalledTimes(1);
      await waitFor(() => {
        expect(screen.getByText('Err')).toBeInTheDocument();
      });
    });
    it('should display data when data fetching succeeds', async () => {
      makeRequest.mockResolvedValue(mockData);
      expect(makeRequest).toHaveBeenCalledTimes(0);
      render(<CardReaction id='1' />);
      expect(makeRequest).toHaveBeenCalledTimes(1);
      await waitFor(() => {
        expect(screen.getByText('14')).toBeInTheDocument();
      });
    });
  });
  describe('logic', () => {
    it('should display heart-red when like is true', async () => {
      makeRequest.mockResolvedValue({ count: 12, like: true });
      expect(makeRequest).toHaveBeenCalledTimes(0);
      render(<CardReaction id='1' />);
      expect(makeRequest).toHaveBeenCalledTimes(1);
      await waitFor(() => {
        expect(screen.getByAltText('genre')).toHaveAttribute('src', '/assets/heart-red.svg');
      });
    });
    it('should display heart-gray when like is false', async () => {
      makeRequest.mockResolvedValue({ count: 12, like: false });
      expect(makeRequest).toHaveBeenCalledTimes(0);
      render(<CardReaction id='1' />);
      expect(makeRequest).toHaveBeenCalledTimes(1);
      await waitFor(() => {
        expect(screen.getByAltText('genre')).toHaveAttribute('src', '/assets/heart-gray.svg');
      });
    });
    it('should display the passed count when rendered for the first time', async () => {
      makeRequest.mockResolvedValue({ count: 12, like: false });
      expect(makeRequest).toHaveBeenCalledTimes(0);
      render(<CardReaction id='1' />);
      expect(makeRequest).toHaveBeenCalledTimes(1);
      await waitFor(() => {
        expect(screen.getByText('12')).toBeInTheDocument();
      });
    });
    it('should increment the count by 1 when clicked on heart grey', async () => {
      makeRequest.mockResolvedValue({ count: 12, like: false });
      expect(makeRequest).toHaveBeenCalledTimes(0);
      const { getByAltText } = render(<CardReaction id='1' />);
      expect(makeRequest).toHaveBeenCalledTimes(1);
      await waitFor(() => {
        expect(screen.getByText('12')).toBeInTheDocument();
      });
      makeRequest.mockResolvedValue({ count: 13, like: true });
      const heart = getByAltText('genre').parentElement;
      fireEvent.click(heart);
      await waitFor(() => {
        expect(screen.getByText('13')).toBeInTheDocument();
      });
    });
    it('should decrement the count by 1 when clicked on heart red', async () => {
      makeRequest.mockResolvedValue({ count: 12, like: true });
      expect(makeRequest).toHaveBeenCalledTimes(0);
      const { getByAltText } = render(<CardReaction id='1' />);
      expect(makeRequest).toHaveBeenCalledTimes(1);
      await waitFor(() => {
        expect(screen.getByText('12')).toBeInTheDocument();
      });
      makeRequest.mockResolvedValue({ count: 11, like: false });
      const heart = getByAltText('genre').parentElement;
      fireEvent.click(heart);
      await waitFor(() => {
        expect(screen.getByText('11')).toBeInTheDocument();
      });
    });
    it('should toggle the color of the heart when clicked', async () => {
      makeRequest.mockResolvedValue({ count: 12, like: true });
      expect(makeRequest).toHaveBeenCalledTimes(0);
      const { getByAltText } = render(<CardReaction id='1' />);
      expect(makeRequest).toHaveBeenCalledTimes(1);
      await waitFor(() => {
        expect(screen.getByAltText('genre')).toHaveAttribute('src', '/assets/heart-red.svg');
      });
      makeRequest.mockResolvedValue({ count: 11, like: false });
      const heart = getByAltText('genre').parentElement;
      fireEvent.click(heart);
      await waitFor(() => {
        expect(screen.getByAltText('genre')).toHaveAttribute('src', '/assets/heart-gray.svg');
      });
    });
    it('should call makeRequest with the correct arguments when clicked', async () => {
      makeRequest.mockResolvedValue({ count: 12, like: true });
      expect(makeRequest).toHaveBeenCalledTimes(0);
      const { getByAltText } = render(<CardReaction id='1' />);
      expect(makeRequest).toHaveBeenCalledTimes(1);
      await waitFor(() => {
        expect(screen.getByAltText('genre')).toHaveAttribute('src', '/assets/heart-red.svg');
      });
      makeRequest.mockResolvedValue({ count: 11, like: false });
      const heart = getByAltText('genre').parentElement;
      fireEvent.click(heart);
      await waitFor(() => {
        expect(screen.getByAltText('genre')).toHaveAttribute('src', '/assets/heart-gray.svg');
        expect(makeRequest).toHaveBeenCalledTimes(3);
      });
    });
  });
});
