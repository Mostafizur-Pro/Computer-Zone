import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

import useTitle from "../../hooks/useTitle";
import Loading from "../Shared/Loading/Loading";
import OrderModal from "../Shared/Modal/OrderModal";
import ProductDetailsItem from "./ProductDetailsItem";

const ProductDetails = () => {
  useTitle("ProductDetails");

  const [products] = useLoaderData();

  const [treatment, setTreatment] = useState(null);
  // const date = format(selectedDate, "PP");
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["productAll"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/productAll/${products._id}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section>
      <div>
        {appointmentOptions.map((option) => (
          <ProductDetailsItem
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></ProductDetailsItem>
        ))}
      </div>
      <div>
        {treatment && (
          <OrderModal
            treatment={treatment}
            setTreatment={setTreatment}
            refetch={refetch}
          ></OrderModal>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
