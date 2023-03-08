import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';

const ProtectedRoutes = ({ children }) => {
  const [token, setToken] = React.useState(null);
  React.useEffect(() => {
    const value = localStorage.getItem('token');
    axios.post('http://localhost:4000/token/validate', {}, { headers: { token: value } })
      .then(response => {
        // console.log(response.data.userName);
        setToken(response.data.userName);
      });
  }, []);
  return token === null
    ? <h1>Not Logged In Bro</h1>
    : token === 'ishit1234'
      ? children
      : <h1>You are not ishit bro</h1>;
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProtectedRoutes;
