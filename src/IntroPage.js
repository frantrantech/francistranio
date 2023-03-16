import logo from './logo.svg';
import './App.css';
import './IntroPage.css'
import { useEffect, useRef } from 'react'

function IntroPage() {

  return (
    <div className="background-container">
      <img src="firstscreen.png" className="background-image" alt="Background" />

      <div className="overlay-image"> 
        <img src ="terminal.svg"/>
        <div className = "introduction"> hi</div>
      </div>
    </div>
  );
}

export default IntroPage;
