import Input from '@material-ui/core/Input';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
function Footer(props) {
    const [position] = useState(props.position);
    const [left] = useState(props.left);
    const [right] = useState(props.right);
    const [bottom] = useState(props.bottom);
    const styles={
        color:"white",
        marginLeft:'1em'
    }
    return (
        <div>
            <footer className="page-footer font-small unique-color-dark" style={{ backgroundColor: 'black', color: 'white', position: `${position}`, bottom: `${bottom}`, left: `${left}`, right: `${right}` }}>
                <div style={{ backgroundColor: "#6351ce" }}>
                    <div className="container">
                        <div className="row py-4 d-flex align-items-center">
                            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0">Get connected with us on social networks!</h6>
                            </div>
                            <div className="col-md-6 col-lg-7 text-center text-md-right ">
                                <a className="fb-ic" href="https://facebook.com">
                                    <i className="fab fa-facebook-f white-text mr-4 socialMediaIcons" > </i>
                                </a>
                                <a className="tw-ic" href="https://twitter.com">
                                    <i className="fab fa-twitter white-text mr-4 socialMediaIcons"> </i>
                                </a>
                                <a className="gplus-ic" href="https://google.com">
                                    <i className="fab fa-google-plus-g white-text mr-4 socialMediaIcons"> </i>
                                </a>
                                <a className="li-ic" href="https://linkedin.com">
                                    <i className="fab fa-linkedin-in white-text mr-4 socialMediaIcons"> </i>
                                </a>
                                <a className="ins-ic" href="https://instagram.com ">
                                    <i className="fab fa-instagram white-text socialMediaIcons"> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center text-md-center mt-5 ">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold companyTitle">The Entrepreneurship Network</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto " style={{ width: " 60px" }}></hr>
                            <p className="details">The Entrepreneurship Network (TEN) is a community-based Edu-Tech group whose objective is to provide quality learning and expertise.</p>
                        </div>
                        <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold subscribeTitle">Subscribe to our newsletter</h6>
                            <Input placeholder="full name" className='footerInput' style={styles} ></Input>
                            <Input placeholder="College name" className='footerInput'  style={styles}></Input>
                            <Input placeholder="Email" className='footerInput' style={styles} ></Input>
                            <Input placeholder="Mobile Number" className='footerInput' style={styles}></Input>
                            <div className="submitButton" >    <button type="submit" className="btn btn-primary ">Submit</button></div>
                        </div>
                        <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold otherLinksTitle">Other Links</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }}></hr>
                            <p>
                                <a href="#!"><Link
                                    to="/about"
                                >About Us</Link></a>
                            </p>
                            <p>
                                <a href="#!"><Link to="/contact">Contact Us</Link></a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Footer;