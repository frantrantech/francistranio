import logo from './logo.svg';
import './App.css';
import './IntroPage.css'
import { useEffect, useRef } from 'react'

function IntroPage() {

  return (
    <div className="background-container">
      <img src="firstscreen.png" className="background-image" alt="Background" />
      <img src="terminal.svg" className="overlay-image" alt="Overlay" />
    </div>
  );
}

export default IntroPage;
