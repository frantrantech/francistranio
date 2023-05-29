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

  return (
    <div className="PortfolioWrapper">
      <div className="portfolioText" ref={portfolioTextRef}>PORTFOLIO</div>

      <div className="cardsWrapper">

        <div className="card" ref={(el) => (cardsRef.current[0] = el)}>
            <span>
              <span>
                <span className="app-name">
                    GTG Calisthenics

                    <div className="app-description">
                    A web application to help you track your calisthenics progress.
                  </div>

                </span>
              </span>
            </span>
            <a href="https://github.com/yungfran/gtg">
              <img src="pulling-up-training-silhouette-svgrepo-com.svg" />

            </a>
            
          </div>

        <div className="card" ref={(el) => (cardsRef.current[1] = el)}>
            <span>
              <span>
                <span className="app-name">
                    Application Filler

                  <div className="app-description">
                    A CLI tool to automatically apply to jobs on Lever.
                  </div>

                </span>
              </span>
            </span>
          <a href="https://github.com/yungfran/Application-Filler-Python">
            <img className="cardImg" src="resume-portfolio-svgrepo-com.svg" />
          </a>
        </div>

        <div className="card" ref={(el) => (cardsRef.current[2] = el)} id="discord">
            <span>
              <span>
                <span className="app-name">
                    interrupted_me

                    <div className="app-description">
                    An all in one discord bot to annoy all your friends by interrupting them when they speak
                    </div>
                </span>
              </span>
            </span>
          <a href="https://github.com/yungfran/interrupted_me">
            <img src="discord-mark-black.svg" className="filter-green"/>
          </a>
        </div>

      </div>
    </div>
  );
}

export default PortfolioPage;
