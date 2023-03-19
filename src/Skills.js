import "./Skills.css"
import { useEffect, useRef } from "react"

function Skills() {
    const cardsRef = useRef([]);

    useEffect(() => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.75,
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
    <div className="skills-wrapper">
      <div className="separation-drawing"></div>
      <div className="skills-text">SKILLS</div>
      <div className="grid-container">
        <div className="line-animiation-wrapper">

          <div className="div1 color-animation-90 " ref={(ref) => cardsRef.current.push(ref)}>
            <span className="text-slide-animation " ref={(ref) => cardsRef.current.push(ref)}>Java</span>
          </div>
          <div className="div5 color-animation-90 " ref={(ref) => cardsRef.current.push(ref)}>
            <span className="text-slide-animation" ref={(ref) => cardsRef.current.push(ref)}>Backend Systems</span>
          </div>


          <div className="div2 color-animation-80" ref={(ref) => cardsRef.current.push(ref)}>
            <span className="text-slide-animation" ref={(ref) => cardsRef.current.push(ref)}>Python</span>
          </div>
          <div className="div6 color-animation-70 " ref={(ref) => cardsRef.current.push(ref)}>
            <span className="text-slide-animation " ref={(ref) => cardsRef.current.push(ref)}>Amazon Web Services</span>
          </div>

          <div className="div3 color-animation-80" ref={(ref) => cardsRef.current.push(ref)}>
            <span className="text-slide-animation" ref={(ref) => cardsRef.current.push(ref)}>TypeScript / React / Node</span>
          </div>
          <div className="div7 color-animation-60" ref={(ref) => cardsRef.current.push(ref)}>
            <span className="text-slide-animation" ref={(ref) => cardsRef.current.push(ref)}>Full Stack Web Development</span>
          </div>


          <div className="div4 color-animation-70" ref={(ref) => cardsRef.current.push(ref)}>
            <span className="text-slide-animation" ref={(ref) => cardsRef.current.push(ref)}>Swift</span>
          </div>
          <div className="div8 color-animation-50" ref={(ref) => cardsRef.current.push(ref)}>
            <span className="text-slide-animation" ref={(ref) => cardsRef.current.push(ref)}>iOS</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
