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
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProfilesData(data);
      });
  }, []);
  console.log("user", user?.email);
  return (
    <div>
      {profilesData.map((profileData) => (
        <div>
          {profileData?.email === user?.email && (
            <div className="hero min-h-screen bg-inherit ">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src={profileData?.image}
                  alt=""
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-4xl mb-3 font-bold">
                    Name: {profileData.name}
                  </h1>
                  <p className="text-3xl mb-3 font-sm">
                    <span className="font-medium">Email : </span>{" "}
                    {profileData?.email}
                  </p>
                  <p className="text-3xl mb-3 font-sm">
                    <span className="font-medium">Phone Number : </span>{" "}
                    {profileData.number}
                  </p>
                  <p className="text-3xl mb-3 font-sm">
                    <span className="font-medium">User Type : </span>{" "}
                    <small className="text-green-900">
                      {profileData?.userType}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Profile;
