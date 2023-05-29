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
            <div className ="ftranio">francistran.io</div>
            <div className ="home-div">HOME</div>
            <div className ="portfolio-div">PORTFOLIO</div>
            <div className ="skills-div">SKILLS</div>
            <div className ="contact-div">CONTACT</div>
        </div>
    </div>
    )
}

export default MenuBar;