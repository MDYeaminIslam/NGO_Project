import React from "react";

export default function AssetCard({ data }) {
  const {
    type,
    productName,
    quantity,
    amount,
    depreciation,
    description,
    remarks,
    date,
  } = data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4  max-w-5xl mx-auto bg-gray-100 border-l-4 border-teal-700 p-4 text-start   ">
      <p className="mt-2">{productName}</p>
      <p className="mt-2">{quantity}</p>
      <p className="mt-2">{amount}</p>
      <button className="btn w-fit mt-2 btn-primary">View</button>
    </div>
  );
}
