import { useEffect, useRef, useState } from "react";
import "../styling/PortfolioPage.css";
import PortfolioItem from "./PortfolioItem";


function PortfolioPage() {
  const cardsRef = useRef([]);
  const portfolioTextRef = useRef(null);
  const portfolioItemsRef = useRef([]);

  /* 1 : gtg, 2 : application, 3: moodle, 4: discord*/
  const [mostRecentHoveredCard, setMostRecentHoveredCard ]= useState(0);
  const previousHoveredCard = useRef(mostRecentHoveredCard);


  /* Gtg is intitalized as the first element
     
      the "active/current" PortfolioItem on the screen is mostRecentHoveredCardRef*/
  function handleMouseEnter (event) {
    let newPortfolioItem = event.target.getAttribute('index-attribute')
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
    console.log(portfolioRefToExit);
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
      CARD          |                |
                    |App description |
      CARD          |----------------|

      CARD  

      CARD    

      Parallax the Cards, they each get a page
        *Cards not on that page will still be mostly visible

      Stars background
      sticky terminal on right side

      1: Moon and satelite [midnight black]

      2: clouds and small react symbols[lavender]
        2.a) react symbols will rotate

      3: sun and clouds [redish orange]

      4: gust of grass and trees [blue]
    */

      /* Bring in the portfolio cards with react spring https://codesandbox.io/s/q6ffu*/
  return (
    <div className="portfolio-wrapper">
      <section id="portfolio-section">
      <div className="portfolioText" ref={portfolioTextRef}>PORTFOLIO</div>
      
      <div className="portfolio-flex-wrapper">
        <div className="cardsWrapper">

          <div index-attribute="1" className="portfolio-card" ref={(el) => (cardsRef.current[1] = el)}>
            <span style={{pointerEvents: 'none'}}>
              <span></span>
            </span>
            <img  style={{pointerEvents: 'none'}} src="pulling-up-training-silhouette-svgrepo-com.svg" />
          </div>

          <div index-attribute="2" className="portfolio-card" ref={(el) => (cardsRef.current[2] = el)}>
              <span style={{pointerEvents: 'none'}}>
                <span></span>
              </span>
                <img style={{pointerEvents: 'none'}} src="discord-mark-black.svg"/>
          </div>

          <div index-attribute="3" className="portfolio-card" ref={(el) => (cardsRef.current[3] = el)}>
              <span style={{pointerEvents: 'none'}}>
                <span></span>
              </span>
              <img style={{pointerEvents: 'none'}} src="moodle.svg" className="filter-green"/>
          </div>

          <div index-attribute="4" className="portfolio-card" ref={(el) => (cardsRef.current[4] = el)}>
              <span style={{pointerEvents: 'none'}}>
                <span></span>
              </span>
              <img style={{pointerEvents: 'none'}}className="cardImg" src="resume-portfolio-svgrepo-com.svg" />
          </div>
        </div>

        <div className = "portfolio-items-wrapper">
          {/* Initialize gtg to the most recent hovered */}

          <span data-visibility="active" index-attribute="0" ref={(el) => (portfolioItemsRef.current[0] = el)}
          className="portfolio-item-class" id="first-portfolio-item">
            <PortfolioItem projectName="Click on a project to learn more"/>           
          </span>

          <span data-visibility="inactive" index-attribute="1" ref={(el) => (portfolioItemsRef.current[1] = el)} className="portfolio-item-class" id="gtg-portfolio-item">
            <PortfolioItem projectName="$App Name: GTG Calisthenics"
             projectDescription="React and Node web application that computes and adjusts a bodyweight workout progression
              following the greasing the groove methodology"
              projectLink="https://github.com/yungfran/gtg"
             /> 
          </span>

          <span data-visibility="inactive" index-attribute="2" ref={(el) => (portfolioItemsRef.current[2] = el)}  className="portfolio-item-class" id="discord-portfolio-item" >
            <PortfolioItem projectName="$App Name: interrupted_me" 
            projectDescription="An all-in-one discord bot meant to annoy your friends. 
            Inconspicuously interrupt certain people when they speak, play notification / knocking sounds, ping server members randomly"
            projectLink="https://github.com/yungfran/interrupted_me"/> 
          </span>

          <span data-visibility="inactive" index-attribute="3" ref={(el) => (portfolioItemsRef.current[3] = el)} className="portfolio-item-class" id="moodle-portfolio-item" >
            <PortfolioItem  projectName="$App Name: Moodle" 
            projectDescription="iOS application that allows users to record and track their mood via various visualizations"
            projectLink="https://github.com/yungfran/moodle-iOS" /> 
          </span>

          <span data-visibility="inactive" index-attribute="4" ref={(el) => (portfolioItemsRef.current[4] = el)} 
            className="portfolio-item-class" id="application-portfolio-item">
            <PortfolioItem  projectName="$App Name: laidOff "
             projectDescription="Selenium script that automatically applies to linkedin easy apply roles. 
             Completes and submits applications to Lever and Greenhouse job opening using links to role openings"
             projectLink="https://github.com/yungfran/Application-Filler-Python"/>
          </span>
        </div>

      </div>
      </section>
    </div>
  );
}

export default PortfolioPage;
