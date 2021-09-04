import React, { Component } from 'react';
import ComponentsNavbar from './ComponentsNavbar';
import Footer from './Footer';
class AboutComp extends Component {
    render() {
        return (
            <div>
                <ComponentsNavbar />
                <br />
                <br />
                <br />
                <div className="container aboutComp" >
                    <h1 className="about">About Us</h1>
                    <h2 className="aboutSubtitle">Quality Teaching
                        Any Time, Everywhere</h2>
                    <p className="aboutDescription">The Entrepreneurship Network (TEN) is a community-based Edu-Tech group whose objective is to provide quality learning and expertise.
                        Our current customer segment, at present, stands at 200 plus colleges and 10000 plus students, with new institutions coming in all the time.
                        This organization would enable you to accelerate your aspirations by providing an opportunity to master the most desired skill-sets in today's market.
                        With hands-on guidance provided by our richly experienced faculty, you would be having  the best possible training at your disposal.</p>
                </div>
                <div>
                    <Footer position="sticky" bottom="0px" left="0px" right="0px" />
                </div>
            </div>
        );
    }
}
export default AboutComp;