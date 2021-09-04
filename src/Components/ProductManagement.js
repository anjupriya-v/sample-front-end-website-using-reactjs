import React, { Component } from 'react';
import ComponentsNavbar from './ComponentsNavbar';
import Footer from './Footer';
import '../CssModule/CourseBenefits.css'
import CourseDetails from './CourseDetails';
import GainFromCourse from './GainFromCourse';
import CourseData from '../JsonFolder/CourseData';
class ProductManagement extends Component {
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
        <CourseDetails courseTitle="Product Management" />
        <div className="container course" >
          <section>
            <h1 className="otherDetails">
              Other Details
            </h1>
            <details open>
              <summary  className="courseSummary">
                Course Curriculum</summary>
                {
                  this.state.courseData.filter((course)=>{return(course.courseTitle==="Product Management Course")}).map((summary)=>{
                  return(  summary.details.map((summaryDetails)=>{
                      
                      return(<div> <b className="summaryHeading">  {`${summaryDetails.summaryHeading}:`}</b>   <p className="summaryDetails">{summaryDetails.summaryDescription}</p></div>)
                          

                    }))

                  })
                }
            </details>
            <details className="courseSummary">
              <summary>About the Instructor</summary>
              <p className="summaryDetails">
                Suyash is a dynamic and an excellent innovator with 7+ years of experience into technology, product, startups, leadership and entrepreneurship.</p>
              <p className="summaryDetails">Some of his result oriented work involves creating and scaling Technology and Product of 3 startups from scratch. His domain expertise of creating Insurance aggregators, lending systems combined with deep understanding/experience of the tech/internet eco-system, building and scaling start-ups from scratch make him a go to man.</p>
              <p className="summaryDetails">JAVA, Springboot, Node js , Spring, Hibernate, Python, PHP,  Angular, No-SQL, Big Data, MYSQL/PGSQL Databases is his arsenal in tech world.
                He is currently obsessed with leveraging Machine learning to solve real world problems and is passionate about UX and Product oriented engineering.</p>
              <p className="summaryDetails">He holds a proven track record of working in Growth hacking , Lead generation and management, Data analytics. Further, AI, Blockchain and IOT excite him the most.</p>
              <b className="summaryHeading">MOTTO IN LIFE :</b> <p className="summaryDetails">"The mind is everything . What you think is what you become."
              </p>
            </details>
            <GainFromCourse />
          </section>
        </div>
        <Footer position="sticky" bottom="0px" left="0px" right="0px" />
      </div>
    );
  }
}
export default ProductManagement;