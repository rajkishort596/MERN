import React from "react";
import { Outlet } from "react-router-dom";
import Cat from "./Cat/Cat";

const CatLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default CatLayout;
