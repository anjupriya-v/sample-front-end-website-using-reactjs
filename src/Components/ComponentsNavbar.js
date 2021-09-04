import React, { useRef } from 'react';
import { useState } from 'react';
import image from '../Images/Logo_Image.webp'
import { Link as Link2 } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const Navbar = () => {
  const scroll = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      dropdownOpen: !dropdownOpen,
    }))
  }
  const colorStyle = {
    color: "white"
  }
  const onMouseEnter = () => {
    setDropdownOpen(true)
  }
  const onMouseLeave = () => {
    setDropdownOpen(false)
  }
  return (
    <nav className='fillBackground navbar navbar-expand-lg navbar-light  fixed-top' >
      <div className="container">
        <img src={image} className="navbar-brand logoImageOne" alt="logo"></img>
        <button className="navbar-toggler toggleButtonTwo " type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item navText">
              <Link2 className="nav-link" to="/" style={colorStyle}>Home</Link2>
            </li>
            <li className="nav-item " >
              <Link2 to="/courses" className="nav-link" style={colorStyle}>Online Courses</Link2>
            </li>
            <li className="nav-item">
              <Link2 className="nav-link" to="/hiring" style={colorStyle}>We're Hiring</Link2>
            </li>
            <Dropdown
              className="d-inline-block"
              onMouseOver={onMouseEnter}
              onMouseLeave={onMouseLeave}
              isOpen={dropdownOpen}
              toggle={toggle}
            >
              <DropdownToggle caret className="moreNavLinkTwo moreNavLink" tabIndex="1" >More</DropdownToggle>
              <DropdownMenu >
                <DropdownItem><Link2 to="/certification">Certification</Link2></DropdownItem>
                <DropdownItem><Link2 to="/aluminiTeam">Alumni Team</Link2></DropdownItem>
                <DropdownItem><Link2 to="/mentorship">Mentorship</Link2></DropdownItem>
                <DropdownItem><Link2
                  to="/testimonials"
                >Testimonials</Link2> </DropdownItem>
                <DropdownItem><Link2 to="/contact">Contact Us</Link2></DropdownItem>
                <DropdownItem><Link2 to="/complaints">Complaints</Link2></DropdownItem>
              </DropdownMenu>
              &nbsp;&nbsp;&nbsp;
            </Dropdown>
            <li className="nav-item" ref={scroll}>
              <Link2 to="/about" className="nav-link" style={colorStyle}>
                About
              </Link2>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;