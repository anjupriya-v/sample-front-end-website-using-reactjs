import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class About extends Component {
	render() {
		return (
			<div >
				<h1 className="mainPageAbout">About Us</h1>
				<div className="container" >
					<div className="row">
						<div className="col-md-12 " >
							<div className="row ">
								<div className="col-md-4">
									<img className="w-100" src="https://static.wixstatic.com/media/749045033f5b4f539376b91db3710416.jpg/v1/fill/w_551,h_370,al_c,q_80,usm_0.66_1.00_0.01/Teen%20study%20group.webp" alt="about"></img>
								</div>
								<div className="col-md-8">
									<div className="card-block aboutBlock" >
										<h4 className="card-text " className="cardText">The Entrepreneurship Network (TEN) is a community-based Edu-Tech group whose objective is to provide quality learning and expertise.</h4>
										<div className="aboutButtonDiv"><Link to="/about" className="btn btn-primary aboutButton">Learn More</Link></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="wrapper">
					<div className="divider div-transparent div-dot"></div>
				</div>
			</div>
		);
	}
}
export default About;