import { useEffect, useRef } from "react";
import "../styling/PortfolioItem.css";
import { TypeAnimation } from 'react-type-animation';

function PortfolioItem () {
  return (
    <div className="portfolio-item-wrapper" >
      <div className="square-terminal-wrapper">
        <img src="square_terminal.svg"/>
       </div> 

        <div className="square-terminal-text-animation-wrapper">
        <TypeAnimation
          className='small-terminal-text'
          sequence={[
            '', // Initial Delay setting
            500,
            '$ App Name: GTG Calisthenics',
            1000,
            () => {}
          ]}
          wrapper="div"
          cursor={false}
          speed={10}/>

      </div>
    
    </div>
  )
}

export default PortfolioItem;