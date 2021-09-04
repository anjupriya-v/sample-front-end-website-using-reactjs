import React, { Component } from 'react';
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state={
           style:{
            border:'2px solid black'
           } 
        }
    }
    render() {
        return (
            <div>
                <div className='registrationDiv'>
                    <form >
                    <label className="registrationLabel">Full Name *</label>
                    <input required className="info" type="text" />
                    <label  className="registrationLabel">Email *</label>
                    <input required className="info" type="email" />
                    <label  className="registrationLabel">Mobile Number *</label>
                    <input required className="info" type="number" />
                    <label for="internship" className="registrationLabel">Internship Track *</label>
                    <select required name="Internship" className="info" style={this.state.style}>
                        <option selected></option>
                        <option  >Digital Marketing</option>
                        <option >Word Press Developer</option>
                        <option >React Developer</option>
                        <option >Angular Developer</option>
                        <option >Java Developer</option>
                        <option >Market Research</option>
                        <option >SpringBoot Developer</option>
                        <option >Product Management</option>
                        <option >Entrepreneur in residence</option>
                    </select>
                    <label className="registrationLabel">Payment Transaction ID*</label>
                    <input required className="info" type="number" />
                    <div className="subscribeButtonContainer" >
                    <button type="submit" className="btn btn-danger subscribeButton" >Subscribe</button>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default Registration;