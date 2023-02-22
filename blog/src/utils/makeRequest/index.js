import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndPoints';

const makeRequest = async (apiEndPoint, dynamicConfig) => {
  const requestConfig = {
    url: `${BACKEND_URL}${apiEndPoint.url}`,
    method: apiEndPoint.method,
    ...dynamicConfig
  };
  const { data } = await axios(requestConfig);
  return data;
};

export default makeRequest;
