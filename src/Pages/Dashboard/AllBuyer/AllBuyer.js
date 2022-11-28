import axios from "axios";
import React, { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";

const AllBuyer = () => {
  useTitle("AllUser");
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/users"
      )
      .then((data) => {
        const users = data.data;

        setBuyers(users);
      });
  }, []);

  const handleDelete = (product) => {
    fetch(
      `https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/users/${product._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const remaining = buyers.filter(
          (products) => products._id !== product._id
        );
        setBuyers(remaining);
      });
  };
  return (
    <div>
      <div>
        <h2 className="text-3xl text-center my-10 font-bold">All Buyer List</h2>
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
              {buyers.map((buyer, i) => (
                <>
                  {buyer.userType === "Buyer" && (
                    <tr key={buyer._id}>
                      <th>
                        <div className="w-24 rounded-full">
                          <img src={buyer.image} alt="" />
                        </div>
                      </th>
                      <td>{buyer.name}</td>
                      <td>{buyer.email}</td>
                      <td>{buyer.userType}</td>

                      <td>
                        <button
                          onClick={() => handleDelete(buyer)}
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

export default AllBuyer;
