import React, { Component } from 'react';
import CourseData from '../JsonFolder/CourseData';
import MessageModal from '../Components/MessageModal';
class CourseDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
        this.openFunction = this.openFunction.bind(this);
        this.closeFunction = this.closeFunction.bind(this);
    }
    openFunction() {
        this.setState({ open: true })
    }
    closeFunction() {
        this.setState({ open: false })
    }
    render() {
        return (
            <>{
                CourseData.filter((course) => {
                    return (this.props.courseTitle === course.courseTitle)
                }).map((course) => {
                    return (<div>
                        <h1 className="courseTitle">{course.courseTitle}</h1>
                        <div className="container" >
                            <div className="row">
                                <div className="col-md-12 ">
                                    <div className="row ">
                                        <div className="col-md-5">
                                            <img className="w-100" src={course.anotherImage} height="100%" alt={course.altText}></img>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-block" >
                                                <div>
                                                    <h4 className="card-title price" >Price : ₹3,300.00</h4>
                                                </div>
                                                <h6 className="card-text text-justify" className="courseDescription">
                                                    {course.courseOverview}</h6>
                                                <div className="courseButtonDiv"><button className="btn btn-danger courseButton" onClick={this.openFunction}>Add to cart</button>
                                                    <button className="btn btn-success courseButton" onClick={this.openFunction}>Buy Now</button>
                                                </div>
                                                {this.state.open && <MessageModal open={this.state.open} modalBody="Please Make a login " closeFunction={this.closeFunction} />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                })
            }
            </>
        );
    }
}
export default CourseDetails;