import React, { useEffect, useState } from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

const CheakoutForm = ({ paymentData }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { resalePrice, category, _id } = paymentData;

  useEffect(() => {
    fetch(
      "https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ resalePrice }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [resalePrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: category,
            email: paymentData.user.email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      const payment = {
        resalePrice,
        transectionId: paymentIntent.id,
        email: paymentData.user.email,
        productId: _id,
        // categoryItemId: category,
      };

      fetch(
        "https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/payment",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            // authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(payment),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            success("Congratulations! Your payment completed");
            setTransactionId(paymentIntent.id);
            navigate("/dashboard/orders");
          }
        });
    }

    setProcessing(false);
  };
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl text-green-500">
          Product Name: <span className=""> {category}</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-10 w-full"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p>Your transaction Id : {transactionId}</p>
        </div>
      )}
      <p className="text-red-500">{cardError}</p>
    </div>
  );
};

export default CheakoutForm;
