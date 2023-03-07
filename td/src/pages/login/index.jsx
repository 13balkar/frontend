import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../../utils/loginRequest';
const LoginPage = () => {
  const [userName, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [response, setResponse] = React.useState(false);
  const navigate = useNavigate();

  const handleName = (e) => {
    setResponse(false);
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setResponse(false);
    setPassword(e.target.value);
  };

  const loginFunc = async () => {
    const res = await login({ data: { userName, password } }, navigate);
    if (res === 'success') {
      navigate('/todo');
    } else {
      setResponse(true);
    }
    setUsername('');
    setPassword('');
  };
  const registerFunc = async () => {
    await register({ data: { userName, password } }, navigate);
    setUsername('');
    setPassword('');
  };
  const wrong = (
    <div>
      <h1>Wrong Credentials</h1>
    </div>
  );
  return (
    <div>
        <label>Username</label>
        <input type="text" value={userName} onChange={handleName} />
        <label>Password</label>
        <input type="text" value={password} onChange={handlePassword}/>
        <button onClick={loginFunc}>Login</button>
        <button onClick={registerFunc}>Register</button>
        {response ? wrong : null}
    </div>
  );
};

export default LoginPage;
