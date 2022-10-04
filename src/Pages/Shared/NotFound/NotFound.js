import React from "react";
import sleeping404 from "../../../images/404.webp";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-primary text-center">Oops! Page Not Found !!!</h1>
      <img className="w-100" src={sleeping404} alt="" />
    </div>
  );
};

export default NotFound;
