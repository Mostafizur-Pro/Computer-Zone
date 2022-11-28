import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";

// import useTitle from "./../../Hooks/useTitle";

const Profile = () => {
  useTitle("Profile");
  // useTitle("Profile");
  const { user } = useContext(AuthContext);
  const [profilesData, setProfilesData] = useState([]);
  useEffect(() => {
    fetch(
      `https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/users/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProfilesData(data);
      });
  }, []);

  const { image, name, email, number, userType, role } = profilesData;
  console.log("user", user?.email);
  return (
    <div>
      {/* {profilesData.map((profileData) => ( */}
      <div>
        {profilesData?.email === user?.email && (
          <div className="hero min-h-screen bg-inherit ">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={image}
                alt=""
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-4xl mb-3 font-bold">Name: {name}</h1>
                <p className="text-3xl mb-3 font-sm">
                  <span className="font-medium">Email : </span> {email}
                </p>
                <p className="text-3xl mb-3 font-sm">
                  <span className="font-medium">Phone Number : </span> {number}
                </p>
                <p className="text-3xl mb-3 font-sm">
                  <span className="font-medium">User Type : </span>{" "}
                  <small className="text-green-900">{userType}</small>
                </p>
                <p className="text-3xl mb-3 font-sm">
                  <span className="font-medium">User : </span>{" "}
                  <small className="text-green-900">{role}</small>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* ))} */}
    </div>
  );
};

export default Profile;
