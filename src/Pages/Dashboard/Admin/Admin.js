import React, { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";

const Admin = () => {
  useTitle("AdminPanel");
  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSellers(data);
      });
  }, []);

  const handleDelete = (seller) => {
    console.log("delete");
    fetch(`http://localhost:5000/users/${seller._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("DELETE DATA", data);
        alert("Are you DELETE this product");
        const remaining = sellers.filter(
          (products) => products._id !== seller._id
        );
        setSellers(remaining);
        // refetch();
      });
  };
  return (
    <div>
      <div className="">
        <h2 className="text-3xl text-center my-10 font-bold">Admin Panel</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>User Type</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller, i) => (
                <>
                  {seller.userType === "admin" && (
                    <tr key={seller._id}>
                      <th>{i + 1}</th>
                      <td>{seller.name}</td>
                      <td>{seller.email}</td>
                      <td className="text-green-400">{seller.userType}</td>

                      <td>
                        <button className="btn btn-xs btn-danger">
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
      <div className="overflow-x-auto">
        <h2 className="text-3xl text-center my-10 font-bold">All User Panel</h2>
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>User Type</th>
              <th>Approved</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <>
                <tr key={seller._id}>
                  <th>{i + 1}</th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>{seller.userType}</td>
                  <td>
                    <button className="btn btn-xs btn-secondary">Click</button>
                  </td>

                  <td>
                    <button
                      onClick={() => handleDelete(seller)}
                      className="btn btn-xs btn-"
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
  );
};

export default Admin;
