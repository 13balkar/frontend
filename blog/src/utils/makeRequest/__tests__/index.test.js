import axios from 'axios';
import makeRequest from '..';
import { BACKEND_URL, GET_BLOG_POSTS, UPDATE_BLOG_POST } from '../../../constants/apiEndPoints';

jest.mock('axios');
describe('Make Request', () => {
  it('should make api call with specific request options when only api end point is passed', async () => {
    const mockResponse = { data: { id: 1 } };
    axios.mockResolvedValue(mockResponse);
    expect(axios).not.toBeCalled();
    const response = await makeRequest(GET_BLOG_POSTS);
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      url: `${BACKEND_URL}${GET_BLOG_POSTS.url}`,
      method: 'get'
    });
    expect(response).toEqual({ id: 1 });
  });
  it('should make api call with specific request options when api end point and dynamic config is passed', async () => {
    axios.mockResolvedValue({ data: { claps: 1 } });
    expect(axios).not.toBeCalled();
    await makeRequest(UPDATE_BLOG_POST(1), { data: { claps: 1 } });
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      url: 'http://localhost:8080/blog-posts/1',
      method: 'put',
      data: {
        claps: 1
      }
    });
  });
});
