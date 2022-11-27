import React from "react";

import { Link, useLoaderData } from "react-router-dom";

const CategoryList = ({ courseItem }) => {
  console.log("courseItem", courseItem);

  const {
    category_name,
    title,
    email,
    condition,
    originalPrice,
    product_details,
    image_url,
    category,
    resalePrice,
    Location,
    usedYear,
    currentTime,
    _id,
  } = courseItem;
  // const categories = useLoaderData();
  console.log("course", category_name);

  return (
    <div className="my-10">
      <div className="card lg:card-side  shadow-2xl">
        <figure className="m-5">
          <img
            src={image_url}
            alt="category"
            className="rounded-xl w-96 h-48"
          />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="card-title text-3xl">{title}</h2>
            <p>Location: {Location}</p>
          </div>

          <p className="">
            <span className="line-through rounded rounded-lg">
              ${originalPrice}
            </span>
            <span className="text-xl"> Price: ${resalePrice}</span> <br />
            <span>
              Used: {usedYear} {usedYear >= 1 ? <>years</> : <>year</>}
            </span>
          </p>
          <p>Seller Name: {email}</p>
          <div className="card-actions justify-end">
            <p>Post Time : {currentTime}</p>
            <Link to={`/productdetails/${_id}`}>
              {" "}
              <button className="btn btn-primary">Product Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
