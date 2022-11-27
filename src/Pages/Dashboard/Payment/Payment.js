import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";

import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  useTitle("Payment");

  const order = useLoaderData();
  const { title, resalePrice, category } = order;
  console.log("payment order", order);

  // const [allOrdersData, setAllOrdersData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/orders")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setAllOrdersData(data);
  //     });
  // }, []);

  return (
    <div>
      <h3 className="text-3xl mt-10">
        Payment for <strong>{title}</strong>
      </h3>
      <p className="text-xl">
        Please pay <strong>${resalePrice}</strong> for your order on {category}{" "}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckOutForm order={order}></CheckOutForm>
        </Elements>
        {/* <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking} />
          </Elements>  */}
      </div>

      {/* <h3 className="text-3xl">Payment for {treatment}</h3>
      <p className="text-xl">
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </p> */}
      {/* <div className="w-96 my-12">
          <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking} />
          </Elements> */}
      {/* </div> */}
    </div>
  );
};

export default Payment;
