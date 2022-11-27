import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RightNavber = ({ category }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categoryall")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategories(data);
      });
  }, []);
  // console.log(categories);
  return (
    <div>
      {" "}
      {/* <h3 className="font-bold mt-2 underline text-2xl text-red-500">
        All Category
      </h3> */}
      <div className="text-lg font-semibold">
        {categories.map((category) => (
          <p className=" mt-3" key={category._id}>
            <Link
              className="hover:underline selected"
              to={`/categorydetails/${category.category}`}
            >
              {category.category_name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default RightNavber;
