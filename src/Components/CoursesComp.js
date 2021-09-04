import React from 'react';
import { Link } from 'react-router-dom';
import CourseData from '../JsonFolder/CourseData';
function CoursesComp() {
  return (
    <div id="courses" >
      <h1 className="courses">Online Courses</h1>
      <div className="container">
        <div className="row">
          {
            CourseData.filter(course=>{return course.image}).map((course) => {
              return <div className=" col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="card courseCards">
                  <img className="card-img-top courseImage" src={course.image} alt={course.altText} ></img>
                  <div className="card-body">
                    <h5 className="card-title courseHeading">{course.courseTitle} </h5>
                    <Link className="btn btn-primary courseHomePageButton" to={course.link}>Explore Here</Link>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}
export default CoursesComp;