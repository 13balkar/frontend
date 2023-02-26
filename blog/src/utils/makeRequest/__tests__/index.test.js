import axios from 'axios';
import makeRequest from '..';
import { GET_BLOG_POSTS, UPDATE_BLOG_POST } from '../../../constants/apiEndPoints';

jest.mock('axios');
describe('Make Request', () => {
  it('should make api call with specific request options when only api end point is passed', async () => {
    axios.mockResolvedValue({ data: { id: 1 } });
    expect(axios).not.toBeCalled();
    const response = await makeRequest(GET_BLOG_POSTS);
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      url: 'http://localhost:8080/blog-posts',
      method: 'get'
    });
    expect(response).toEqual({ id: 1 });
  });
  it('should make api call with specific request options when api end point and dynamic config is passed', async () => {
    axios.mockResolvedValue({ data: {} });
    expect(axios).not.toBeCalled();
    const response = await makeRequest(UPDATE_BLOG_POST(1), { data: { claps: 1 } });
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      url: 'http://localhost:8080/blog-posts/1',
      method: 'put',
      data: {
        claps: 1
      }
    });
    expect(response).toEqual({});
  });
  it('should navigate to error page with status code when api call return error status code', async () => {
    const mockNavigate = jest.fn();
    axios.mockRejectedValue({ response: { status: 404 } });
    expect(axios).not.toBeCalled();
    await makeRequest(GET_BLOG_POSTS, {}, mockNavigate);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/error/404');
  });
  it('should navigate to error page without status code when api call return error without status code', async () => {
    const mockNavigate = jest.fn();
    axios.mockRejectedValue({ response: {} });
    expect(axios).not.toBeCalled();
    await makeRequest(GET_BLOG_POSTS, {}, mockNavigate);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/error');
  });
});
