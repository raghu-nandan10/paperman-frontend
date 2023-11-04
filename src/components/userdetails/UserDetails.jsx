import React, { useState } from "react";

import { AiFillEdit } from "react-icons/ai";
const UserDetails = ({ name, setName, handleEdit, isEdit }) => {
  const [email, setEmail] = useState("dhanushkarthik8@gmail.com");
  const [status, setStatus] = useState("Teach me to think!!");
  const [firstName, setFirstName] = useState("Dhanush");
  const [lastName, setLastName] = useState("Karthik");

  return (
    <div className="user-details">
      <div className="user-details-title">
        <div className="user-detail-title">Details</div>
        <div onClick={handleEdit}>
          <AiFillEdit size={20} />
        </div>
      </div>
      <div className="user-detail-name">Username: </div>
      <div className="user-detail">
        {isEdit ? (
          <input
            placeholder="Username"
            value={name}
            id="name"
            onInput={(e) => setName(e.target.value)}
            className="user-detail-input"
          />
        ) : (
          <div className="user-detail-input input-display">{name}</div>
        )}
      </div>
      <div className="user-detail-name">First name: </div>
      <div className="user-detail">
        {isEdit ? (
          <input
            placeholder="First name"
            value={firstName}
            id="firstName"
            onInput={(e) => setFirstName(e.target.value)}
            className="user-detail-input"
          />
        ) : (
          <div className="user-detail-input input-display">{firstName}</div>
        )}
      </div>
      <div className="user-detail-name">Last name: </div>
      <div className="user-detail">
        {isEdit ? (
          <input
            placeholder="Last name"
            value={lastName}
            id="lastName"
            onInput={(e) => setLastName(e.target.value)}
            className="user-detail-input"
          />
        ) : (
          <div className="user-detail-input input-display">{lastName}</div>
        )}
      </div>
      <div className="user-detail-name">Email:</div>
      <div className="user-detail">
        {isEdit ? (
          <input
            placeholder="Email"
            value={email}
            id="email"
            onInput={(e) => setEmail(e.target.value)}
            className="user-detail-input"
          />
        ) : (
          <div className="user-detail-input input-display" id="name">
            {email}
          </div>
        )}
      </div>
      <div className="user-detail-name">Status: </div>
      <div className="user-detail">
        {isEdit ? (
          <input
            placeholder="Status"
            id="status"
            value={status}
            onInput={(e) => setStatus(e.target.value)}
            className="user-detail-input"
          />
        ) : (
          <div className="user-detail-input input-display">{status}</div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
