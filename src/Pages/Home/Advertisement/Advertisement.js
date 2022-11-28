import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./../../Shared/Loading/Loading";

const Advertisement = () => {
  const { data: product = [0], isLoading } = useQuery({
    queryKey: ["advertisement"],
    queryFn: async () => {
<<<<<<< HEAD
      const res = await fetch(
        "https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/advertisement"
      );
=======
      const res = await fetch("http://localhost:5000/advertisement");
>>>>>>> b2cbf455e3c676f2454242a28da800495ed71b3d
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const {
    Location,
    category,
    condition,
    currentTime,
    image_url,
    number,
    originalPrice,
    resalePrice,
    title,
    usedYear,
    _id,
    email,
  } = product[0];
  console.log("advertisment product", product);
  return (
    <>
      {product.length !== 0 && (
        <div className=" mx-auto w-full shadow-2xl my-5 indicator">
          <div className="indicator-item indicator-top">
            <p className="text-amber-400 text-xl border-4 border-dashed border-amber-400 p-2 rounded-xl font-semibold">
              Advertisement
            </p>
          </div>
          {/* <h3 className="text-3xl font-bold text-center">Advertisement</h3> */}
          <div className="card lg:card-side w-full shadow-xl">
            <figure className="ml-10">
              <img src={image_url} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl text-green-500">{title}</h2>
              <p>
                Post Time: {currentTime} <br />
                {Location}{" "}
              </p>
              <h3>
                <span className="line-through">
                  Original Price {originalPrice}
                </span>
                <br />
                <span className=" text-2xl font-bold">
                  Sell Price {resalePrice}{" "}
                </span>
              </h3>

              <p>Condition: {condition}</p>
              <p>
                Used: {usedYear} {usedYear >= 1 ? <>years</> : <>year</>}
                <br /> {email} <br />
                <span className=" text-2xl font-bold">Mob: {number} </span>
              </p>
              <div className="card-actions justify-end">
                <Link to={`/productdetails/${_id}`}>
                  <button className="btn btn-primary">Booking Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Advertisement;
