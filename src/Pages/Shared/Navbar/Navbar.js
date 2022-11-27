import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

import Logo from "../Logo/Logo";
import SellerInfo from "../SellerInfo/SellerInfo";

const Navbar = () => {
  const { user, logOut, setTheme, theme } = useContext(AuthContext);

  const [users, setUsers] = useState([]);
  const [sellerInfo] = SellerInfo(user?.email);
  // console.log(users.length, "navber");
  // console.log("sellerinfo", sellerInfo);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUsers(data);
      });
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  // const { setTheme, theme } = useContext(AuthContext);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const menuItem = (
    <>
      <li tabIndex={0}>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a>
          Category List
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </a>
        <ul className="p-2 bg-neutral z-40  ">
          <li>
            <Link to="/categorydetails/Laptop">Laptop</Link>
          </li>
          <li>
            <Link to="/categorydetails/Monitor">Monitor</Link>
          </li>
          <li>
            <Link to="/categorydetails/Printer">Printer</Link>
          </li>
          <li>
            <Link to="/categorydetails/Desktop">Desktop</Link>
          </li>
          <li>
            <Link to="/categorydetails/Accessories">Accessories</Link>
          </li>
          <li>
            <Link to="/categorydetails/Products">Products</Link>
          </li>
        </ul>
        {/* <Link to="/categorydetails/laptop">Category List</Link> */}
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>

      {/* {users?.userType === "Admin" && (
        <>
          <li>
            <Link to="/dashboard/admin">Dashboard</Link>
          </li>
        </>
      )} */}

      {user?.email ? (
        <>
          {sellerInfo?.userType === "Admin" && (
            <>
              <li>
                <Link to="/dashboard/admin">Dashboard</Link>
              </li>
            </>
          )}
          {sellerInfo?.userType === "Seller" && (
            <>
              <li>
                <Link to="/dashboard/myproducts">Dashboard</Link>
              </li>
            </>
          )}
          {sellerInfo?.userType === "Buyer" && (
            <>
              <li>
                <Link to="/dashboard/order">Dashboard</Link>
              </li>
            </>
          )}
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}

      {/* {user?.email ? (
        <>
          {" "}
          {users?.userType === "Seller" &&
          users?.userType !== "Buyer" &&
          users?.userType !== "Admin" ? (
            <>
              <li>
                <Link to="/dashboard/myproducts">Dashboard</Link>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <Link to="/dashboard/order">Dashboard</Link>
              </li>
            </>
          )}
          {users?.userType === "Admin" && (
            <>
              <li>
                <Link to="/dashboard/admin">Dashboard</Link>
              </li>
            </>
          )}
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )} */}
    </>
  );
  return (
    <div className="bg-neutral   text-neutral-content ">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <div className="w-48">
            <Link to="/">
              <Logo></Logo>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  p-0">{menuItem}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="flex-none">
              {users?.userType === "Buyer" && (
                <>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                      <div className="indicator">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span className="badge badge-sm indicator-item">
                          {users.length}
                        </span>
                      </div>
                    </label>
                    <div
                      tabIndex={0}
                      className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                    >
                      <div className="card-body">
                        <span className="font-bold text-lg">8 Items</span>
                        <span className="text-info">Subtotal: $999</span>
                        <div className="card-actions">
                          <button className="btn btn-primary btn-block">
                            View cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="dropdown dropdown-end">
                {users?.userType === "Admin" ? (
                  <>
                    <label tabIndex={0} className=" online avatar">
                      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        {users?.image ? (
                          <>
                            <img src={users?.image} alt="" />
                          </>
                        ) : (
                          <img alt="" src="https://placeimg.com/80/80/people" />
                        )}
                      </div>
                    </label>
                  </>
                ) : (
                  <>
                    {" "}
                    {users?.role === "verify" ? (
                      <>
                        <label tabIndex={0} className=" online avatar">
                          <div className="w-10 rounded-full">
                            {users?.image ? (
                              <>
                                <img src={users?.image} alt="" />
                              </>
                            ) : (
                              <img
                                alt=""
                                src="https://placeimg.com/80/80/people"
                              />
                            )}
                          </div>
                        </label>
                      </>
                    ) : (
                      <label tabIndex={0} className="  avatar">
                        <div className="w-10 rounded-full">
                          {users?.image ? (
                            <>
                              <img src={users?.image} alt="" />
                            </>
                          ) : (
                            <img
                              alt=""
                              src="https://placeimg.com/80/80/people"
                            />
                          )}
                        </div>
                      </label>
                    )}
                  </>
                )}

                <ul
                  tabIndex={0}
                  className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-gray-400 rounded-box w-52"
                >
                  <li>
                    <Link to="/profile" className="justify-between">
                      Profile
                      <span className="badge border-secondary bg-secondary">
                        New
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>Settings</Link>
                  </li>
                  <li onClick={handleLogOut}>
                    <Link>Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <label className="swap ml-2 swap-rotate">
          <input onClick={toggleTheme} type="checkbox" />

          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
