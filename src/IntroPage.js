import './App.css';
import './IntroPage.css'
import { useEffect, useRef } from 'react'
import SoftwareEngineer from './SoftwareEngineer';
import { TypeAnimation } from 'react-type-animation';

function IntroPage() {

  return (
    <div className="background-container">
      <img src="firstscreen.png" className="background-image" alt="Background" />

      <div className="terminal-wrapper"> 
        <img src ="terminal.svg" />
        <TypeAnimation
        className='introduction'
      sequence={[
        '$ Welcome to my portfolio, I\'m Francis Tran, a',
        1000,
        () => {}
      ]}
      wrapper="div"
      cursor={false}
      speed={5}
    />
      <div className = "software-engineer-animation">
        < SoftwareEngineer />
      </div>
   
      </div>
    </div>
  );
}

export default IntroPage;
