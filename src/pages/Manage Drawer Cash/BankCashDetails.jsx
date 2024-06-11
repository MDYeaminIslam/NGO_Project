import React from "react";
import { useParams } from "react-router-dom";

export default function BankCashDetails() {
  const { id } = useParams();
  return <div>BankCashDetails</div>;
}
