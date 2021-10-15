import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import Posts from "./Posts";
import postData_one from "../Data/postData_one";
import postData_two from "../Data/postData_two";
import "../cssModules/mainContent.css";
import profileImage from "../Images/profileImage.jpg";
const styles = {
  tabs: {
    background: "#fff",
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
};
class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: ["Leisure", "Activism", "MBA", "Philosophy"],
    };
  }
  state = {
    index: 0,
  };
  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };
  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
  };
  render() {
    const { index } = this.state;
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-xs-12">
            <div className="dropdownContainer smallerDevice">
              <div className="allPosts">
                <h6>All Posts (32)</h6>
              </div>
              <div className="dropdown dropright ">
                <button
                  className="btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Filter:All
                </button>
                <div
                  className="dropdown-menu "
                  aria-labelledby="dropdownMenuButton"
                >
                  <Tabs
                    value={index}
                    fullWidth
                    onChange={this.handleChange}
                    style={styles.tabs}
                  >
                    <Tab label="All Posts (32)" className="dropdown-item" />
                    <Tab label="Article" className="dropdown-item" />
                    <Tab label="Event" className="dropdown-item" />
                    <Tab label="Education" className="dropdown-item" />
                  </Tabs>
                </div>
              </div>
            </div>
            <div className="largerDevice">
              <Tabs
                value={index}
                fullWidth
                onChange={this.handleChange}
                style={styles.tabs}
              >
                <Tab label="All Posts (32)" />
                <Tab label="Article" />
                <Tab label="Event" />
                <Tab label="Education" />
              </Tabs>
            </div>
            <SwipeableViews
              index={index}
              onChangeIndex={this.handleChangeIndex}
            >
              <div style={Object.assign({}, styles.slide, styles.slide1)}>
                <Posts postsDetails={postData_one} />
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide2)}>
                <Posts postsDetails={postData_two} />
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide3)}>
                <Posts postsDetails={postData_one} />
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide2)}>
                <Posts postsDetails={postData_two} />
              </div>
            </SwipeableViews>
          </div>
          <div className="col-lg-4 col-xs-12 col-md-4">
            <div className="actionsContainer ">
              <button className="btn btn-secondary firstButton pr-3">
                <span className="mr-3">Write Post</span>
                <i className="fa fa-caret-down  " aria-hidden="true"></i>
              </button>
              <button className="btn btn-primary">
                <i
                  className="fa fa-users groupIcon ml-1 "
                  aria-hidden="true"
                ></i>
                <span>Join Group</span>
              </button>
            </div>
            <div className="inputContainer mt-5 ">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <input
                type="text"
                className="locationInput"
                value="Noida,India"
                readOnly
              />
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </div>
            <div className="notice actionsContainer mt-5">
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
              <span className="ml-2">
                Your location will help us serve better and extend the
                personalised experience
              </span>
            </div>
            <div className=" mt-4">
              <h5 className="groups">
                <i className="fa fa-thumbs-up" aria-hidden="true"></i>{" "}
                Recommended Groups
              </h5>
              {this.state.groups.map((group) => {
                return (
                  <div className="groupsContainer mt-4">
                    <div>
                      <img
                        src={profileImage}
                        alt="profileImage"
                        className="profileImage"
                      />
                      <span>{group}</span>
                    </div>
                    <div>
                      <button className="btn">Follow</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainContent;
