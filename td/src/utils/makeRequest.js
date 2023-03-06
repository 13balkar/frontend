import axios from 'axios';
import { BACKEND_URL } from '../constants/apiEndPoints';

const makeRequest = async (apiEndPoint, dynamicConfig, navigate) => {
  try {
    const requestConfig = {
      url: `${BACKEND_URL}${apiEndPoint.url}`,
      method: apiEndPoint.method,
      ...dynamicConfig
    };
    // console.log('requestConfig', requestConfig);
    const { data } = await axios(requestConfig);
    return data;
  } catch (error) {
    if (navigate) {
      const errorStatus = error.response?.status;
      if (errorStatus) {
        navigate(`/error/${errorStatus}`);
      } else {
        navigate('/error');
      }
    }
  }
};

export default makeRequest;
