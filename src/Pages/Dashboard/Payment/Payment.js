import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import CheakoutForm from "./CheakoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Loading from "../../Shared/Loading/Loading";
// import Loading from "../../Shered/Spinner/Loading";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => {
  const paymentData = useLoaderData();
  const navigation = useNavigation();
  console.log("paymentData", stripePromise);

  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold text-green-500 text-center">
        Payment Details
      </h1>

      <div>
        <Elements stripe={stripePromise}>
          <CheakoutForm paymentData={paymentData}></CheakoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
