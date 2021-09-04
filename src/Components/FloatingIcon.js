import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import React from 'react';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      ['@media (max-width:240px)']: {
        width: '3em',
        height: '3em',
        margin: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      ['@media (min-width:241px) and (max-width:280px)']: {
        width: '3.3em',
        height: '3.3em',
        margin: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      ['@media (min-width:281px) and (max-width:320px)']: {
        width: '3.3em',
        height: '3.3em',
        margin: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      ['@media (min-width:321px) and (max-width:360px)']: {
        width: '3.5em',
        height: '3.5em',
        margin: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      ['@media (min-width:321px) and (max-width:384px)']: {
        width: '3.5em',
        height: '3.5em',
        margin: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      ['@media (min-width:385px) and (max-width:414px)']: {
        width: '3.6em',
        height: '3.6em',
        margin: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      ['@media (min-width:414px) and (max-width:480px)']: {
        width: '3.6em',
        height: '3.6em',
        margin: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      ['@media (min-width:481px) and (max-width:600px)']: {
        width: '3.7em',
        height: '3.7em',
        margin: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      ['@media (min-width:601px) and (max-width:720px)']: {
        width: '3.8em',
        height: '3.8em',
        margin: theme.spacing(1),
        marginRight: theme.spacing(4),
      },
      ['@media (min-width:721px) and (max-width:1024px)']: {
        width: '3.9em',
        height: '3.9em',
        margin: theme.spacing(1),
        marginRight: theme.spacing(4),
      },
      ['@media (min-width:1025px) and (max-width:1440px)']: {
        width: '3.9em',
        height: '3.9em',
        margin: theme.spacing(1),
        marginRight: theme.spacing(4),
      },
      ['@media (min-width:1441px)']: {
        width: '4em',
        height: '4em',
        margin: theme.spacing(1),
        marginRight: theme.spacing(4),
      }
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
export default function FloatingActionButtons() {
  const classes = useStyles();
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const [displaySignIn, setDisplaySignIn] = useState(true);
  const [displaySignUp, setDisplaySignUp] = useState(false);
  const [loginHeading, setLoginHeading] = useState("Sign In");
  return (
    <React.Fragment>
      <div className={classes.root} >
        <Fab color="primary" aria-label="add" data-toggle="modal" data-target="#modalLoginForm" >
          <AccountCircleRoundedIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit" onClick={() => setState({ isPaneOpen: true })}>
          <ShoppingCartRoundedIcon />
        </Fab>
      </div>
      <SlidingPane
        className="some-custom-className"
        overlayClassName="some-custom-overlay-className"
        isOpen={state.isPaneOpen}
        onRequestClose={() => {
          setState({ isPaneOpen: false });
        }}
      >
        <div className="cart" >
          <i className="fa fa-shopping-bag fa-7x" aria-hidden="true"></i>
          <h2>The Cart is Empty</h2>
          <h5>Please make a login to purchase</h5><button className="btn btn-primary" data-toggle="modal" data-target="#modalLoginForm" >Login</button>
        </div>
      </SlidingPane>
      <div className="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div>
              <div className="modal-header text-center">
                <h4 className=" w-100 font-weight-bold">{loginHeading}</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {displaySignIn && <div>
                <form>
                <div className="modal-body mx-5">
                  <div className="container">
                    
                    <table >
                      <tr >
                        <td>Email:</td>
                        <td ><input required type="email" id="defaultForm-email" className="form-control validate" /></td>
                      </tr>
                      <tr>
                        <td>Password:</td>
                        <td><input required type="password" id="defaultForm-pass" className="form-control validate" /></td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary " type="submit">Login</button>
                  </div>
                  </form>
                  <div className="accountButton">
                    <span >New User?</span><a href="#" onClick={() => {
                      setLoginHeading("Registration")
                      setDisplaySignIn(false)
                      setDisplaySignUp(true)
                    }}>Click here to register</a>
                  </div>
                </div>}
              {displaySignUp && <div>
                <form>
                <div className="modal-body mx-5">
                  <div className="container">
                    <table>
                      <tr>
                        <td>First Name:</td>
                        <td><input required type="name" id="defaultForm-name" className="form-control validate" /></td>
                      </tr>
                      <tr>
                        <td>Last Name:</td>
                        <td><input required type="name" id="defaultForm-name" className="form-control validate" /></td>
                      </tr>
                      <tr>
                        <td>Email:</td>
                        <td><input required type="email" id="defaultForm-email" className="form-control validate" /></td>
                      </tr>
                      <tr>
                        <td>Password:</td>
                        <td><input required type="password" id="defaultForm-pass" className="form-control validate" /></td>
                      </tr>
                      <tr>
                        <td>Confirm Password</td>
                        <td><input required type="password" id="defaultForm-pass" className="form-control validate" /></td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary">Sign Up</button>
                  </div>
                  </form>
                  <div className="accountButton">
                    <span>Already have an account?</span><a href="#" onClick={() => {
                      setLoginHeading("Sign In")
                      setDisplaySignUp(false)
                      setDisplaySignIn(true)
                    }}>Click here to sign In</a>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
