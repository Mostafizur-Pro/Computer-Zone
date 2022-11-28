import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Categories from "../Categories/Categories";
import Category from "../Categories/Category";

const RecentProduct = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(
      "https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/productsSort"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategories(data);
      });
  }, []);
  console.log(categories);
  return (
    <div>
      <h3 className="text-left text-3xl font-semibold mt-24 text-green-400 mb-5">
        Letest Product :
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 ">
        {categories.map((category) => (
          <>
            <div className="card w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={category.image_url}
                  alt="category"
                  className="rounded-xl w-96 h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {category.title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{category.category}</div>
                  <div className="badge badge-outline">
                    {" "}
                    Sell Price:
                    {category.resalePrice}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default RecentProduct;
