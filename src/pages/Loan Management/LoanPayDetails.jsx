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
import LoanPayDetailsList from "./LoanPayDetailsList";
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
    <div className="max-w-5xl mx-auto mt-8">
      <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
        {" "}
        {data.ngoLoanDetails.nameOfInstitute}
      </h1>
      <div className="text-lg p-4 bg-base-200 w-fit mx-auto rounded-md m-4 tracking-normal leading-relaxed flex flex-wrap gap-4 ">
        {isFetched ? (
          <h1 className="bg-teal-700 text-white p-2 rounded-md font-medium">
            {" "}
            Name of Institute:
            <span className="font-thin mx-2 ">
              {" "}
              {data.ngoLoanDetails.nameOfInstitute}
            </span>
          </h1>
        ) : null}
        {isFetched ? (
          <h1 className="bg-teal-700 text-white p-2 rounded-md font-medium">
            {" "}
            Total Amount:
            <span className="font-thin mx-2 ">
              {" "}
              {data.ngoLoanDetails.totalAmount}
            </span>
          </h1>
        ) : null}
        {isFetched ? (
          <h1 className="bg-teal-700 text-white p-2 rounded-md font-medium">
            Total Paid:{" "}
            <span className="font-thin mx-2 ">
              {" "}
              {data.ngoLoanDetails.totalPaid}
            </span>
          </h1>
        ) : null}
        {isFetched ? (
          <h1 className="bg-teal-700 text-white p-2 rounded-md font-medium">
            Per Installment:{" "}
            <span className="font-thin mx-2 ">
              {" "}
              {data.ngoLoanDetails.perInstallment.toFixed(2)}
            </span>
          </h1>
        ) : null}
      </div>
      <form className="flex flex-col w-fit mx-auto md:flex-row items-center p-4 gap-4">
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

        <button className="btn bg-teal-700 text-white" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <div>
        <div>
          <div className="max-w-5xl mx-auto bg-teal-700 text-white py-4 ">
            <tr className="grid grid-cols-1 md:grid-cols-5  items-center justify-center gap-1 text-start">
              <th>Remark</th>
              <th>Date</th>
              <th>Amount</th>
              <th>NGO Loan ID</th>
            </tr>
          </div>
        </div>
        {isFetched
          ? data.transactionDetails.map((data, idx) => (
              <LoanPayDetailsList data={data} key={idx} />
            ))
          : null}
      </div>
    </div>
  );
};

export default LoanPayDetails;
