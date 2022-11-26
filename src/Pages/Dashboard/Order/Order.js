import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Order = () => {
  useTitle("Order");
  const { user } = useContext(AuthContext);
  console.log(user);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setOrders(data);
      });
  }, []);

  const handleDelete = (order) => {
    console.log("delete");
    // fetch(`http://localhost:5000/orders/${order._id}`, {
    //   method: "DELETE",
    // }).then((res) => res.json());
    fetch(`http://localhost:5000/orders/${order._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("DELETE DATA", data);
        alert("Are you DELETE this product");
        const remaining = orders.filter(
          (products) => products._id !== order._id
        );
        setOrders(remaining);
        // refetch();
      });
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
                <th>User Type</th>
                <th>Buy Now</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
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
                    <td>{order.buyer_email}</td>

                    <td>
                      <button className="btn btn-xs btn-secondary">Paid</button>
                    </td>
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
