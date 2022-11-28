import React, { useEffect, useState } from "react";

const SellerInfo = (email) => {
  const [sellerInfo, setSellerInfo] = useState([]);

  useEffect(() => {
    if (email) {
      fetch(
        `https://b612-used-products-resale-server-side-mostafizur-pro.vercel.app/users/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setSellerInfo(data);
        });
    }
  }, [email]);
  return [sellerInfo];
};

export default SellerInfo;
