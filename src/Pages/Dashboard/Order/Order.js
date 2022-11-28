import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Order = () => {
  useTitle("Order");
  const { user } = useContext(AuthContext);
  console.log(user);

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch(
      "https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/bookings"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllOrders(data);
      });
  }, []);
  console.log("order", allOrders);

  const handleDelete = (booking) => {
    fetch(
      `https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/bookings/${booking._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("DELETE DATA", data);
        alert("Are you DELETE this product");
        const remaining = allOrders.filter(
          (bookings) => bookings._id !== booking._id
        );
        setAllOrders(remaining);
      });
  };

  const handlePayment = (order) => {
    console.log("Payment Order", order);
  };
  return (
    <div>
      {" "}
      <div>
        <h2 className="text-3xl text-center my-10 font-bold">
          All Orders List
        </h2>
        <div className="overflow-x-auto">
          <table className="table  w-full">
            <thead>
              <tr>
                <th>{user?.email}</th>
                <th>Name</th>
                <th>Email</th>
                <th>Price</th>
                <th>Buy Now</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((bookings, i) => (
                <>
                  {bookings?.user?.email === user?.email && (
                    <tr key={bookings._id}>
                      <th>
                        <img
                          className="rounded-xl w-24"
                          src={bookings.image_url}
                          alt=""
                        ></img>
                      </th>
                      <td>{bookings.title}</td>
                      <td>{bookings.sellerEmail}</td>
                      <td>{bookings.resalePrice}</td>

                      {bookings?.paid !== "paid" ? (
                        <>
                          <td>
                            <Link to={`/dashboard/payment/${bookings?._id}`}>
                              <button className="btn btn-primary btn-sm">
                                Pay
                              </button>
                            </Link>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>
                            <button
                              disabled
                              className="btn btn-xs btn-secondary"
                            >
                              Paid
                            </button>
                          </td>
                        </>
                      )}
                      <td>
                        <button
                          onClick={() => handleDelete(bookings)}
                          className="btn btn-xs btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
