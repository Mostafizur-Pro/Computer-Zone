import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategories(data);
      });
  }, []);
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-10 ">
        {categories.map(
          (category) => (
            <Category key={category._id} categories={category}></Category>
          )
          // console.log(category)
        )}
      </div>
      <div className="text-center mt-5">
        <Link to={`/categorydetails/${"laptop"}`}>
          <button className="btn text-2xl btn-primary">See All Post</button>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
