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
  // console.log("userInfo", appointmentOption);
  const orderNow = (
    <>
      {" "}
      <label
        htmlFor="my-modal"
        onClick={() => setTreatment(appointmentOption)}
        className="btn btn-success"
      >
        Order Now
      </label>
    </>
  );
  const wishList = (
    <div>
      <button className="btn btn-secondary">Add Wish list</button>
    </div>
  );

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
              <>
                <div className="card-actions justify-end">{orderNow}</div>
                <div className="card-actions justify-end">{wishList}</div>
              </>
            )}
          </div>
        </div>

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
            <div className="flex justify-center">
              <div className="card-actions mr-5 justify-center">{orderNow}</div>
              <div className="card-actions ml-5 justify-center">{wishList}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsItem;
