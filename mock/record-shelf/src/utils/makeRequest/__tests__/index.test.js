import axios from 'axios';
import makeRequest from '..';
import { GET_RECORDS, POST_LIKE_BY_ID } from '../../../constants/apiEndPoints';

jest.mock('axios');
describe('Make Request', () => {
  it('should make api call with specific request options when only api end point is passed', async () => {
    axios.mockResolvedValue({ data: { data: { id: 1 } } });
    expect(axios).not.toBeCalled();
    const response = await makeRequest(GET_RECORDS);
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      url: 'http://localhost:8080/api/records',
      method: 'get',
      headers: {
        authorization: 'Bearer QWlzaHdhcnlhIE4'
      }
    });
    expect(response).toEqual({ id: 1 });
  });
  it('should make api call with specific request options when api end point and dynamic config is passed', async () => {
    axios.mockResolvedValue({ data: { data: { id: 1 } } });
    expect(axios).not.toBeCalled();
    const response = await makeRequest(POST_LIKE_BY_ID(1), { data: { like: true } });
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      url: 'http://localhost:8080/api/records/1/likes',
      method: 'patch',
      headers: {
        authorization: 'Bearer QWlzaHdhcnlhIE4'
      },
      data: {
        like: true
      }
    });
    expect(response).toEqual({ id: 1 });
  });
});
