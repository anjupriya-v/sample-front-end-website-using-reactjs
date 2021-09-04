import React from 'react';
import './App.css';
import FloatingIcon from './Components/FloatingIcon';
import HomePageNavbar from './Components/HomePageNavbar';
import { Element } from 'react-scroll'
import About from './Components/About'
import CourseBenefits from './Components/CourseBenefits';
import { Link } from 'react-scroll'
import Footer from './Components/Footer';
import CoursesComp from './Components/CoursesComp';
import { useRef } from 'react';
import TestimonialsComp from './Components/TestimonialsComp';
import TENDiscordChannel from './Components/TENDiscordChannel';
const App = () => {
  const scroll = useRef(null);
  const scrollToCategory = () => {
    scroll.current.scrollIntoView({ inline: "center" });
  };
  return (
    <div>
      <div className="header">
        <Element name="home">
          <HomePageNavbar />
        </Element>
        <br />
        <br />
        <br />
        <br />
        <FloatingIcon />
        <div className="mainHeading">
          <h1 >   THE ENTREPRENEURSHIP NETWORK</h1>
          <div className="para">
            <h3 className="headingOne">The World Of Knowledge</h3>
            <h3 className="headingTwo">at your fingertips</h3>
          </div>
          <Link
            activeClass="activeCategoryLink"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            onSetActive={() => scrollToCategory} ><button ref={scroll} className="headerButton btn btn-primary" style={{ marginTop: '1em' }}>
              Get Started
            </button></Link>
        </div>
      </div>
      <Element name="about"><About /></Element>
      <CoursesComp />
      <CourseBenefits />
      <TENDiscordChannel />
      <div className="wrapper">
        <div className="divider div-transparent div-dot"></div>
      </div>
      <TestimonialsComp />
      <Footer />
    </div>
  );
}
export default App;