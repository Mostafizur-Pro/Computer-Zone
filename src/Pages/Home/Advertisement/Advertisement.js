import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Advertisement = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/advertisement")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        {
          data.map((product) => {
            setProduct(product);
          });
        }
      });
  }, []);
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
  } = product;
  console.log(product);
  return (
    <div className=" mx-auto w-full shadow-2xl my-5 indicator">
      <div className="indicator-item indicator-top">
        <p className="text-amber-400 text-xl border-4 border-dashed border-amber-400 p-2 rounded-xl font-semibold">
          Advertisement
        </p>
      </div>
      {/* <h3 className="text-3xl font-bold text-center">Advertisement</h3> */}
      <div className="card lg:card-side  shadow-xl">
        <figure className="ml-10">
          <img src={image_url} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-green-500">{title}</h2>
          <p>{Location} </p>
          <h3>
            <span className="line-through">Original Price {originalPrice}</span>
            <br />
            <span className=" text-2xl font-bold">
              Sell Price {resalePrice}{" "}
            </span>
          </h3>
          {/* <h3> <span className="line-through">
                  Original Price {originalPrice}
                </span>
                <span className="text-red-400 text-xl font-semibold">
                               Sell Price {resalePrice} </span></p> */}
          <p>Condition: {condition}</p>
          <p>
            Used: {usedYear} {usedYear === 1 ? <>years</> : <>year</>}
          </p>
          <div className="card-actions justify-end">
            <p className="">Post Time: {currentTime}</p>
            <Link to={`/productdetails/${_id}`}>
              <button className="btn btn-primary">Booking Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;