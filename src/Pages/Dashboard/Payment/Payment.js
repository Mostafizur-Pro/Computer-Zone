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
  //   console.log("paymentData", paymentData);

  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold text-green-500 text-center">
        Payment Details
      </h1>
      {/* <form>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Card Number</span>
                    </label>
                    <input type="text" placeholder="card number" className="input input-bordered input-primary w-full " />
                </div>
                <div className='flex'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Expiaration Date</span>
                        </label>
                        <input type="text" placeholder="MM/YY" className="input input-bordered input-primary w-full " />
                    </div>
                    <div className="form-control w-full ml-5">
                        <label className="label">
                            <span className="label-text">CV Code</span>
                        </label>
                        <input type="text" placeholder="CVC" className="input input-bordered input-primary w-full " />
                    </div>
                </div>
            </form> */}
      <div>
        <Elements stripe={stripePromise}>
          <CheakoutForm paymentData={paymentData}></CheakoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
