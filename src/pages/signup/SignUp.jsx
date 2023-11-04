import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
import Input from "../../components/input/Input";
import { config } from "../../config";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const regexConfig = {
    names: /^[A-Za-z]{3,}$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
  };
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleNameValidation = (value) => {
    return regexConfig.names.test(value);
  };
  const handleEmailValidation = (value) => {
    return regexConfig.email.test(value);
  };
  const handlePasswordValidation = (value) => {
    return regexConfig.password.test(value);
  };

  const handleFormDataChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "firstName" || name == "lastName") {
      if (!handleNameValidation(value)) {
        setNameError("Only alphabets dude with atleast 3 letters ");
      } else {
        setNameError("");
      }
      console.log(handleNameValidation(value));
    }
    if (name == "email") {
      if (!handleEmailValidation(value)) {
        setEmailError("Provide a valid email buddy :) ");
      } else {
        setEmailError("");
      }
    }
    if (name == "password" || name == "confirmPassword") {
      if (!handlePasswordValidation(value)) {
        setConfirmPasswordError("Not a valid Confirm password");
      } else {
        setConfirmPasswordError("");
      }
    }
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = formData;

    if (firstName == "") {
      setNameError("First Name is required");
    }
    if (email == "") {
      setEmailError("Email is required");
    }
    if (password == "") {
      setPasswordError("Password is required");
    }
    if (confirmPassword == "") {
      setConfirmPasswordError("Confirm password is required");
    }

    if (confirmPassword != password) {
      setConfirmPasswordError("Password doesn't match");
    }
    if (
      regexConfig.names.test(firstName) &&
      regexConfig.email.test(email) &&
      regexConfig.password.test(password) &&
      regexConfig.password.test(confirmPassword)
    ) {
      try {
        const res = await axios.post(
          `${config.domain}/auth/register`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="signup-container font-thin">
      {/* <Navbar /> */}
      <h3 className="sub-heading1 my-2">START FOR FREE</h3>
      <h1 className="main-heading ">
        Create new <span className="green-text">account.</span>
      </h1>
      <p className="sub-heading2 pl-0 mt-3 flex gap-2">
        Already a Member?
        <span className="green-text">
          <Link to="../login">Log In</Link>
        </span>
      </p>
      <form className="signup-form">
        <div className="name-container">
          <Input
            formData={formData}
            label="First Name"
            id="fn"
            error={nameError}
            name="firstName"
            handleFormDataChange={handleFormDataChange}
          />
          <Input
            label="Last Name"
            id="ln"
            error={nameError}
            name="lastName"
            handleFormDataChange={handleFormDataChange}
          />
        </div>
        <Input
          label="Email"
          id="email"
          error={emailError}
          name="email"
          handleFormDataChange={handleFormDataChange}
        />
        <Input
          label="Password"
          id="password"
          error={passwordError}
          name="password"
          handleFormDataChange={handleFormDataChange}
        />
        <Input
          label="Confirm Password"
          id="password"
          error={confirmPasswordError}
          name="confirmPassword"
          handleFormDataChange={handleFormDataChange}
        />
        <div className="form-button-container">
          <button
            className="form-button back"
            onClick={(e) => e.preventDefault()}
          >
            <Link to="../">Back</Link>
          </button>
          <button onClick={handleSubmit} className="form-button create">
            Create account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
