import React, { useRef } from 'react';
import image from '../Images/Logo_Image.webp';
import { Link as Link1 } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
const NavbarOne = () => {
  const scroll = useRef(null);
  const colorStyle = {
    color: "white"
  }
  const scrollToCategory = () => {
    scroll.current.scrollIntoView({ inline: "center" });
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className='fillBackground fixed-top'>
        <Container>
          <Navbar.Brand> <img
            src={image}
            className="d-inline-block align-top logoImage"
            alt="React Bootstrap logo"
          /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggleButton" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
            <Nav className="me-auto">
              <Link1
                activeClass="activeCategoryLink"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                onSetActive={() => scrollToCategory}
              >  <Nav.Link href="#home" className="nav-link" style={colorStyle}>Home</Nav.Link></Link1>
              <Link1
                activeClass="activeCategoryLink"
                to="courses"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                onSetActive={() => scrollToCategory}
              > <Nav.Link href="#courses" ref={scroll} className="nav-link" style={colorStyle}> Online Courses</Nav.Link></Link1>
              <Link2 to="/hiring"><Nav.Link className="nav-link" href="#hiring" style={colorStyle}>We're Hiring</Nav.Link></Link2>
              <NavDropdown title={
                <span className="moreNavLinkOne moreNavLink">More...</span>
              } id="collasible-nav-dropdown">
                <Link2 to="/certification" > <NavDropdown.Item href="#link/3.1" className="nav-link"  >Certification</NavDropdown.Item></Link2>
                <Link2 to="/aluminiTeam"><NavDropdown.Item href="#link/3.2" className="nav-link"  >Alumni Team</NavDropdown.Item></Link2>
                <Link2 to="/mentorship"><NavDropdown.Item href="#link/3.32" className="nav-link" > Mentorship</NavDropdown.Item></Link2>
                <Link1
                  activeClass="activeCategoryLink"
                  style={{ color: 'black' }}
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  onSetActive={() => scrollToCategory}
                >  <NavDropdown.Item href="#link/3.3" className="nav-link" >Testimonials</NavDropdown.Item></Link1>
                <Link2 to="/complaints"><NavDropdown.Item href="#link/3.4" className="nav-link" >Complaints</NavDropdown.Item></Link2>
                <Link2 to="/contact"><NavDropdown.Item href="#link/3.5" className="nav-link">Contact Us</NavDropdown.Item></Link2>
              </NavDropdown>
              <Link1
                activeClass="activeCategoryLink"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                onSetActive={() => scrollToCategory}
              >  <Nav.Link href="#link" ref={scroll} className="nav-link" style={colorStyle}>About</Nav.Link></Link1>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavbarOne;