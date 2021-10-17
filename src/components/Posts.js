import React from "react";
import "../cssModules/mainContent.css";
const Posts = (props) => {
  return (
    <div>
      {props.postsDetails.map((post) => {
        return (
          <div className="card cardContainer mt-4 mb-4">
            <img
              className="card-img-top cardImage"
              src={post.image}
              alt="postImage"
            ></img>
            <div className="card-body ">
              <div className="container">
                <span className="article">{post.basedOn}</span>
                <div className="mt-3 ">
                  <h4 className="card-title cardTitle">{post.title}</h4>
                </div>
                <p className="card-text cardText">{post.description}</p>
              </div>
            </div>
            <div className="card-footer cardFooter text-muted">
              <div className="profileContainer">
                <img
                  src={post.person}
                  className="profileImage"
                  alt="post_profileImage"
                />
                <span className="profileName pl-2">{post.personName}</span>
              </div>
              <div className="moreActions">
                <i className="fa fa-eye" aria-hidden="true"></i>
                <span className="mr-3">1.4k views</span>
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
