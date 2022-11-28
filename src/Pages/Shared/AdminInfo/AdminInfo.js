import React, { useEffect, useState } from "react";

const AdminInfo = (email) => {
  const [adminInfo, setAdminInfo] = useState([]);

  useEffect(() => {
    if (email) {
      fetch(
        `https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/users/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setAdminInfo(data);
        });
    }
  }, [email]);
  return [adminInfo];
};
export default AdminInfo;
