import React from "react";
import { useLoaderData } from "react-router-dom";

import RightNavber from "../Shared/RightNavber/RightNavber";

const Products = () => {
  const products = useLoaderData();

  //   const [products, setProducts] = useState([]);
  //   useEffect(() => {
  //     fetch("http://localhost:5000/category")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // console.log(data);
  //         setProducts(data);
  //       });
  //   }, []);

  return (
    <div>
      <div className="lg:grid lg:grid-cols-12 gap-4 mx-5 sm:none ">
        <div className="col-span-4 lg:col-span-2 mt-5">
          <RightNavber></RightNavber>
        </div>
        <div className="col-span-8 ls:col-span-9">
          <h2 className="text-xl font-bold">
            Total Item of Couse: {products.length}
          </h2>
          {/* {products.map((product) => (
            <Category key={product._id} product={product}></Category>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Products;
