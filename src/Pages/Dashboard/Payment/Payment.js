import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import CheckOutForm from "./CheckOutForm";

const Payment = () => {
  useTitle("Payment");
  const order = useLoaderData();
  console.log("payment order", order);
  const { title, resalePrice, category } = order;

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
        <CheckOutForm order={order}></CheckOutForm>
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
