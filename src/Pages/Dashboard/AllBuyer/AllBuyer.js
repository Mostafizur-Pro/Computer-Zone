import React, { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";

const AllBuyer = () => {
  useTitle("AllUser");
  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSellers(data);
      });
  }, []);

  const handleDelete = (product) => {
    // console.log("delete");
    fetch(`http://localhost:5000/users/${product._id}`, {
      method: "DELETE",
    })
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
                <th> Delete</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller, i) => (
                <>
                  {seller.userType === "Buyer" && (
                    <tr key={seller._id}>
                      <th></th>
                      <td>{seller.name}</td>
                      <td>{seller.email}</td>
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

export default AllBuyer;
