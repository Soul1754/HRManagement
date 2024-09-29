import "./style/login.css";


  import React, { useState } from "react";
  import "./style/login.css";

  export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleButtonClick = () => {
      const emailInput = document.getElementById("loginEmailId").value;
      const passwordInput = document.getElementById("loginPasswordId").value;
      setEmail(emailInput);
      setPassword(passwordInput);
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="container-fluid flex flex-col md:flex-row LoginImage justify-between items-center">
        <div className="Logo h-1/2 md:h-full w-full md:w-[47.5vw] bg-green-0 text-center flex justify-center items-center">
          <img
            src="hrm-high-resolution-logo-white-transparent.ico"
            alt=""
            className=""
          />
        </div>
        <div className="bg-white h-auto md:h-full w-full md:w-[47.5vw] card rounded-l-3xl text-center font-martel">
          <h1 className="text-blue-950 text-5xl mt-20 ">Welcome!</h1>
          <p className="text-palette-4 text-3xl mt-5  ">Please login to continue</p>
          <div className="mt-24 text-start ml-8 mr-8">
            <label htmlFor="email" className="text-2xl  text-palette-3 p-2">
              Email Address
            </label>
            <div className="mt-1 mb-6">
              <input
                type="email"
                name="email"
                id="loginEmailId"
                className="bg-palette-5 text-palette-1 w-full h-14 text-l p-4 rounded-lg drop-shadow-xl"
              />
            </div>
            <label htmlFor="password" className="text-2xl  text-palette-3 p-2">
              Password
            </label>
            <div className="mt-1 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="loginPasswordId"
                className="bg-palette-5 text-palette-1 w-full h-14 text-l p-4 rounded-lg drop-shadow-xl" 
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-palette-4"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="mt-16 mb-6">
            <button
              className="bg-palette-3 text-white w-1/4 h-14 rounded-3xl text-2xl drop-shadow-xl"
              onClick={handleButtonClick}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

