import { useEffect, useRef, useState } from "react";
import "../styling/PortfolioPage.css";
import PortfolioItem from "./PortfolioItem";


function PortfolioPage() {
  const cardsRef = useRef([]);
  const portfolioTextRef = useRef(null);
  const [mostRecentHoveredCardRef, setMostRecentHoveredCardRef]= useState(null);

  function handleMouseEnter (event) {
    /* We initialized to null, we are going to pretend this is the gtg element*/
    if (mostRecentHoveredCardRef === null) {
      console.log("here")
    }

    /* If we are here, we need to perform the animation */
    setMostRecentHoveredCardRef(prevState => event.target);
    console.log(mostRecentHoveredCardRef);
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    /* Observers for rendering in icons*/
    const card_observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.5) {
          entry.target.classList.add("animate");
        } 
        if( entry){
          entry.target.addEventListener('mouseenter', handleMouseEnter);
        }
       
      });
    }, options);

    cardsRef.current.forEach((card) => {
      card_observer.observe(card);
    });

     /* Observer for rendering in text*/
    const portfolio_text_observer = new IntersectionObserver( (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.5) {
          entry.target.classList.add("animate-text");
        } 
      });
    }, options);

    portfolio_text_observer.observe(portfolioTextRef.current)



    return () => card_observer.disconnect(); portfolio_text_observer.disconnect();
  }, []);


  /* We probably want to change the layout to  
      PORTFOLIO     |----------------|
                    |App Name        |
      CARD  CARD    |                |
                    |App description |
      CARD  CARD    |----------------|

      App Name and app description change based on what is being hovered

      We cant dynamically render the terminal so our workaround is:
      
      We are going to have four square_terminals that render the text animation inside them.

      onHover for a portfolio_card
        - if the portfolio_card is corresponding the square_terminal
          - animate the terminal on the screen to go right
          - animate the corresponding terminal down
          - Do not repeat type animation
          - Type animation should only appear for the first time

        

    */
  return (
    <div className="portfolio-wrapper">
      <div className="portfolioText" ref={portfolioTextRef}>PORTFOLIO</div>
      
      <div className="portfolio-flex-wrapper">
        <div className="cardsWrapper">
          {/* Need 2 a tags to make the work and animate the lines properly*/}
          <div className="portfolio-card" ref={(el) => (cardsRef.current[0] = el)}>
            <span>
              <span>
                <a href="https://github.com/yungfran/gtg" target="_blank">
                  <span className="app-name">
                      GTG Calisthenics

                      <div className="app-description">
                      A web application to help you track your calisthenics progress.
                      </div>
                  </span>
                </a>
              </span>
            </span>
            <a href="https://github.com/yungfran/gtg" target="_blank">
              <img src="pulling-up-training-silhouette-svgrepo-com.svg" />
            </a>
          </div>

          <div className="portfolio-card" ref={(el) => (cardsRef.current[1] = el)}>
              <span>
                <span>
                  <a href="https://github.com/yungfran/Application-Filler-Python" target="_blank">
                    <span className="app-name">
                        Application Filler

                      <div className="app-description">
                        A CLI tool to automatically apply to jobs on Lever.
                      </div>
                    </span>
                  </a>
                </span>
              </span>
              <a href="https://github.com/yungfran/Application-Filler-Python" target="_blank">
                <img className="cardImg" src="resume-portfolio-svgrepo-com.svg" />
              </a>
          </div>

          <div className="portfolio-card" ref={(el) => (cardsRef.current[2] = el)}>
              <span>
                <span>
                  <a href="https://github.com/yungfran/moodle-iOS" target="_blank">
                    <span className="app-name">
                        Moodle

                        <div className="app-description">
                        iOS app for tracking mood
                        </div>
                    </span>
                  </a>
                </span>
              </span>
              <a href="https://github.com/yungfran/moodle-iOS" target="_blank">
                <img src="moodle.svg" className="filter-green"/>
              </a>
          </div>


          <div className="portfolio-card" ref={(el) => (cardsRef.current[3] = el)}>
              <span>
                <span>
                  <a href="https://github.com/yungfran/interrupted_me" target="_blank">
                    <span className="app-name">
                        interrupted_me

                        <div className="app-description">
                        An all in one discord bot to annoy all your friends by interrupting them when they speak
                        </div>
                    </span>
                  </a>
                </span>
              </span>
              <a href="https://github.com/yungfran/interrupted_me" target="_blank">
                <img src="discord-mark-black.svg"/>
              </a>
          </div>
        </div>

        {/* <div className = "portfolio-terminal">
          <img src="square_terminal.svg"/>
        </div> */}
        <div className = "portfolio-items-wrapper">
          <span className="portfolio-item-class" id="gtg-portfolio-item">
            <PortfolioItem /> 
          </span>

          <span>
          <PortfolioItem className="portfolio-item-class" itemId="application-portfolio-item"/>
          </span>

          <span>
          <PortfolioItem className="portfolio-item-class" itemId="discord-portfolio-item"/> 
          </span>

          <span>
          <PortfolioItem className="portfolio-item-class" itemId="discord-portfolio-item"/> 
          </span>
          
        </div>

      </div>
    </div>
  );
}

export default PortfolioPage;
