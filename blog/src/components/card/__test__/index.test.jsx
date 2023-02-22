import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as React from 'react';
import Cards from '..';
import { makeRequest } from '../../../utils';
import Card from '../card';
import Reaction from '../reactions';
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

describe('Data Fetching', () => {
  it('should show loading when the data is being fetched', async () => {
    makeRequest.mockResolvedValue([mockData]);
    render(<Cards />);
    await waitFor(() =>
      expect(screen.getByText('Loading')).toBeTruthy()
    );
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

describe('Card Component', () => {
  it('should display the the given count of claps when rendered for the first time', () => {
    makeRequest.mockResolvedValueOnce(mockData);
    const { getByText } = render(<Card post={mockData} />);
    expect(getByText(mockData.claps)).toBeTruthy();
  });
  it('should increment the number count of claps when clicked on clap icon', async () => {
    makeRequest.mockResolvedValueOnce(mockData);
    const { getByText } = render(<Card post={mockData} />);
    expect(getByText(mockData.claps)).toBeTruthy();
    const clapIcon = getByText(mockData.claps).parentElement.querySelector('img');
    await waitFor(() => {
      fireEvent.click(clapIcon);
      expect(getByText(mockData.claps + 1)).toBeTruthy();
    });
  });
  it('should display the given color of heart when rendered for the first time', () => {
    makeRequest.mockResolvedValueOnce(mockData);
    const { getByAltText } = render(<Card post={mockData} />);
    expect(getByAltText('like')).toHaveAttribute('src', '/assets/Icons/heart-red.svg');
  });
  it('should change the color of the color of heart icon when clicked on heart icon', async () => {
    const { getByAltText } = render(<Card post={mockData} />);

    expect(getByAltText('like')).toHaveAttribute('src', '/assets/Icons/heart-red.svg');
    const heartIcon = getByAltText('like');
    await waitFor(() => {
      fireEvent.click(heartIcon);
      expect(getByAltText('like')).toHaveAttribute('src', '/assets/Icons/heart-black.svg');
    });
  });
  it('should call the increment claps function when clicked on clap icon', async () => {
    const clapping = jest.fn();
    const { getByText } = render(<Reaction count={mockData.claps} clapping={clapping} liked={mockData.liked} liker={jest.fn()} />);
    const clapIcon = getByText(mockData.claps).parentElement.querySelector('img');
    await waitFor(() => {
      fireEvent.click(clapIcon);
      expect(clapping).toHaveBeenCalled();
    });
  });
  it('should call the liker function when clicked on heart icon', async () => {
    const liker = jest.fn();
    const { getByAltText } = render(<Reaction count={mockData.claps} liked={mockData.liked} clapping={jest.fn()} liker={liker} />);
    const heartIcon = getByAltText('like');
    await waitFor(() => {
      fireEvent.click(heartIcon);
      expect(liker).toHaveBeenCalled();
    });
  });
});

describe('Snapshot', () => {
  it('should render card list correctly', async () => {
    makeRequest.mockResolvedValue([mockData]);
    const { asFragment } = render(<Cards />);
    await waitFor(() =>
      expect(asFragment()).toMatchSnapshot()
    );
  });
  it('should render card correctly', () => {
    const { asFragment } = render(<Card post={mockData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
