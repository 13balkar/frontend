import React from 'react';
import { Cards, Footer, Header } from '../../components';
import './homepage.css';

function App () {
  return (
    <div className="app">
      <Header />

      <Cards />

      <Footer />
    </div>
  );
}

export default App;
