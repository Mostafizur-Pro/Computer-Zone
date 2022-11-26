import React from "react";
import img1 from "../../../assete/logo/Microsoft-Logo.jpg";
import img2 from "../../../assete/logo/dell.jpg";
import img3 from "../../../assete/logo/hp.jpg";
import img4 from "../../../assete/logo/Lenovo_logo.jpg";

const Logo = () => {
  return (
    <div className=" justify-between  my-10 mx-20 hidden lg:flex ">
      <img className="shadow-slate-600 shadow-2xl" src={img1} alt="" />
      <img className="shadow-slate-600 shadow-2xl" src={img2} alt="" />
      <img className="shadow-slate-600 shadow-2xl" src={img3} alt="" />
      <img className="shadow-slate-600 shadow-2xl" src={img4} alt="" />
    </div>
  );
};

export default Logo;
