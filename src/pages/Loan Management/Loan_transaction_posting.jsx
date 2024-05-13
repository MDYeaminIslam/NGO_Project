import LoanManagementNav from "./LoanManagementNav/LoanManagementNav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import {
  makeDeposit,
  payLoanAccount,
  searchLoanAccount,
} from "../../../api/admin";
import toast from "react-hot-toast";
import { IconSearch } from "../../../icons/icons";
import { MoonLoader } from "react-spinners";
import useMutationHook from "../../../hooks/useMutationHook";

const Loan_transaction_posting = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loanAccounts, setLoanAccounts] = useState([]);
  const [userPhoneNumber, setUserPhoneNumber] = useState(null);
  const { mutate, isSuccess, isError, errorMessage, isPending } =
    useMutationHook(searchLoanAccount, {
      onSuccess: (data) => {
        console.log("su");
        const { userDetails, loanAccounts } = data[0];
        setLoanAccounts(loanAccounts);
        setUserDetails(userDetails);
      },
      onError: () => {
        toast.error("No Data Found");
      },
    });
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setUserPhoneNumber(value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    mutate(userPhoneNumber);
  }
  console.log(userDetails);
  // 01679806197
  return (
    <div>
      <section>
        <LoanManagementNav />
      </section>

      <section>
        <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
            Transaction Posting
          </h1>
          <input
            type="number"
            name="phoneNumber"
            className="input input-bordered input-sm  hover:border-teal-500  "
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Serach</button>
        </section>
        <section>{isSuccess ? <h1>{userDetails.name}</h1> : null}</section>
      </section>
    </div>
  );
};

export default Loan_transaction_posting;
