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
import Stats from "../../component/Stats";
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
  const totalAmount = isFetched ? data.ngoLoanDetails.totalAmount : null;
  const totalPaid = isFetched ? data.ngoLoanDetails.totalPaid : null;
  const perInstallment = isFetched ? data.ngoLoanDetails.perInstallment.toFixed(2) : null;
  const statsData = { totalAmount, totalPaid, perInstallment, isFetched }
  console.log(statsData);

  return (
    <div className="max-w-5xl mx-auto ">
      <h1 className="  text-lg md:rounded-md bg-teal-700 text-white font-normal  mx-2  mt-4  p-3 text-center ">
        Name Of The Institute:   <span className="text-teal-100 text-2xl pl-2 "> {
          isFetched ? data.ngoLoanDetails.nameOfInstitute : null
        }
        </span>
      </h1>
      <div className="flex justify-center items-center w-full mt-4">
        <Stats data={statsData} />
      </div>
      <form className="flex flex-col w-full md:max-w-2xl mx-auto md:flex-row items-center p-6 gap-4">
        <input
          className="input w-full  input-bordered input-sm  hover:border-teal-500  "
          type="number"
          name="amount"
          onChange={handleChange}
          placeholder="Amount"
        />
        <input
          className="input w-full  input-bordered input-sm  hover:border-teal-500  "
          type="text"
          name="remark"
          onChange={handleChange}
          placeholder="Remark"
        />

        <button className="btn w-full btn-sm md:w-fit bg-teal-700 text-white" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <div>
        <div className="max-w-5xl mx-auto">
          <div className=" bg-teal-700 text-white py-4 mx-1 rounded-t-md  ">
            <tr className="grid grid-cols-3 md:grid-cols-5  items-center justify-center gap-1 text-start ">
              <th>Remark</th>
              <th>Date</th>
              <th>Amount</th>
              <th className="hidden md:block">NGO Loan ID</th>
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

