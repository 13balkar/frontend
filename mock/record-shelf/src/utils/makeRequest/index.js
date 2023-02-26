import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndPoints';

const makeRequest = async (apiEndPoint, dynamicConfig) => {
  const requestConfig = {
    url: `${BACKEND_URL}${apiEndPoint.url}`,
    headers: {
      authorization: 'Bearer QWlzaHdhcnlhIE4'
    },
    method: apiEndPoint.method,
    ...dynamicConfig
  };
  const { data } = await axios(requestConfig);
  return data.data;
};

export default makeRequest;
