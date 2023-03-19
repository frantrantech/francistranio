import './MenuBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useEffect, useRef} from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';




function MenuBar () {
    const navbarRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            console.log(entry);
            if (entry.isIntersecting) {
                //entry.target.classList.add("is-fixed");
              console.log('Element is at the top of the page');
            } else if (entry.boundingClientRect.top < 0) {
                entry.target.classList.add("is-fixed");
              console.log('Element is past the top of the page');
            } else {
                console.log("remove is fix from elem")
                entry.target.classList.remove("is-fixed");
            }
          },
          { threshold: [0] }
        );
    
        if (navbarRef.current) {
          observer.observe(navbarRef.current);
        }
    
        return () => {
          if (navbarRef.current) {
            observer.unobserve(navbarRef.current);
          }
        };
      }, [navbarRef]);


    return (
    <div className="menu-container">
        {/* <div className="grid-parent">
            <div className ="div1">francistran.io</div>
            <div className ="div2">HOME</div>
            <div className ="div3">PORTFOLIO</div>
            <div className ="div4">SKILLS</div>
            <div className ="div5">CONTACT</div>
        </div> */}
    <div className="space"> </div>
    <Navbar ref = {navbarRef}>
        <Container>
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
    )
}

export default MenuBar;