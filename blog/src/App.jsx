import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ERROR_ROUTE, HOME_ROUTE } from './constants/routes';
import { BlogPostProvider } from './contexts/blogPostContext';
import Error from './pages/error';
import Homepage from './pages/homepage';
import PageNotFound from './pages/pageNotFound';
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE} element={
          <BlogPostProvider>
            <Homepage />
          </BlogPostProvider>} />
        <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
