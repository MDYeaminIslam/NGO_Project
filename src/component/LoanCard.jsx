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
    <div className="border p-4 grid grid-cols-2 max-w-5xl mx-auto">
      <div>
        <img className="w-28" src={photo} alt="" />
      </div>
      <div className="font-bold">
        <h1>Name: <span>{UserName}</span></h1>
        <h1>Samity Name:  <span className="font-normal text-base">{SamityName}</span></h1>
        <h1>Branch Name: <span className="font-normal text-base">{BranchName}</span></h1>
        <h1>Term: <span className="font-normal text-base">{paymentTerm}</span></h1>
        <h1>Loan Amount: <span className="font-normal text-base">{loanAmount}</span></h1>
        <h1>Paid Amount: <span className="font-normal text-base">{paid}</span></h1>
      </div>
    </div>
  );
}
