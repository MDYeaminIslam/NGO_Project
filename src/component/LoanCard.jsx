import React from "react";

export default function LoanCard({ data }) {
  const {
    paymentTerm,
    loanAmount,
    paid,
    SamityName,
    BranchName,
    UserName,
    photo,
  } = data;

  return (
    <div className="border">
      <h1>{UserName}</h1>
      <h1>{SamityName}</h1>
      <h1>{BranchName}</h1>
      <h1>{paymentTerm}</h1>
      <h1>{loanAmount}</h1>
      <h1>{paid}</h1>
    </div>
  );
}
