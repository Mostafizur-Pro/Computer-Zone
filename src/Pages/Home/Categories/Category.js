import React from "react";
import { Link } from "react-router-dom";

const Category = ({ categories }) => {
  const { name, detail, image, _id, category } = categories;
  return (
    <div>
      <div className="card mx-auto mb-15  shadow-slate-600 shadow-2xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="category" className="rounded-xl w-96 h-48" />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>
            {detail.slice(0, 100) + "..."}{" "}
            <Link
              // to={`/servicedetails/${_id}`}
              className="text-red-400"
            >
              Read More
            </Link>{" "}
          </p>
          <div className="card-actions">
            <Link to={`/categorydetails/${category}`}>
              {" "}
              <button className="btn btn-primary">More Products</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
