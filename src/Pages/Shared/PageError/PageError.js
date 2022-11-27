import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assete/ErrorPage/404.png";

const PageError = () => {
  return (
    <div>
      <img className="w-full" src={img} alt="" />{" "}
      <h3 className="text-2xl text-center font-bold">
        The page you requested could not be found{" "}
      </h3>
      <h3 className="text-xl text-center font-bold">
        Please{" "}
        <span className="text-red-400 text-3xl">
          <Link to="/">Click Me</Link>
        </span>
      </h3>
    </div>
  );
};

export default PageError;
