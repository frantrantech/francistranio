import { useEffect, useRef, useState } from "react";
import "../styling/PortfolioPage.css";
import PortfolioItem from "./PortfolioItem";


function PortfolioPage() {
  const cardsRef = useRef([]);
  const portfolioTextRef = useRef(null);
  const portfolioItemsRef = useRef([]);

  /* 0 : gtg, 1 : application, 3: moodle, 4: discord*/
  const [mostRecentHoveredCard, setMostRecentHoveredCard ]= useState(0);
  const previousHoveredCard = useRef(mostRecentHoveredCard);


  /* Gtg is intitalized as the first element
     
      the "active/current" PortfolioItem on the screen is mostRecentHoveredCardRef*/
  function handleMouseEnter (event) {
    // let currentPortfolioItem = mostRecentHoveredCard
    console.log(event.target);
    let newPortfolioItem = event.target.getAttribute('index-attribute')
    // console.log(currentPortfolioItem == newPortfolioItem);
    setMostRecentHoveredCard(newPortfolioItem);
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
          entry.target.addEventListener('click', handleMouseEnter);
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

    /* Code to run each time our state changes*/
    const portfolioRefToExit = portfolioItemsRef.current[ parseInt(previousHoveredCard.current)];
    const portfolioRefToEnter = portfolioItemsRef.current[ parseInt(mostRecentHoveredCard)]

    if (parseInt(previousHoveredCard.current) == parseInt(mostRecentHoveredCard)){
        /* Did not change items, do nothing */
      } else {
        /* Add exiting attribute to refToExit and active to refToEnter*/
        portfolioRefToExit.setAttribute('data-visibility', 'exiting')
        portfolioRefToEnter.setAttribute('data-visibility', 'active')
          /* Update the previous card to the one we just hovered*/
      previousHoveredCard.current = mostRecentHoveredCard;
      setTimeout(() => {
        portfolioRefToExit.setAttribute('data-visibility', 'inactive')
      },1000);
     
      }
  
    

    return () => card_observer.disconnect(); portfolio_text_observer.disconnect();
  }, [mostRecentHoveredCard]);




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
      <section id="portfolio-section">
      <div className="portfolioText" ref={portfolioTextRef}>PORTFOLIO</div>
      
      <div className="portfolio-flex-wrapper">
        <div className="cardsWrapper">
          {/* Need 2 a tags to make the work and animate the lines properly*/}
          <div index-attribute="0" className="portfolio-card" ref={(el) => (cardsRef.current[0] = el)}>
            <span style={{pointerEvents: 'none'}}>
              <span >
                  <span className="app-name" >
                      GTG Calisthenics

                  </span>
              </span>
            </span>
            <img  style={{pointerEvents: 'none'}} src="pulling-up-training-silhouette-svgrepo-com.svg" />
          </div>

          <div index-attribute="1" className="portfolio-card" ref={(el) => (cardsRef.current[1] = el)}>
              <span style={{pointerEvents: 'none'}}>
                <span>
                    <span className="app-name">
                        Application Filler
                    </span>
                </span>
              </span>
                <img style={{pointerEvents: 'none'}}className="cardImg" src="resume-portfolio-svgrepo-com.svg" />
          </div>

          <div index-attribute="2" className="portfolio-card" ref={(el) => (cardsRef.current[2] = el)}>
              <span style={{pointerEvents: 'none'}}>
                <span>
                    <span className="app-name">
                        Moodle
                    </span>
                </span>
              </span>
              <img style={{pointerEvents: 'none'}} src="moodle.svg" className="filter-green"/>
          </div>


          <div index-attribute="3" className="portfolio-card" ref={(el) => (cardsRef.current[3] = el)}>
              <span style={{pointerEvents: 'none'}}>
                <span>
                    <span className="app-name">
                        interrupted_me
                    </span>
                </span>
              </span>
                <img style={{pointerEvents: 'none'}} src="discord-mark-black.svg"/>
          </div>
        </div>

        <div className = "portfolio-items-wrapper">
          {/* Initialize gtg to the most recent hovered */}
          <span data-visibility="active" index-attribute="0" ref={(el) => (portfolioItemsRef.current[0] = el)}
          className="portfolio-item-class" id="gtg-portfolio-item">
            <PortfolioItem text="$App Name: GTG Calisthenics"/> 
          </span>

          <span data-visibility="inactive" index-attribute="1" ref={(el) => (portfolioItemsRef.current[1] = el)} 
            className="portfolio-item-class" id="application-portfolio-item">
            <PortfolioItem  text="$App Name: Application "/>
          </span>

          <span data-visibility="inactive" index-attribute="2" ref={(el) => (portfolioItemsRef.current[2] = el)} className="portfolio-item-class" id="moodle-portfolio-item" >
          <PortfolioItem  text="$App Name: moodle" /> 
          </span>

          <span data-visibility="inactive" index-attribute="3" ref={(el) => (portfolioItemsRef.current[3] = el)}  className="portfolio-item-class" id="discord-portfolio-item" >
            <PortfolioItem text="$App Name: discord"/> 
          </span>

        </div>

      </div>
      </section>
    </div>
  );
}

export default PortfolioPage;
