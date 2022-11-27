import React, { useContext } from "react";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const OrderModal = ({ treatment, setTreatment, refetch }) => {
  const orderDate = new Date();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const {
    title,
    category,
    condition,
    image_url,
    originalPrice,
    product_details,
    resalePrice,
    usedYear,
    email,
  } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const buyerPhone = form.phone.value;
    const buyerLocation = form.location.value;

    const orders = {
      ...treatment,
      user,
      paid: "unpaid",
      buyerPhone,
      buyerLocation,
      orderDate,
    };

    console.log("orderModals", orders);
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        // toast.success("Order Complete");
        console.log("order", data);
        if (data.acknowledged) {
          //  setTreatment(null);
          toast.success("Booking confirmed");
          // navigate("/dashboard/order");
          //  refetch();
        } else {
          toast.error(data.message);
        }
      });
    // console.log("useremail", order);
  };

  return (
    <div>
      {" "}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              disabled
              value={title}
              className="input w-full input-bordered "
            />

            <input
              name="price"
              type="text"
              value={resalePrice}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meet Locaton"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
