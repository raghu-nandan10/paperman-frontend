import React from "react";

import profile from "../../img/profile.png";

const Author = () => {
  return (
    <div className="sidepanel-container">
      <h1 className="title">Author</h1>
      <div className="author">
        <img src={profile} className="profile-photo" />
        <div>
          <div className="author-name">Dhanush Karthik</div>
          <div className="author-role">Newbiee</div>
        </div>
      </div>
    </div>
  );
};

export default Author;
