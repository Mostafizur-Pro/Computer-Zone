import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import useTitle from "../../../hooks/useTitle";
import Loading from "../../Shared/Loading/Loading";

const Admin = () => {
  useTitle("AdminPanel");
  // const [users, setUsers] = useState([]);

  // useEffect(() => {

  //   fetch("https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/users")

  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setUsers(data);
  //     });
  // }, []);
  const {
    data: users = [0],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/users"
      );

      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log("admin user", users);

  const handleMakeAdmin = (id) => {
    fetch(
      `https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/users/admin/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Make verify successful.");
      });
  };

  const handleDelete = (seller) => {
    fetch(
      `https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/users/${seller._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        alert("Are you DELETE this product");
        const remaining = users.filter((user) => user._id !== seller._id);

        refetch();
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
              {users.map((user, i) => (
                <>
                  {user.userType === "Admin" && (
                    <tr key={user._id}>
                      <th>{i + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td className="text-green-400">{user.userType}</td>

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
            {users.map((user, i) => (
              <>
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.userType}</td>
                  {user?.userType === "Seller" && user?.role !== "verify" && (
                    <>
                      <td>
                        <button
                          onClick={() => handleMakeAdmin(user?._id)}
                          className="btn btn-xs btn-secondary"
                        >
                          Click
                        </button>
                      </td>
                    </>
                  )}
                  {user?.userType !== "Seller" && (
                    <>
                      <td>
                        <button disabled className="btn btn-xs btn-secondary">
                          Click
                        </button>
                      </td>
                    </>
                  )}
                  {user?.role === "verify" && (
                    <>
                      <td>
                        <button className="btn btn-xs btn-success">
                          Verify
                        </button>
                      </td>
                    </>
                  )}

                  <td>
                    <button
                      onClick={() => handleDelete(user)}
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
