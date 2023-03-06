import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../../utils/loginRequest';
const LoginPage = () => {
  const [userName, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleName = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const loginFunc = async () => {
    await login({ data: { userName, password } }, navigate);
    // localStorage.setItem('token', token.token);
    // localStorage.setItem('username', userName);
    setUsername('');
    setPassword('');
    // console.log(token);
    // navigate('/todo');
  };
  const registerFunc = async () => {
    await register({ data: { userName, password } }, navigate);
    setUsername('');
    setPassword('');
    // console.log(user);
  };

  return (
    <div>
        <label>Username</label>
        <input type="text" value={userName} onChange={handleName} />
        <label>Password</label>
        <input type="text" value={password} onChange={handlePassword}/>
        <button onClick={loginFunc}>Login</button>
        <button onClick={registerFunc}>Register</button>
    </div>
  );
};

export default LoginPage;
