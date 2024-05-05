import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  ngoLoanList,
  ngoLoanPayment,
  ngoLoanTransaction,
} from "../../../api/admin";
import { useState } from "react";
import useMutationHook from "../../../hooks/useMutationHook";
import { key } from "localforage";
import toast from "react-hot-toast";
const initialState = {
  ngoLoanId: null,
  amount: 0,
  date: new Date(),
  remark: "",
};

const LoanPayDetails = () => {
  const [formData, setFormData] = useState(initialState);
  const { id } = useParams();
  const { data, isFetched } = useQuery({
    queryKey: [`nog-loan-${id}`],
    queryFn: () => ngoLoanTransaction(id),
    initialData: [],
  });

  console.log(data);

  const { mutate, errorMessage, isError } = useMutationHook(ngoLoanPayment, {
    key: [`nog-loan-${id}`],
    onSuccess: () => {
      toast.success("Done!");
    },
    onError: (data) => {
      toast.error("Something went wrong ");
    },
  });
  function handleChange(e) {
    const { name, type, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      ...formData,
      ngoLoanId: id,
    };
    console.log(data);
    mutate(data);
  }

  return (
    <div>
      {isFetched ? <h1>{data.ngoLoanDetails.totalPaid}</h1> : null}
      <form>
        <input
          className="input input-bordered input-sm  hover:border-teal-500  "
          type="number"
          name="amount"
          onChange={handleChange}
          placeholder="Amount"
        />
        <input
          className="input input-bordered input-sm  hover:border-teal-500  "
          type="text"
          name="remark"
          onChange={handleChange}
          placeholder="Remark"
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>
      {isFetched ? <h1>{data.transactionDetails.length} </h1> : null}
    </div>
  );
};

export default LoanPayDetails;
