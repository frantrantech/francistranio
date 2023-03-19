import './SoftwareEngineer.css'
import anime from 'animejs'
import { useEffect, useRef} from 'react';

function SoftwareEngineer () {
    useEffect(() => {
      // Wrap every letter in a span
      var textWrapper = document.querySelector('.ml11 .letters');
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter'>$&</span>"
      );
  
      // Create animation timeline
      anime.timeline({ loop: false })
        /* Bring in cursor*/
        .add({ 
          targets: '.ml11 .line',
          scaleY: [0,1],
          opacity: [0.5,1],
          easing: "easeOutExpo",
          duration: 700,
          delay: 6000
        })
        .add({
          targets: '.ml11 .line',
          translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
          easing: "easeOutExpo",
          duration: 700,
        })
        .add({
          targets: '.ml11 .letter',
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 100,
          offset: '-=775',
          delay: (el, i) => 20 * (i+1)
        })
        .add({
          targets: '.line',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 200
        });
    }, []);
  
    return (
      <h1 className="ml11">
        <span className="text-wrapper">
          <span className="line line1"></span>
          <span className="letters">SOFTWARE&nbsp;ENGINEER</span>
        </span>
      </h1>
    );
  }

export default SoftwareEngineer;