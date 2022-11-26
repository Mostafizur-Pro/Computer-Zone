import React from "react";

import RightNavber from "./../../Shared/RightNavber/RightNavber";

import { useLoaderData } from "react-router-dom";

import CategoryList from "./CategoryList";
import useTitle from "../../../hooks/useTitle";

const CategoryDetails = () => {
  useTitle("Category");
  const categories = useLoaderData();
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/productcategory/${param.id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setCategories(data);
  //     });
  // }, []);

  // console.log("categoryDetails", categories[0].category_name);
  console.log("categories", categories);
  return (
    <div>
      <div>
        <div className="lg:grid lg:grid-cols-12 gap-4 mx-5 sm:none ">
          <div className="col-span-4 lg:col-span-2 mt-5">
            <RightNavber></RightNavber>
          </div>
          <div className="col-span-8 ls:col-span-9">
            <h2 className="text-3xl text-center  font-bold">
              {/* {categories[0].category_name} items: {categories.length} */}
              {/* Total Item of Couse: */}
            </h2>
            {categories.map((category) => (
              <CategoryList key={category._id} course={category}></CategoryList>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
