import { useQuery } from "@tanstack/react-query";
import { useParams, useLocation } from "react-router-dom";
import {
  ngoLoanList,
  ngoLoanPayment,
  ngoLoanTransaction,
} from "../../../api/admin";
import { useState } from "react";
import useMutationHook from "../../../hooks/useMutationHook";

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
  });

  console.log(data);

  const { mutate, errorMessage, isError } = useMutationHook(ngoLoanPayment, {
    key: [`nog-loan-${id}`],
    onSuccess: () => {
      toast.success("Done!");
    },
    onError: (datad) => {
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
    <div className="w-full">
      {isFetched ? data.length ? <h1>{data[0].NgoLoanDetails.totalPaid}</h1> : null : null}
      <form className="flex flex-col md:flex-row items-center gap-4 p-4">
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

        <button className="btn bg-teal-700 text-white" onClick={handleSubmit}>Submit</button>
      </form>
      {isFetched ? <h1>{data[0].transactions.length} </h1> : null}
    </div>
  );
};

export default LoanPayDetails;
