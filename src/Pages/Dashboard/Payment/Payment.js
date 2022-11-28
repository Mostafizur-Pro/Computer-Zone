import React from "react";
import { useLoaderData } from "react-router-dom";
import CheakoutForm from "./CheakoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Loading from "../../Shared/Loading/Loading";
import useTitle from "../../../hooks/useTitle";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => {
  useTitle("Payment");

  // const order = useLoaderData();
  const { order } = useLoaderData();
  const { title, resalePrice, category } = order;

  console.log("order", order);
  return (
    <div>
      <h3 className="text-3xl mt-10">
        Payment for <strong>{title}</strong>
      </h3>
      <p className="text-xl">
        {/* Please pay <strong>${resalePrice}</strong> for your order on {category}{" "} */}
      </p>
      {/* <div>
        <Elements stripe={stripePromise}>
          <CheakoutForm paymentData={order}></CheakoutForm>
        </Elements>
      </div> */}
    </div>
  );
};

export default Payment;
