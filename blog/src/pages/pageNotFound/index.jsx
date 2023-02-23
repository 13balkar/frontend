import React from 'react';
import { Footer, Header } from '../../components';
import './page.css';

function PageNotFound () {
  return (
    <div className="app">
      <Header />

      <div className="pageNotFoundContainer">
        <p>404 Error. Page not found</p>
      </div>

      <Footer />
    </div>
  );
}

export default PageNotFound;
