import React from 'react';
import ComponentsNavbar from './ComponentsNavbar';
import Footer from './Footer';
import { useRef } from 'react';
import MentorshipImage from '../Images/Mentorship.jpg';
import { Link as Link1 } from 'react-scroll';
import MentorshipImage_1 from "../Images/Mentorship_1.jpg";
import MentorshipData from '../JsonFolder/MentorshipData';
function Mentorship() {
  const scroll = useRef(null);
  const scrollToCategory = () => {
    scroll.current.scrollIntoView({ inline: "center" });
  };
  return (
    <div>
      <ComponentsNavbar />
      <br />
      <br />
      <br />
      <h1 className="mentorshipTitle">Mentorship</h1>
      <div className="container">
        <div id="mentorship" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#mentorship" data-slide-to="0" className="active"></li>
            <li data-target="#mentorship" data-slide-to="1"></li>
            <li data-target="#mentorship" data-slide-to="2"></li>
          </ul>
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img src={MentorshipImage} alt="mentorship" width="100%" style={{ filter: ' brightness(35%)' }}></img>
              <div className="carousel-content">
                <h4>
                  “The delicate balance of mentoring someone is not creating them in your own image, but giving them the opportunity to create themselves.”
                </h4>
                <p>— Steven Spielberg</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={MentorshipImage} alt="mentorship" width="100%" style={{ filter: ' brightness(35%)' }}></img>
              <div className="carousel-content">
                <h2 className="h2Heading">TEN: Revolutionising Mentorship
                </h2>
                <h5 className="h5Heading">
                  What sets best of the institution like IITs in India and Ivy League in the US apart from any other educational institute?</h5>
                <h6 className="h6Heading">It is their close-knit network of Alumni who help the students of these institutes succeed in their career by mentoring them and providing guidance and help at different stages of their career, starting from their college years.
                </h6>
              </div>
            </div>
            <div className="carousel-item">
              <img src={MentorshipImage} alt="mentorship" width="100%" style={{ filter: ' brightness(35%)' }} ></img>
              <div className="carousel-content">
                <h2 className="mentors"> Get the best mentors</h2>
                <h5 className="mentorDescription">TEN is making quality mentorship accessible to all</h5>
                <div className="applyNow" >
                  <Link1
                    activeClass="activeCategoryLink"
                    className="btn btn-primary btn-grad"
                    to="mentorshipRegistration"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onSetActive={() => scrollToCategory}
                  >Apply Now</Link1>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#mentorship" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#mentorship" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div><div className="wrapper">
        <div className="divider div-transparent div-dot"></div>
      </div>
      <h2 className="subtitle">"GET INSTANT ACCESS TO THESE EXCLUSIVE LESSONS AND 100's MORE..."</h2>
      <div className="container" >
        <div className="row">
          <div className="col-md-12 card"  >
            <div className="row ">
              <div className=" col-md-5 paymentImage">
                <img className="w-100" src={MentorshipImage_1} height="100%" alt="bookStack"></img>
              </div>
              <div className="col-md-7 learningBlock"  >
                <div className="card-block" >
                  <h4 className="card-text learningHeading "  >
                    The new way of learning.</h4>
                  <p className="card-text learningDescription"  >
                    If you're like most of our members you believe in expanding your knowledge and leveling up your skillsets, but you just don't have the time to read the books that you know will get you there.
                  </p>
                  <p className="card-text learningDescription"  >
                    We engineered a new, fun and engaging way to learn directly from the highest level authors and thinkers...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mentorshipButton">
        <Link1
          activeClass="activeCategoryLink"
          className="btn btn-primary btn-grad"
          to="mentorshipRegistration"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          onSetActive={() => scrollToCategory}
        >TRY TEN MENTORSHIP @ INR 500</Link1>
      </div>
      <div className="wrapper">
        <div className="divider div-transparent div-dot"></div>
      </div>
      <h1 className="whyTen">Why TEN?</h1>
      <div className="container tenBlock"  >
        <div className="row">{
          MentorshipData.map((data) => {
            return <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mentorCard" >
              <div className="card  h-100"  >
                <div className="card-body">
                  <h5 className="card-text mentorCardText">{data.about}</h5>
                </div>
              </div>
            </div>
          })
        }
        </div>
      </div>
      <div className="wrapper">
        <div className="divider div-transparent div-dot"></div>
      </div>
      <div id="mentorshipRegistration" >
        <h1 className="careerForum">Career forum registration </h1>
        <div className="container" >
          <div className="row">
            <div className="col-md-12 " style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>
              <div className="row ">
                <div className="col-md-4">
                  <img className="w-100" src="https://static.wixstatic.com/media/693073_4c899eb662c84031926c133cf5f32b95~mv2.jpg/v1/fill/w_520,h_683,al_c,q_80,usm_0.66_1.00_0.01/TEN_PAY_1.webp" alt="payment"></img>
                </div>
                <div className="col-md-8">
                  <div className="card-block" >

                    <div className="registrationDiv">
                      <form>
                      <label className="registrationLabel">Full Name *</label>
                      <input required className="info" type="text" />
                      <label className="registrationLabel">Email *</label>
                      <input required className="info" type="email" />
                      <label  className="registrationLabel">Mobile Number *</label>
                      <input required className="info" type="number" />
                      <label  className="registrationLabel">Payment Transaction ID*</label>
                      <input required className="info " type="number" />
                      <div className="registrationButtonContainer">
                      <button type="submit" className="btn btn-primary registerButton">Register</button>
                      </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer position="sticky" bottom="0px" left="0px" right="0px" />
    </div>
  );
}
export default Mentorship;