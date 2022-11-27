import React, { useEffect, useState } from "react";

const UserInfo = (email) => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/${email}`)
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
