import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useBuyer from "../../hooks/useBuyer";
import useTitle from "../../hooks/useTitle";
import Loading from "../Shared/Loading/Loading";
import OrderModal from "../Shared/Modal/OrderModal";
import ProductDetailsItem from "./ProductDetailsItem";

const ProductDetails = () => {
  useTitle("ProductDetails");
  // const { user } = useContext(AuthContext);
  // const [treatment, setTreatment] = useState(null);

  // const [isBuyer] = useBuyer(user?.email);
  // // const navigate = useNavigate();

  // console.log("user name", user);
  const [products] = useLoaderData();

  // const {
  //   title,
  //   category,
  //   condition,
  //   image_url,
  //   originalPrice,
  //   product_details,
  //   resalePrice,
  //   usedYear,
  // } = products;
  const [treatment, setTreatment] = useState(null);
  // const date = format(selectedDate, "PP");
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/productAll/${products._id}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  // const product = products + user.email;

  // const productDetails = { ...products, email: user?.email, paid: "unpaid" };
  // const handleOrder = (productDetails) => {
  //   console.log("id", productDetails);
  //   // console.log(productDetails);

  //   fetch("http://localhost:5000/ordersadd", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(productDetails),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("saveUser", data);
  //       navigate("/dashboard/order");
  //       // setCreatedUserEmail(email);
  //     });
  //   console.log("useremail", productDetails);
  // };

  return (
    <section>
      <div>
        {appointmentOptions.map((option) => (
          <ProductDetailsItem
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></ProductDetailsItem>
        ))}
      </div>
      <div>
        {treatment && (
          <OrderModal
            // selectedDate={selectedDate}
            treatment={treatment}
            setTreatment={setTreatment}
            refetch={refetch}
          ></OrderModal>
        )}
      </div>
    </section>
    // <div className="my-10">
    //   <h2 className="text-3xl text-center my-5 text-green-400">
    //     {" "}
    //     {product_details}
    //   </h2>
    //   <div className="card lg:card-side ">
    //     <figure>
    //       <img className="" src={image_url} alt="Album" />
    //     </figure>
    //     <div className="card-body">
    //       <h2 className="card-title">{title}</h2>
    //       <p>{product_details}</p>
    //       {isBuyer && (
    //         <div className="card-actions justify-end">
    //           <label
    //             htmlFor="my-modal"
    //             onClick={() => setTreatment(products)}
    //             className="btn btn-success"
    //           >
    //             Order Now
    //           </label>
    //           {/* <button
    //             onClick={() => handleOrder(productDetails)}
    //             className="btn btn-primary"
    //           >
    //             Order Now
    //           </button> */}
    //         </div>
    //       )}
    //     </div>
    //   </div>
    //   {/* ------------------------------------------------- */}
    //   <div>
    //     {/* The button to open modal */}
    //     {/* <label htmlFor="my-modal" className="btn">
    //       open modal
    //     </label> */}

    //     {/* Put this part before </body> tag */}
    //     {/* <input type="checkbox" id="my-modal" className="modal-toggle" />
    //     <div className="modal">
    //       <div className="modal-box">
    //         <h3 className="font-bold text-lg">
    //           Congratulations random Internet user!
    //         </h3>
    //         <p className="py-4">
    //           You've been selected for a chance to get one year of subscription
    //           to use Wikipedia for free!
    //         </p>
    //         <div className="modal-action">
    //           <label htmlFor="my-modal" className="btn">
    //             Yay!
    //           </label>
    //         </div>
    //       </div>
    //     </div> */}
    //   </div>
    //   {/* ------------------------------------------------- */}
    //   <div className="overflow-x-auto my-10">
    //     <table className="table table-zebra w-4/6 mx-auto">
    //       <thead>
    //         <tr>
    //           <th>
    //             <strong className="text-2xl">Name</strong>
    //           </th>
    //           <th>
    //             <strong className="text-2xl">Description</strong>
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <th>Product Name :</th>
    //           <td>: {title}</td>
    //         </tr>

    //         <tr>
    //           <th>Brand Name</th>
    //           <td>: {category}</td>
    //         </tr>

    //         <tr>
    //           <th>Details</th>
    //           <td>: {product_details}</td>
    //         </tr>
    //         <tr>
    //           <th>Used</th>
    //           <td>
    //             : {usedYear}{" "}
    //             <span className="ml-5 text-gray-500">
    //               condition : {condition}
    //             </span>
    //           </td>
    //         </tr>
    //         <tr>
    //           <th>Price </th>
    //           <td>
    //             :{" "}
    //             <span className="line-through">
    //               Original Price {originalPrice}
    //             </span>
    //             <span className="text-red-400 text-xl font-semibold">
    //               {" "}
    //               Sell Price {resalePrice}
    //             </span>
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //     {isBuyer && (
    //       <div className="card-actions justify-center">
    //         <button
    //           // onClick={() => handleOrder(productDetails)}
    //           className="btn btn-primary"
    //         >
    //           Order Now
    //         </button>
    //       </div>
    //     )}
    //   </div>
    //   {treatment && <OrderModal treatment={treatment}></OrderModal>}
    // </div>
  );
};

export default ProductDetails;
