import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";

const AllSeller = () => {
  useTitle("AllSeller");
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/users"
      )
      .then((data) => {
        const users = data.data;

        setSellers(users);
      });
  });

  const handleMakeAdmin = (id) => {
    // console.log("approved", id);

    fetch(
      `https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/users/admin/${id}`,
      {
        method: "PUT",
        // headers: {
        //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
        // },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // if (data.modifiedCount > 0) {
        //   toast.success("Make admin successful.");
        //   // refetch();
        // }
        toast.success("Make verify successful.");
      });
  };

  const handleDelete = (product) => {
    console.log("delete");
    fetch(
      `https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/users/${product._id}`,
      {
        method: "DELETE",
        // headers: {
        //   "content-type": "application/json",
        // },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("DELETE DATA", data);
        alert("Are you DELETE this product");
        const remaining = sellers.filter(
          (products) => products._id !== product._id
        );
        setSellers(remaining);
        // refetch();
      });
  };

  // return <div>{sellers.userType === "userType" &&}</div>;
  return (
    <div>
      <div>
        <h2 className="text-3xl text-center my-10 font-bold">
          All Seller List
        </h2>
        <div className="overflow-x-auto">
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
                  {seller.userType === "Seller" && (
                    <tr key={seller._id}>
                      <th>
                        <div className="w-24 rounded-full">
                          <img src={seller.image} alt="" />
                        </div>
                      </th>
                      <td>{seller.name}</td>
                      <td>{seller.email}</td>
                      <td>
                        {seller?.userType === "Seller" &&
                          seller?.role !== "verify" && (
                            <>
                              <td>
                                <button
                                  onClick={() => handleMakeAdmin(seller?._id)}
                                  className="btn btn-xs btn-secondary"
                                >
                                  Click
                                </button>
                              </td>
                            </>
                          )}

                        {seller?.role === "verify" && (
                          <>
                            <td>
                              <button className="btn btn-xs btn-success">
                                Verify
                              </button>
                            </td>
                          </>
                        )}
                      </td>
                      <td>{seller.userType}</td>

                      <td>
                        <button
                          onClick={() => handleDelete(seller)}
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

export default AllSeller;
