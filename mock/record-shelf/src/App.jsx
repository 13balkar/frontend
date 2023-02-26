import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SyncPage, SongPage } from './pages';
import { HOME_PATH, SONGS_PATH } from './constants/routes';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PATH} element={<SyncPage />} />
        <Route path={SONGS_PATH} element={<SongPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
