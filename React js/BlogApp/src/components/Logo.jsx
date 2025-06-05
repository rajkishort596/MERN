import React from "react";
import logo from "../assets/react.svg";

const Logo = ({ width = "100px" }) => {
  return (
    <div className="flex justify-center items-center">
      <img src={logo} alt="Logo" style={{ width: "50px", height: "auto" }} />
    </div>
  );
};

export default Logo;
