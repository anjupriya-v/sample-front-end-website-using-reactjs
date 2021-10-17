import React from "react";
import "../cssModules/navbar.css";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import img4 from "../Images/img4.png";
import img5 from "../Images/img5.png";
import img6 from "../Images/img6.png";
import img7 from "../Images/img7.png";
import img8 from "../Images/img8.png";

const Navbar = () => {
  return (
    <div>
      <div className="smallerDevice smallDeviceButton pt-2 ">
        <div className="mr-auto mediumDevice">
          <a
            className="mr-5 ml-4"
            href="#"
            data-toggle="modal"
            data-target="#loginModal"
          >
            Login
          </a>
          <a href="#" data-toggle="modal" data-target="#signupModal">
            Sign Up
          </a>
        </div>
        <button className="btn btn-primary">
          <i className="fa fa-users groupIcon" aria-hidden="true"></i>
          <span className="ml-3">Join Group</span>
        </button>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container navContainer">
          <div className="logoContainer">
            <img className="navbar-brand " src={img1} alt="atgLogo1" />
            <img className="navbar-brand " src={img2} alt="atgLogo2" />
            <img className="navbar-brand " src={img3} alt="atgLogo3" />
            <img className="navbar-brand " src={img4} alt="atgLogo4" />
            <img className="navbar-brand " src={img5} alt="atgLogo5" />
            <img className="navbar-brand " src={img6} alt="atgLogo6" />
            <img className="navbar-brand " src={img7} alt="atgLogo7" />
            <img className="navbar-brand " src={img8} alt="atgLogo8" />
          </div>
          <div className="searchFieldContainer">
            <form className="form-inline my-2 my-lg-0">
              <div className="iconDiv">
                <i className="fa fa-search" aria-hidden="true"></i>
              </div>
              <input
                className="form-control mr-sm-2 searchField"
                type="search"
                placeholder="Search for your favourite groups in ATG"
                aria-label="Search"
              ></input>
            </form>
          </div>
          <div className="accountButton">
            <div className="dropdown">
              <a
                className="dropdown-toggle nav-link"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="create">Create Account,</span> It's free
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#loginModal"
                >
                  Login
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#signupModal"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="signupModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="signupModal"
        aria-hidden="true"
      >
        <SignupModal />
      </div>
      <div
        className="modal fade"
        id="loginModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="loginModal"
        aria-hidden="true"
      >
        <LoginModal />
      </div>
    </div>
  );
};
export default Navbar;
