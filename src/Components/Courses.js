import React, { Component } from 'react';
import Footer from './Footer';
import ComponentsNavbar from './ComponentsNavbar'
import CoursesComp from './CoursesComp';
class Courses extends Component {
    render() {
        return (
            <div>
                <ComponentsNavbar />
                <br />
                <br />
                <br />
                <CoursesComp />
                <Footer position="sticky" bottom="0px" left="0px" right="0px" />
            </div>
        );
    }
}

export default Courses;