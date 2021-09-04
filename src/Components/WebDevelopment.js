import React, { Component } from 'react';
import ComponentsNavbar from './ComponentsNavbar';
import Footer from './Footer';
import '../CssModule/CourseBenefits.css'
import CourseDetails from './CourseDetails';
import GainFromCourse from './GainFromCourse';
import CourseData from '../JsonFolder/CourseData';
class DigitalMarketing extends Component {
  constructor(props) {
    super(props);
    this.state={
      courseData:CourseData
    }
  }
  
  render() {
    return (
      <div>
        <ComponentsNavbar />
        <br />
        <br />
        <br />
        <CourseDetails courseTitle="Web Development" />
        <div className="container course" >
          <section>
            <h1 className="otherDetails">
              Other Details
            </h1>
            <details open>
              <summary className="courseSummary">
                Course Curriculum</summary>
                {
                  this.state.courseData.filter((course)=>{return(course.courseTitle==="Web Development Course")}).map((summary)=>{
                  return(  summary.details.map((summaryDetails)=>{
                      
                      return(<div> <b className="summaryHeading">  {`${summaryDetails.summaryHeading}:`}</b>   <p className="summaryDetails">{summaryDetails.summaryDescription}</p></div>)
                          

                    }))

                  })
                }
            </details>
            <details >
              <summary className="courseSummary">About the Instructor</summary>
              <p className="summary">
                Nikhil is a marketer by choice and has vast experience in corporate relationship with demonstrated history of working in the people management industry.</p>
              <p  className="summary">He is highly skilled at customer service, Microsoft word, excel,web development, digital marketing, with special skills in SEO, website audit, Google Analytics, bing ads amd many more..</p>
              <p  className="summary">
                He holds expertise in smooth implementation, ad-trafficking, and ad-management of online advertising campaigns.
                Analyzing advertiser’s website from scratch and creating remarketing, conversion pixel and piggybacking to capture the audience from each funnel are few roles he has excelled at.</p>
            </details>
            <GainFromCourse />
          </section>
        </div>
        <Footer position="sticky" bottom="0px" left="0px" right="0px" />
      </div>
    );
  }
}
export default DigitalMarketing;