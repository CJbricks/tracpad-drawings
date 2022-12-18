import React from 'react';
import LandingPage from './LandingPage';
import './App.css';
import InfoPage from './InfoPage';
import Merch from './Merch';
import Footer from './Footer';
import 'animate.css/animate.css';


function App() {
  return (
    
      <div className="body">
        <LandingPage />
        <InfoPage />

        <Merch />
        
        <Footer />
      </div>
    
  );

}

export default App;
