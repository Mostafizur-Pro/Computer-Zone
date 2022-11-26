import React from "react";

import AddProduct from "../AddProduct/AddProduct";
import Order from "../Order/Order";

const DashboardLayout = () => {
  return (
    <div>
      <Order></Order>
      <AddProduct></AddProduct>
    </div>
  );
};

export default DashboardLayout;
