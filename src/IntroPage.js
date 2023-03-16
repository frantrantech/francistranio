import logo from './logo.svg';
import './App.css';
import './IntroPage.css'
import { useEffect, useRef } from 'react'

function IntroPage() {

  return (
    <div className="background-container">
      <img src="firstscreen.png" className="background-image" alt="Background" />

      <div className="terminal-wrapper"> 
        <img src ="terminal.svg" />
        <div className = "introduction"> $ Welcome to francistran.io, I am of course, Francis Tran</div>
      </div>
    </div>
  );
}

export default IntroPage;
