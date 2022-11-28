import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import SellerInfo from "../../Shared/SellerInfo/SellerInfo";

const AddProductDetails = ({ setTreatment, appointmentOption }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [sellerInfo] = SellerInfo(user?.email);
  const [imgbb, setImgbb] = useState("");
  const imageHostKey = "8f9db19b3f39c00f02b131902d75b8e3";
  const {
    register,
    handleSubmit: handleProduct,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    // console.log(data);
    // createImageProduct(data);
    // ----------------------------------------------------
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    // ----------------------------------------------------

    // imgbb API theke url ta copy kora hoise
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    // console.log("imageHostKey", url);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log("dispaly", imgData.data.display_url);

        if (imgData.success) {
          const imageData = imgData.data.display_url;
          setImgbb(imageData);
          // console.log("img link", imageData);
          const appointmentOption = {
            ...data,
            sellerEmail: sellerInfo.email,

            sellerName: sellerInfo.name,

            currentTime: new Date(),
            image_url: imgData.data.display_url,
          };

          saveUser(appointmentOption);

          // navigate("/dashboard/myproducts");
        }
      });
    // console.log("imgbb image link", imageData);

    // console.log("add product in server", addProduct);
  };

  const saveUser = (appointmentOption) => {
    console.log("saveuser", appointmentOption);
    fetch(
      "https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/addProduct",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(appointmentOption),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("Product add");
          // navigate("/dashboard/myproducts");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <h3 className="text-2xl text-center font-bold mt-10">
        Add Your Selling Product
      </h3>
      <form
        onSubmit={handleProduct(handleAddProduct)}
        className="grid grid-cols-1 gap-3 mt-10"
      >
        <label className="label">
          {" "}
          <span className="label-text">Product Name</span>
        </label>
        <input
          type="text"
          {...register("title", {
            required: "Your product name is required",
          })}
          className="input input-bordered w-full max-w-lg"
        />
        {errors.title && (
          <p className="text-red-600">{errors.title?.message}</p>
        )}

        <div className="flex justify-between">
          <div>
            <label className="label">
              {" "}
              <span className="label-text">Original Price</span>
            </label>
            <input
              type="text"
              {...register("originalPrice", {
                required: "Your product original price is required",
              })}
              className="input input-bordered w-full max-w-lg"
            />
            {errors.originalPrice && (
              <p className="text-red-600">{errors.originalPrice?.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              {" "}
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              {...register("resalePrice", {
                required: "Your product price is required",
              })}
              className="input input-bordered w-full max-w-lg"
            />
            {errors.resalePrice && (
              <p className="text-red-600">{errors.resalePrice?.message}</p>
            )}
          </div>
        </div>
        <label className="label">
          {" "}
          <span className="label-text">Product Condition</span>
        </label>

        <select
          {...register("condition", {
            required: "Must be selected user",
          })}
          className="select select-bordered  max-w-lg"
        >
          <option hidden selected>
            Selected one
          </option>
          <option>Excellent</option>
          <option>Good</option>
          <option>Fair</option>
        </select>
        {errors.condition && (
          <p className="text-red-600">{errors.condition?.message}</p>
        )}

        <label className="label">
          {" "}
          <span className="label-text">Mobile Number</span>
        </label>
        <input
          type="text"
          {...register("number", {
            required: "Enter your mobile number is required",
          })}
          className="input input-bordered w-full max-w-lg"
        />
        {errors.number && (
          <p className="text-red-600">{errors.number?.message}</p>
        )}
        <div className="flex justify-between">
          <div>
            <label className="label">
              {" "}
              <span className="label-text">Location</span>
            </label>
            <select
              {...register("Location", {
                required: "Must be selected location",
              })}
              className="select select-bordered max-w-lg"
            >
              <option hidden selected>
                Select Your Location
              </option>
              <option>Dhaka</option>
              <option>Chottogram</option>
            </select>
            {errors.Location && (
              <p className="text-red-600">{errors.Location?.message}</p>
            )}
          </div>
          <div className="ml-10">
            <label className="label">
              {" "}
              <span className="label-text">Category</span>
            </label>
            <select
              {...register("category", {
                required: "Must be selected location",
              })}
              className="select select-bordered max-w-lg"
            >
              <option hidden selected>
                Select Your Product Category
              </option>
              <option>Laptop</option>
              <option>Monitor</option>
              <option>Printer</option>
              <option>Desktop</option>
              <option>Accessories</option>
              <option>Products</option>
            </select>
            {errors.category && (
              <p className="text-red-600">{errors.category?.message}</p>
            )}
          </div>
        </div>

        <label className="label">
          {" "}
          <span className="label-text">Use Year</span>
        </label>
        <input
          type="text"
          {...register("usedYear", {
            required: "Your product uesd year is required",
          })}
          className="input input-bordered w-full max-w-lg"
        />
        {errors.usedYear && (
          <p className="text-red-600">{errors.usedYear?.message}</p>
        )}
        <label className="label">
          {" "}
          <span className="label-text">Product Details</span>
        </label>
        <input
          type="textarea"
          {...register("product_details", {
            required: "Your product uesd year is required",
          })}
          className="textarea h-24 input-bordered w-full max-w-lg"
        />
        {errors.product_details && (
          <p className="text-red-600">{errors.product_details?.message}</p>
        )}
        <div>
          <label className="label">
            {" "}
            <span className="label-text">Select Your Image</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className=" input-bordered w-full max-w-xs"
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>

        <br />
        {/* <input className="btn btn-accent w-full" type="submit" value="Submit" /> */}
        {/* The button to open modal */}
        <label
          onClick={() => setTreatment(appointmentOption)}
          htmlFor="my-modal"
          className="btn"
        >
          open modal
        </label>
      </form>
    </div>
  );
};

export default AddProductDetails;
