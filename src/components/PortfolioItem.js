import { useEffect, useRef } from "react";
import "../styling/PortfolioItem.css";
import { TypeAnimation } from 'react-type-animation';


/* A portfolio Item is a window that displays the information of a project I did*/
function PortfolioItem (props) {
  return (
    <div className="portfolio-item-wrapper" >
      <div className="square-terminal-wrapper">
        <img src="square_terminal.svg"/>
       </div> 

        <div className="square-terminal-text-animation-wrapper">
        <TypeAnimation
          sequence={[
            '', // Initial Delay setting
            500,
            props.text,
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