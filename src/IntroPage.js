import './App.css';
import './IntroPage.css'
import { useEffect, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation';
import AnimatedArrow from './AnimatedArrow';

function IntroPage() {

  return (
    <div className="background-container">
      <img src="firstscreen.png" className="background-image" alt="Background" />

      <div className="terminal-wrapper"> 
        <img src ="terminal2.svg" />
        <TypeAnimation
        className='introduction'
      sequence={[
        '$ Welcome to my portfolio, I\'m Francis Tran, a backend software engineer',
        1000,
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      speed={2}
      style={{ fontSize: '1.5em' }}
    />
    
      </div>
    </div>
  );
}

export default IntroPage;
