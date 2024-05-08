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
    <div className="grid grid-cols-4 text-xs md:text-base md:grid-cols-4  max-w-5xl mx-auto bg-gray-100 border-l-4 border-teal-700 p-4 text-center   ">
      <p className="mt-2">{productName}</p>
      <p className="mt-2">{quantity}</p>
      <p className="mt-2">{amount}</p>
      <button className="btn btn-xs md:btn mt-2 btn-info text-white text-center -top-1 relative">View</button>
    </div>
  );
}
 