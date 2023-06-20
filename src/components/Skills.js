import "../styling/Skills.css"
import { useEffect, useRef } from "react"

function Skills() {
    const animatingElemsRef = useRef([]);
    const skills_text_ref = useRef(null);

    useEffect(() => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.75,
      };
  
      const skills_observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.5) {
            entry.target.classList.add("animate");
          } 
        });
      }, options);
  
      animatingElemsRef.current.forEach((card) => {
        skills_observer.observe(card);
      });

      const skills_text_observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.5) {
            entry.target.classList.add("animate-skills");
          } 
        });
      }, options);

      skills_text_observer.observe(skills_text_ref.current);


  
      return () => skills_observer.disconnect();
    }, []);

  return (
    <div className="skills-wrapper">
      <section id="skills-section"> 
      <div className="separation-drawing"></div>
      <div className="skills-text" ref={skills_text_ref}>SKILLS</div>
      <div className="grid-container">
        <div className="line-animiation-wrapper">

          <div className="div1 color-animation-90 " ref={(ref) => animatingElemsRef.current.push(ref)}>
            <span className="text-slide-animation " ref={(ref) => animatingElemsRef.current.push(ref)}>Java</span>
          </div>
          <div className="div5 color-animation-90 " ref={(ref) => animatingElemsRef.current.push(ref)}>
            <span className="text-slide-animation" ref={(ref) => animatingElemsRef.current.push(ref)}>Backend Systems</span>
          </div>


          <div className="div2 color-animation-80" ref={(ref) => animatingElemsRef.current.push(ref)}>
            <span className="text-slide-animation" ref={(ref) => animatingElemsRef.current.push(ref)}>Python</span>
          </div>
          <div className="div6 color-animation-70 " ref={(ref) => animatingElemsRef.current.push(ref)}>
            <span className="text-slide-animation " ref={(ref) => animatingElemsRef.current.push(ref)}>Amazon Web Services</span>
          </div>

          <div className="div3 color-animation-80" ref={(ref) => animatingElemsRef.current.push(ref)}>
            <span className="text-slide-animation" ref={(ref) => animatingElemsRef.current.push(ref)}>TypeScript / React / Node</span>
          </div>
          <div className="div7 color-animation-60" ref={(ref) => animatingElemsRef.current.push(ref)}>
            <span className="text-slide-animation" ref={(ref) => animatingElemsRef.current.push(ref)}>Full Stack Web Development</span>
          </div>


          <div className="div4 color-animation-50" ref={(ref) => animatingElemsRef.current.push(ref)}>
            <span className="text-slide-animation" ref={(ref) => animatingElemsRef.current.push(ref)}>Swift</span>
          </div>
          <div className="div8 color-animation-50" ref={(ref) => animatingElemsRef.current.push(ref)}>
            <span className="text-slide-animation" ref={(ref) => animatingElemsRef.current.push(ref)}>ACH Payments</span>
          </div>

        </div>
      </div>
      </section>
    </div>
  );
}

export default Skills;
