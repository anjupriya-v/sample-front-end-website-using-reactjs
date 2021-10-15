import React, { Component } from "react";
class SignupModal extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header ">
              <button
                type="button"
                className="close "
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i
                    className="fa fa-times-circle modalButton"
                    aria-hidden="true"
                  ></i>
                </span>
              </button>
            </div>
            <div className="topTextContainer">
              <p>
                Let's learn, share & inspire each other with our passion for
                Computer Engineering. Sign up now 🤘🏼
              </p>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <h1 className="text-center mb-4">Create Account</h1>
                    <form>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputFirstName">First Name</label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputFirstName"
                            placeholder="First Name"
                          ></input>
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputLastName">Last Name</label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputLastName"
                            placeholder="Last Name"
                          ></input>
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputEmail">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputEmail"
                          placeholder="abc@gmail.com"
                        ></input>
                      </div>
                      <div className="form-group">
                        <label for="inputPassword">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword"
                          placeholder="Password"
                        ></input>
                      </div>
                      <div className="form-group">
                        <label for="inputConfirmPassword">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputConfirmPassword"
                          placeholder="Re-enter the Password"
                        ></input>
                      </div>
                      <div className="form-group text-center mt-4">
                        <button type="submit" className="btn btn-primary">
                          Create Account
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <div className="createAccountImageContainer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SignupModal;
