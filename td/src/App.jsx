import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './constants/ProtectedRoutes';
import Error from './pages/error';
import HomePage from './pages/homepage';
import LoginPage from './pages/login';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LoginPage />} />
    {/* <Route path='/todo' element={<HomePage />} /> */}
    <Route path='/error/:errorCode' element={<Error />} />
    <Route path ='/todo' element={<ProtectedRoutes><HomePage/></ProtectedRoutes>} />
    </Routes>
    </BrowserRouter>
  );
};
export default App;
