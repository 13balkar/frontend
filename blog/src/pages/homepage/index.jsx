import React from 'react';
import { Cards, Footer, Header } from '../../components';
import './homepage.css';

function Homepage () {
  return (
    <div className="app">
      <Header />

      <Cards />

      <Footer />
    </div>
  );
}

export default Homepage;
