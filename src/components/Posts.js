import React from "react";
import "../cssModules/mainContent.css";
import profileImage from "../Images/profileImage.jpg";
const Posts = (props) => {
  return (
    <div>
      {props.postsDetails.map((post) => {
        return (
          <div className="card cardContainer mt-4 mb-4">
            <img
              className="card-img-top cardImage"
              src={post.image}
              alt="Card image cap"
            ></img>
            <div className="card-body ">
              <div className="container">
                <i className="fa fa-pencil" aria-hidden="true"></i>
                <span className="article">Article</span>
                <div className="mt-3 ">
                  <h4 className="card-title cardTitle">{post.title}</h4>
                </div>
                <p className="card-text cardText">{post.description}</p>
              </div>
            </div>
            <div className="card-footer cardFooter text-muted">
              <div className="profileContainer">
                <img
                  src={profileImage}
                  className="profileImage"
                  alt="post_profileImage"
                />
                <span className="profileName pl-2">ATG User</span>
              </div>
              <div className="moreActions">
                <i className="fa fa-eye" aria-hidden="true"></i>
                <span className="mr-3">{post.views}</span>
                <i className="fa fa-share-alt" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Posts;
