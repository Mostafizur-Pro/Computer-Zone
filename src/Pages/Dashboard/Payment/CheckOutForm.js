import React from "react";

const CheckOutForm = ({ order }) => {
  const { title, resalePrice, category } = order;

  const handleSubmit = async (event) => {};
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <CardElement
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
        /> */}
        <button
          className="btn btn-sm mt-4 btn-primary"
          type="submit"
          //   disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {/* <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p>
            Your transactionId:{" "}
            <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )} */}
    </>
  );
};

export default CheckOutForm;
