// App.js

import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/homePage/homePage'; 
import AboutPage from './components/AboutPage/AboutPage'
import Carousel from './components/Carroussel/Carrossel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      
      <body className='AppBody'>
        <HomePage />
        <AboutPage />
      </body>
    
    </div>
  );
}

export default App;

