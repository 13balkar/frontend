import axios from 'axios';

const register = async (dynamicConfig, navigate) => {
  try {
    const requestConfig = {
      url: 'http://localhost:4000/user/create',
      method: 'post',
      ...dynamicConfig
    };
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
const login = async (dynamicConfig, navigate) => {
  console.log('dynamicConfig', dynamicConfig);
  try {
    const requestConfig = {
      url: 'http://localhost:4000/user/login',
      method: 'post',
      ...dynamicConfig
    };
    const { data } = await axios(requestConfig);
    localStorage.setItem('token', data.token);
    localStorage.setItem('username', dynamicConfig.data.userName);
    navigate('/todo');
    // return data;
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

export { register, login };
