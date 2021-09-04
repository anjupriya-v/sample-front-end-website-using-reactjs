import React, { Component } from 'react';
import ComponentsNavbar from './ComponentsNavbar'
import Footer from './Footer';
class Complaints extends Component {
    render() {
        return (
            <div>
                <ComponentsNavbar />
                <br />
                <br />
                <br />
                <br />
                <h1 className="complaintsHeading">Complaints</h1>
                <div className="container complaintsContainer" >
                    <div className="row">
                        <div className="col-md-12 " >
                            <div className="row ">
                                <div className="col-md-4">
                                    <img className="w-100" height="100%" src="https://zoetalentsolutions.com/wp-content/uploads/2017/03/Customer-Complaints-Handling-and-Management-Training-Course.jpg" alt="complaint"></img>
                                </div>
                                <div className="col-md-8" >
                                    <div className="card-block">
                                        {/* <h6 className="card-title">Card Title</h6> */}
                                        <p className="card-text " className="complaintsDesc" >For any complaints regarding The Entrepreneurship Network(TEN)  please contact at our email address:<br />
                                            <b>hr.contact.ten@gmail.com</b></p>
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
}
export default Complaints;