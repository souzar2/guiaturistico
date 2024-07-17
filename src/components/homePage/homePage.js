import beachImage from '../../imgs/beachbg.png';
import React from 'react';

function HomePage() {
    return (
      <div className="App">
        
        <div className="left-content">
          <div className="content">
            <h1>Aurora do Tocantins</h1>
            <p>Pontos turísticos</p>
          </div>
        </div>
  
        <div className="right-image">
          <img src={beachImage} alt="Praia" />
        </div>
      </div>
    );
  }
  
  export default HomePage;