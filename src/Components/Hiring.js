import React, { Component } from 'react';
import ComponentsNavbar from './ComponentsNavbar';
import Footer from './Footer';
import { Checkbox } from '@material-ui/core';
class Hiring extends Component {
  constructor(props) {
    super(props);
    this.state={
      styles:{
        border:'2px solid black'
      }
    }
  }
  
  render() {
    return (
      <div>
        <ComponentsNavbar />
       
        <div className=" container aboutComp topSpace" >
          <h1 className="title" className="titleHiring">We Are Hiring Interns</h1>
          <div className="hiringDescription">
            <p>
              The Student Intern program is a structured and guided work-based learning program for students currently enrolled in India.
            </p>
            <p>
              There is a small registration fee, INR 400 /- (RUPEES Four HUNDRED ONLY) applicable to all incoming interns  as part of this One-of-a-Kind Point based Program. This is required not just to ensure a seamless on-boarding and exit process but also to supply the interns with relevant study material and make them aware of how a corporate setup works.
            </p>
            <p>
              <b>
                Scan the QR code to complete your payment and submit the below
                application form to start with your registration process.</b>
            </p>
            <p>
              Please keep the payment transaction ID handy for submitting
              the form.
            </p>
            <p>
              Note: This internship does not offer an opportunity to earn money,
              rather helps an individual grow by working on the job and
              earn a certificate upon successful completion.
            </p>
            <p>
              Check out few of our open internship positions below
              Refer the application form for more open positions</p>
            <div className="wrapper">
              <div className="divider div-transparent div-dot"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 " >
              <div className="row ">
                <div className="col-md-4 paymentImage">
                  <img className="w-100 " height="100%" src="https://static.wixstatic.com/media/693073_4c899eb662c84031926c133cf5f32b95~mv2.jpg/v1/fill/w_448,h_598,al_c,q_80,usm_0.66_1.00_0.01/TEN_PAY_1.webp" alt="payment"></img>
                </div>
                <div className="col-md-8">
                  <div className="card-block">
                    <h2 className="card-text " className="title">Internships List</h2>
                    <div className="internList">
                      <ul >
                        <li>Digital Marketing Interns</li>
                         <li> General Management Interns</li>
                        <li>
                          Product Management Interns</li>
                        <li>
                          Content Interns </li>
                        <li>
                          React Development Intern </li>
                        <li>
                          Android Development Intern </li>
                        <li>
                          Java Development Intern</li><li>
                          Blockchain Development Intern</li>
                        <li>
                          Python Development Intern </li>
                        <li>
                          FullStack Development Intern </li>
                        <li>
                          Angular Development Intern </li>
                        <li>
                          Sass Development Intern </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h1 className="applicationTitle">Application Form</h1>
          <h6 className="registrationTitle">Registration Fee Rs.100</h6>
          <div className="registrationFields">
            <form>
            <label className="registrationLabel">Name *</label>
            <input required className="info" type="text" />
            <label className="registrationLabel">Email *</label>
            <input required className="info" type="email" />
            <label className="registrationLabel">Mobile Number *</label>
            <input required className="info" type="number" />
            <label for="Internship" className="registrationLabel">Choose relevant internship opening *</label>
            <select required  name="Internship" className="internship" style={this.state.styles}>
              <option selected></option>
              <option  >Digital Marketing</option>
              <option >Word Press Developer</option>
              <option >React Developer</option>
              <option >Angular Developer</option>
              <option >Java Developer</option>
              <option >Market Research</option>
              <option >SpringBoot Developer</option>
              <option >Product Management</option>
              <option >Entrepreneur in residence</option>
            </select>
            <label className="registrationLabel">What’s your employment status? *</label>
            <select required name="status" className="internship"  style={this.state.styles}>
              <option selected></option>
              <option >College Student</option>
              <option >Employed</option>
              <option >UnEmployed</option>
              <option >Other</option>
            </select>
            <label className="registrationLabel " >Do you have previous experience? *</label>
            <select required name="experience " className="internship" style={this.state.styles} >
              <option selected></option>
              <option >Yes</option>
              <option >No</option>
            </select>
            <label className="registrationLabel" >Payment Transaction ID*</label>
            <input required className="paymentID internship" type="number" />
            <label for="checkid" className="checkBox"><Checkbox id="checkid"></Checkbox>I Confirm that my registration payment is complete</label >
            <div className="hiringButtonContainer">
            <button type="submit" className="btn btn-primary hiringSubmitButton" >Submit</button>
            </div>
            </form>
          </div>
        </div>
        <Footer position="sticky" bottom="0px" left="0px" right="0px" />
      </div>
    );
  }
}
export default Hiring;