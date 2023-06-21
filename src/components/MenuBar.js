import '../styling/MenuBar.css';
import IntroPage from './IntroPage';
import PortfolioPage from './PortfolioPage';
import Skills from './Skills';
import { useState, useRef, useEffect } from 'react';

function MenuBar () {
    /* Hard code positions on the screen instead of using intersection observer to see where 
       we are on the page*/
    const [screenYPos,setScreenYPos] = useState(0);

    /* String to represent where our screen is, default to home*/
    const [currentPosition,setCurrentPosition] = useState(null);

    const homeRef = useRef(null);
    const portfolioRef = useRef(null);
    const skillsRef = useRef(null)
    const contactRef = useRef(null);


    /* Positions on the screen we could be in*/
    const HOME = "HOME_POSITION";
    const PORTFOLIO = "PORTFOLIO_POSITION";
    const SKILLS = "SKILLS_POSITION"
    const CONTACT = "CONTACT_POSITION"

    /* As soon as screenYPos reaches one of these positions, update our css */
    const PORTFOLIO_POSITION = 500;
    const SKILLS_POSITION = 1400;
    const CONTACT_POSITION = 1850;

    function isPortfolioPosition(yPos){
        return yPos >= PORTFOLIO_POSITION && yPos < 1400;
    }

    function isSkillPosition(yPos) {
        return yPos >= SKILLS_POSITION && yPos < CONTACT_POSITION
    }

    function isContactPosition(yPos){
        return yPos >= CONTACT_POSITION
    }

    function isHomePosition(yPos) {
        return yPos < PORTFOLIO_POSITION
    }

    useEffect( () => {
        /* Whenever we scroll, update state (screenYPos) */
        const handleScroll = () => setScreenYPos(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        const prevCurrentPosition = currentPosition;
        
        /* This is the first time we reached the portfolio area*/
        if (isPortfolioPosition(screenYPos) && currentPosition !== PORTFOLIO){
            /* Update currentPosition*/
            setCurrentPosition(PORTFOLIO);
            /* Remove leaving_position in case it was added so we can continue to animate*/
            portfolioRef.current.classList.remove("leaving_position");
            portfolioRef.current.classList.add("active_position");

            /* Remove the class from the area we are coming. add leaving_position to that class to fade out color */
            if (prevCurrentPosition === HOME){
                homeRef.current.classList.remove("active_position");
                homeRef.current.classList.add("leaving_position");
            } else if (prevCurrentPosition === SKILLS){
                skillsRef.current.classList.remove("active_position");
                skillsRef.current.classList.add("leaving_position");
            }
        } 
        
        else if( isSkillPosition(screenYPos) && currentPosition !== SKILLS){
            setCurrentPosition(SKILLS)
            skillsRef.current.classList.remove("leaving_position");
            skillsRef.current.classList.add("active_position");
            
            if (prevCurrentPosition === PORTFOLIO){
                portfolioRef.current.classList.remove("active_position");
                portfolioRef.current.classList.add("leaving_position");
            } else if (prevCurrentPosition === CONTACT){
                contactRef.current.classList.remove("active_position");
                contactRef.current.classList.add("leaving_position");
            }
        } 

        else if ( isContactPosition(screenYPos) && currentPosition !== CONTACT) {
            setCurrentPosition(CONTACT);
            contactRef.current.classList.remove("leaving_position");
            contactRef.current.classList.add("active_position");
            skillsRef.current.classList.remove("active_position");
            skillsRef.current.classList.add("leaving_position");
        } 
        else if ( isHomePosition(screenYPos) && currentPosition !== HOME){
            setCurrentPosition(HOME);
            homeRef.current.classList.remove("leaving_position");
            homeRef.current.classList.add("active_position");
            portfolioRef.current.classList.remove("active_position");
            portfolioRef.current.classList.add("leaving_position");
        }
        

    }, [screenYPos]) /* Update whenever screenYPos changes*/

    /* Classes have leaving_position by default so that we can animate them fading out*/
    return (
    <div className = "menu-container">
        <div className="flex-parent">
            <div className ="ftranio menu-elem"> FRANCISTRAN.IO </div>
            <a ref={homeRef} href="#home-section" className ="home-div menu-elem leaving_position">HOME</a>
            <a ref={portfolioRef} href="#portfolio-section" className ="portfolio-div menu-elem leaving_position">PORTFOLIO</a>
            <a ref={skillsRef} href="#skills-section" className ="skills-div menu-elem leaving_position">SKILLS</a>
            <a ref={contactRef} href="#contact-section" className ="contact-div menu-elem leaving_position">CONTACT</a>
        </div>
    </div>
    )
}

export default MenuBar;