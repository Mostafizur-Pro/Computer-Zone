import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const order = useLoaderData();
  console.log("payment order", order);

  return (
    <div>
      hi
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
