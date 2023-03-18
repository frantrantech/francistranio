import { useEffect, useRef } from "react";
import "./PortfolioPage.css";

function PortfolioPage() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.5) {
          entry.target.classList.add("animate");
        } 
      });
    }, options);

    cardsRef.current.forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="PortfolioWrapper">
      <div className="portfolioText">MY PORTFOLIO</div>

      <div className="cardsWrapper">
        <div className="card" ref={(el) => (cardsRef.current[0] = el)}>
          <a href="https://github.com/yungfran/Application-Filler-Python">
            <img className="cardImg" src="resume-portfolio-svgrepo-com.svg" />
          </a>
        </div>

        <div className="card" ref={(el) => (cardsRef.current[1] = el)}>
          <a href="https://github.com/yungfran/interrupted_me">
            <img src="discord-icon-svgrepo-com.svg" />
          </a>
        </div>

        <div className="card" ref={(el) => (cardsRef.current[2] = el)}>
          <a href="https://github.com/yungfran/gtg">
            <img src="pulling-up-training-silhouette-svgrepo-com.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
