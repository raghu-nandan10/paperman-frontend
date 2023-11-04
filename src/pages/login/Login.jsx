import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input/Input";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { BlogToggleContext } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import { config } from "../../config";
const Login = () => {
  const { addBlog, setAddBlog } = useContext(BlogToggleContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate("/");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const regexConfig = {
    names: /^[A-Za-z]{3,}$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
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
    if (name == "email") {
      if (!handleEmailValidation(value)) {
        setEmailError("Please provide a valid email address");
      } else {
        setEmailError("");
      }
    }
    if (name == "password") {
      if (!handlePasswordValidation(value)) {
        setPasswordError("please provide  a strong password");
      } else {
        setPasswordError("");
      }
    }
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (email == "") {
      setEmailError("Email is required");
    }
    if (password == "") {
      setPasswordError("Password is required");
    }
    if (regexConfig.email.test(email) && regexConfig.password.test(password)) {
      try {
        const res = await axios.post(`${config.domain}/auth/login`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        console.log(res.data);
        if (res.data.success) {
          toast.success(
            <div className=" font-thin text-sm">{res.data.message}</div>,
            {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
          setTimeout(() => {
            setAddBlog(true);
            navigate("/");
          }, 1000);
        } else {
          toast.error(
            <div className=" font-thin text-sm">{res.data.message}</div>,
            {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
        }
      } catch (error) {
        toast.error(<div className=" font-thin text-sm">{error.message}</div>, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };
  return (
    <div className="login-container  font-thin">
      <h3 className="sub-heading1 ">DIVE IN</h3>
      <h1 className="  font-thin flex text-4xl gap-2 md:text-6xl ">
        <div className="text-white">Login to your</div>{" "}
        <span className="blue-text">account.</span>
      </h1>
      <p className="sub-heading2 pl-0 mt-4 flex gap-3 ">
        New Member
        <span className="blue-text">
          <Link className="anchor-blue" to="../signup">
            Sign up
          </Link>
        </span>
      </p>
      <form className="flex flex-col w-[90%] md:w-[50%] ">
        <Input
          label="Username/Email id"
          id="id"
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
        <div className="form-button-container">
          <button className="form-button back" onClick={handleSubmit}>
            Login
          </button>

          <Link className="form-button create" to={"../signup"}>
            <button className="form-button create">Sign Up</button>
          </Link>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      ;
    </div>
  );
};

export default Login;
