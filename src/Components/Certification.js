import React, { Component } from 'react';
import ComponentsNavbar from './ComponentsNavbar';
import Footer from './Footer';
import Subscribe from './Subscribe';
import '../App.css'
class Certification extends Component {


    render() {
        return (
            <div>
                <ComponentsNavbar />

                <div className="container aboutComp topSpace" >
                    <h1 className="certificationTitle">TEN Certified Expert</h1>
                    <h5 className="intern">Dear Intern,</h5>
                    <div className="certificationDescription">
                        <p>
                            We at TEN not only strive to provide the best guidance to our interns but also ensure their experience with us proves to be a career milestone.
                        </p>
                        <p>
                            We hereby offer to certify you as an Expert in your domain for a paltry sum of INR 200/- (RUPEES TWO HUNDRED ONLY). This Internship encompasses all the major learnings you gave and received and establishes you as a certified professional.
                        </p>
                        <p>
                            We are certain this accomplishment will go a long way in building your fledgling career and prove instrumental in making you the best in business.
                        </p>
                        <p>
                            The QR code below helps you to make the required payment.
                            The certificate would be shared on your email Id registered with us, once the payment is successful.
                            Also, fill up the form below that helps you subscribe for the required certificate.
                        </p>
                        <p>
                            We look forward to certifying you and thereby enhancing your skill set and enriching your ever-growing profile.</p>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="divider div-transparent div-dot"></div>
                </div>
                <div className="container subscribeContainer">
                    <div className="row">
                        <div className="col-md-12 " >
                            <div className="row ">
                                <div className="col-md-4 paymentImage">
                                    <img className="w-100 " height="100%" src="https://static.wixstatic.com/media/693073_4c899eb662c84031926c133cf5f32b95~mv2.jpg/v1/fill/w_454,h_603,al_c,q_80,usm_0.66_1.00_0.01/TEN_PAY_1.webp" alt="about"></img>
                                </div>
                                <div className="col-md-8">
                                    <h5 className="applicationTitle">Subscribe here to get Certificates</h5>
                                    <Subscribe />
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer position="sticky" bottom="0px" left="0px" right="0px" />
            </div>
        );
    }
}
export default Certification;