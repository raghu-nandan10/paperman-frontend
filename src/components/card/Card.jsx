import React from "react";

import { FiUser } from "react-icons/fi";

import "./Card.css";
import { MdVerified } from "react-icons/md";
import profile from "../../img/mountain.jpg";
const Card = () => {
  // { object }
  //   let { caption, user, timestamp, thumbnail, views } = object;

  return (
    <div className="card">
      <img src={profile} className="card-photo" />

      <div className="card-content">
        <span className="card-caption">This is Caption</span>

        <span className="card-content-top">
          <FiUser size={15} color="cyan" className="class1" />

          <span className="class2">
            <span> Dhanush </span>
            <MdVerified size={15} className="class3" />
          </span>
        </span>

        <div className="class4">
          <span>300 views</span> <span>30 seconds ago</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
