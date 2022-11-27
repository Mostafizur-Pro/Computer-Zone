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
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllOrders(data);
      });
  }, []);
  console.log("order", allOrders);

  const handleDelete = (order) => {
    console.log("delete", order._id);
    fetch(`http://localhost:5000/orders/${order._id}`, {
      method: "DELETE",
      // headers: {
      //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("DELETE DATA", data);
        alert("Are you DELETE this order");
        const remainingOrders = allOrders.filter(
          (orders) => orders._id !== order._id
        );
        setAllOrders(remainingOrders);
        // refetch();
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
              {allOrders.map((order, i) => (
                <>
                  {order?.user?.email === user?.email && (
                    <tr key={order._id}>
                      <th>
                        <img
                          className="rounded-xl w-24"
                          src={order.image_url}
                          alt=""
                        ></img>
                      </th>
                      <td>{order.title}</td>
                      <td>{order?.sellerEmail}</td>
                      <td>{order.resalePrice}</td>

                      {order?.paid !== "paid" ? (
                        <>
                          <td>
                            <Link to={`/dashboard/payment/${order?._id}`}>
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
                          onClick={() => handleDelete(order)}
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
      {/* -------------------------------------- */}
      {/* -------------------------------------- */}
      {/* -------------------------------------- */}
      {/* -------------------------------------- */}
      {/* -------------------------------------- */}
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
              {allOrders.map((order, i) => (
                <>
                  <tr key={order._id}>
                    <th>
                      <img
                        className="rounded-xl w-24"
                        src={order.image_url}
                        alt=""
                      ></img>
                    </th>
                    <td>{order.title}</td>
                    <td>{order?.email}</td>
                    <td>{order.resalePrice}</td>

                    {order?.paid !== "paid" ? (
                      <>
                        <td>
                          <Link to={`/dashboard/payment/${order?._id}`}>
                            <button className="btn btn-primary btn-sm">
                              Pay
                            </button>
                          </Link>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>
                          <button disabled className="btn btn-xs btn-secondary">
                            Paid
                          </button>
                        </td>
                      </>
                    )}
                    <td>
                      <button
                        onClick={() => handleDelete(order)}
                        className="btn btn-xs btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
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
