import React, { Component } from "react";
class LoginModal extends Component {
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
                    <h1 className="text-center mb-4">Sign In</h1>
                    <form>
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
                      <div className="form-group text-center mt-5">
                        <button type="submit" className="btn btn-primary">
                          Sign In
                        </button>
                      </div>
                      <div className="forgotPassword text-center mt-4">
                        <a href="#">forgot password?</a>
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
export default LoginModal;
