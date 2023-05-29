import '../styling/MenuBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useEffect, useRef} from 'react';




function MenuBar () {

    return (
    <div className = "menu-container">
        <div className="grid-parent">
            <div className ="ftranio menu-elem" >FRANCISTRAN.IO</div>
            <div className ="home-div menu-elem">HOME</div>
            <div className ="portfolio-div menu-elem">PORTFOLIO</div>
            <div className ="skills-div menu-elem">SKILLS</div>
            <div className ="contact-div menu-elem">CONTACT</div>
        </div>
    </div>
    )
}

export default MenuBar;