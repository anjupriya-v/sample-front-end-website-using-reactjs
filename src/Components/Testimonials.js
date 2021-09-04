import React, { Component } from 'react';
import TestimonialsComp from './TestimonialsComp';
import Footer from './Footer';
import ComponentsNavbar from './ComponentsNavbar'
class Testimonials extends Component {
    render() {
        return (
            <div>
                <ComponentsNavbar />
                <br />
                <br />
                <br />
                
                <TestimonialsComp />
                <Footer position="sticky" bottom="0px" left="0px" right="0px" />
            </div>
        );
    }
}
export default Testimonials;