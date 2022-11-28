import React, { useEffect, useState } from "react";

const Users = (email) => {
  const [userInfo, setuserInfo] = useState([]);

  useEffect(() => {
    if (email) {
      fetch(
        `https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/users/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setuserInfo(data);
        });
    }
  }, [email]);
  return [userInfo];
};
export default Users;
