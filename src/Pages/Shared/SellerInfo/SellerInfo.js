import React, { useEffect, useState } from "react";

const SellerInfo = (email) => {
  const [sellerInfo, setSellerInfo] = useState([]);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/${email}`)
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
