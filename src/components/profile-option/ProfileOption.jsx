import React from "react";

import { FaBars } from "react-icons/fa";
import "./ProfileOption.css";

const ProfileOption = ({title}) => {
  return (
    <div className="profile-option-container">
      <div className="profile-option-icons">
        <div className="profile-option-icon">
        <FaBars size={"20px"} />
        </div>
        <div className="option-title">{title}</div>
      </div>
      <div className="profile-option-sort">
        <div className="profile-sort-by">
          <p className="sort-title">Sort by</p>
          <select name="sort-by" className="sort-options">
            <option value={"recent"}>Recent</option>
            <option value={"old"}>Oldest </option>
            <option value={"most"}>Most Liked</option>
            <option value={"least"}>Least Liked</option>
          </select>
        </div>
        <div className="profile-sort-by">
          <p className="sort-title">Date Range</p>
          <select name="sort-by" className="sort-options">
            <option value={"recent"}>Last 24 hrs</option>
            <option value={"old"}>Last 30 days</option>
            <option value={"most"}>Last 6 months</option>
            <option value={"least"}>Last 1 year</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProfileOption;
