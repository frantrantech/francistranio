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
        <div className = "introduction"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</div>
      </div>
    </div>
  );
}

export default IntroPage;
