import { useEffect, useRef } from "react";
import "../styling/PortfolioItem.css";
import { TypeAnimation } from 'react-type-animation';

/* A portfolio Item is a window that displays the information of a project I did*/
function PortfolioItem (props) {
  const projectLink = props.projectLink;

  const githubSVGRef = useRef(null);

  useEffect( () => {
      if(!projectLink){
        githubSVGRef.current.style.opacity = 0;
      }
  },[]);


  return (
    <div className="portfolio-item-wrapper" >
      <div className="square-terminal-wrapper">
        <img src="square_terminal.svg"/>
      </div> 

      <div className="project-name">
        {props.projectName}
      </div>

      <div className="project-description-wrapper"> 
        <span className="project-description-text"> 
          {props.projectDescription}
        </span>
      </div>  

      <a style={{textDecoration:"none"}} href={projectLink} target="_blank" className="github-link-wrapper" >
        <img ref={githubSVGRef}src="github-mark.svg"/>
      </a>
    
    </div>
  )
}

export default PortfolioItem;