import '../styling/MenuBar.css';
import IntroPage from './IntroPage';
import PortfolioPage from './PortfolioPage';
import Skills from './Skills';
import { useState, useRef } from 'react';

function MenuBar () {

    
    return (
    <div className = "menu-container">
        <div className="grid-parent">
            <div className ="ftranio menu-elem" >FRANCISTRAN.IO</div>
            <a href="#home-section" className ="home-div menu-elem">HOME</a>
            <a href="#portfolio-section" className ="portfolio-div menu-elem">PORTFOLIO</a>
            <a href="#skills-section" className ="skills-div menu-elem">SKILLS</a>
            <a href="#contact-section" className ="contact-div menu-elem">CONTACT</a>
        </div>
    </div>
    )
}

export default MenuBar;