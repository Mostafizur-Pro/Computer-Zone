import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import useTitle from "../../../hooks/useTitle";
import Loading from "../../Shared/Loading/Loading";

const Admin = () => {
  useTitle("AdminPanel");
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
<<<<<<< HEAD
  //   fetch("https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/users")
=======
  //   fetch("http://localhost:5000/users")
>>>>>>> b2cbf455e3c676f2454242a28da800495ed71b3d
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
<<<<<<< HEAD
      const res = await fetch(
        "https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/users"
      );
=======
      const res = await fetch("http://localhost:5000/users");
>>>>>>> b2cbf455e3c676f2454242a28da800495ed71b3d
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log("admin user", users);

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
  // console.log("Admin", users);

  const handleDelete = (seller) => {
    // console.log("delete");

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
        // console.log("DELETE DATA", data);
        alert("Are you DELETE this product");
        const remaining = users.filter((user) => user._id !== seller._id);
        // setUsers(remaining);

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
