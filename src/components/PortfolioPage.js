import { useEffect, useRef } from "react";
import "../styling/PortfolioPage.css";


function PortfolioPage() {
  const cardsRef = useRef([]);
  const portfolioTextRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const card_observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.5) {
          entry.target.classList.add("animate");
        } 
      });
    }, options);

    cardsRef.current.forEach((card) => {
      card_observer.observe(card);
    });

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
  
  */
  return (
    <div className="PortfolioWrapper">
      <div className="portfolioText" ref={portfolioTextRef}>PORTFOLIO</div>

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
              <img src="discord-mark-black.svg" className="filter-green"/>
            </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
