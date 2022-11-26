import React from "react";
import img1 from "../../../assete/exploreCategory/laptop.png";
import img2 from "../../../assete/exploreCategory/monitor.png";
import img3 from "../../../assete/exploreCategory/printer.png";
import img4 from "../../../assete/exploreCategory/desktop.png";
import img5 from "../../../assete/exploreCategory/Accessories.png";
import { Link } from "react-router-dom";
const ExploreCategory = () => {
  return (
    <div className="mx-auto  lg:inline hidden">
      <h2 className="text-3xl mt-24 text-center font-bold ">
        Explore By Category
      </h2>
      <div className="flex  justify-between my-10 mx-20">
        <div>
          <Link
            to="/categorydetails/laptop"
            className="bg-image hover-bordered"
          >
            <img src={img1} alt="" />
            <p className=" hover:text-red-400 hover:underline">Laptop</p>
          </Link>
        </div>
        <Link to="/categorydetails/Monitor">
          <img src={img2} alt="" />
          <p className=" hover:text-red-400 hover:underline">Monitor</p>
        </Link>
        <Link to="/categorydetails/Printer">
          <img src={img3} alt="" />
          <p className=" hover:text-red-400 hover:underline">Printer</p>
        </Link>
        <Link to="/categorydetails/Desktop">
          <img src={img4} alt="" />
          <p className=" hover:text-red-400 hover:underline">Desktop</p>
        </Link>
        <Link to="/categorydetails/Accessories">
          <img src={img5} alt="" />
          <p className=" hover:text-red-400 hover:underline">Accessories</p>
        </Link>
      </div>
    </div>
  );
};

export default ExploreCategory;
