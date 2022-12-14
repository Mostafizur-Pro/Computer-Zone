import React, { useEffect, useState } from "react";

const UserInfo = (email) => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    if (email) {
      fetch(
        `https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/users/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setUserInfo(data);
        });
    }
  }, [email]);
  return [userInfo];
};

export default UserInfo;
