import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import useBuyer from "../../hooks/useBuyer";
import UserInfo from "../Shared/UserInfo/UserInfo";

const ProductDetailsItem = ({ appointmentOption, setTreatment }) => {
  const { user } = useContext(AuthContext);
  const [userInfo] = UserInfo(user?.email);

  const [isBuyer] = useBuyer(user?.email);
  const {
    title,
    category,
    condition,
    image_url,
    originalPrice,
    product_details,
    resalePrice,
    usedYear,
    sellerEmail,
    sellerName,
    number,
  } = appointmentOption;
  console.log("userInfo", appointmentOption);
  return (
    <div>
      <div className="my-10">
        <h2 className="text-3xl text-center my-5 text-green-400">
          {" "}
          {product_details}
        </h2>
        <div className="card lg:card-side ">
          <figure>
            <img className="" src={image_url} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{product_details}</p>
            {isBuyer && (
              <div className="card-actions justify-end">
                <label
                  htmlFor="my-modal"
                  onClick={() => setTreatment(appointmentOption)}
                  className="btn btn-success"
                >
                  Order Now
                </label>
                {/* <button
                onClick={() => handleOrder(productDetails)}
                className="btn btn-primary"
              >
                Order Now
              </button> */}
              </div>
            )}
          </div>
        </div>
        {/* ------------------------------------------------- */}
        <div>
          {/* The button to open modal */}
          {/* <label htmlFor="my-modal" className="btn">
          open modal
        </label> */}

          {/* Put this part before </body> tag */}
          {/* <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div> */}
        </div>
        {/* ------------------------------------------------- */}
        <div className="overflow-x-auto my-10">
          <table className="table table-zebra w-4/6 mb-5 mx-auto">
            <thead>
              <tr>
                <th>
                  <strong className="text-2xl">Name</strong>
                </th>
                <th>
                  <strong className="text-2xl">Description</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Product Name :</th>
                <td>: {title}</td>
              </tr>

              <tr>
                <th>Brand Name</th>
                <td>: {category}</td>
              </tr>

              <tr>
                <th>Details</th>
                <td>: {product_details}</td>
              </tr>
              <tr>
                <th>Used</th>
                <td>
                  : {usedYear}{" "}
                  <span className="ml-5 text-gray-500">
                    condition : {condition}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Price </th>
                <td>
                  :{" "}
                  <span className="line-through">
                    Original Price {originalPrice}
                  </span>
                  <span className="text-red-400 text-xl font-semibold">
                    {" "}
                    Sell Price {resalePrice}
                  </span>
                </td>
              </tr>
              <tr>
                <th>Seller Name</th>
                <td>: {sellerName}</td>
              </tr>
              <tr>
                <th>Seller Email</th>
                <td>: {sellerEmail}</td>
              </tr>
              <tr>
                <th>Seller Number</th>
                <td>: {number}</td>
              </tr>
            </tbody>
          </table>
          {isBuyer && (
            <div className="card-actions justify-center">
              <button
                // onClick={() => handleOrder(productDetails)}
                className="btn btn-primary"
              >
                Order Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsItem;
