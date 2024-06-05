import React from "react";
import "../styles/postContent.css";
import heart from "../assets/like.png";
import share from "../assets/share.png";
import comment from "../assets/comment.png";
const PostContent = () => {
  return (
    <>
      <div className="Posts">
        <div className="post-content">
          <div className="profile">
            <div className="profile-img"></div>
            <div>
              <div className="profile-name">Lara Leones</div>
              <div className="user-Name">@thewallart</div>
            </div>
          </div>
          <div className="profile-bio">
            <div>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. Read
              More
            </div>
          </div>

          <div>
            <div className="post-Image"></div>
          </div>
          <div className="like-share">
            <div style={{display:'flex',gap:'10px'}}>
              <img src={heart}/>
              <p>9.8k</p>
            </div>
            <div style={{display:'flex',gap:'10px'}}>
              <img src={comment}/>
              <p>9.8k</p>
            </div>
            <div style={{display:'flex',gap:'10px'}}>
              <img src={share}/>
              <p>9.8k</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default PostContent;
