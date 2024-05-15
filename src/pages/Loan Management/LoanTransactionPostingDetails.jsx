import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  getLoanTransactionDetailsById,
  payLoanAccount,
} from "../../../api/admin";
import useMutationHook from "../../../hooks/useMutationHook";
import toast from "react-hot-toast";
import { useState } from "react";
const initialData = {
  amount: 0,
  addFineAmount: 0,
  fineReason: "",
  payFineAmount: 0,
};
const LoanTransactionPostingDetails = () => {
  const [formData, setFormData] = useState(initialData);
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: [`loan-transaction-${id}`],
    queryFn: () => getLoanTransactionDetailsById(id),
    initialData: null,
  });
  const { mutate } = useMutationHook(payLoanAccount, {
    key: [`loan-transaction-${id}`],
    onSuccess: () => {
      toast.success("Done");
      console.log();
    },
    onError: () => {
      toast.error("Something went wrong with your transaction");
    },
  });
  function handleChange(e) {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    let data = { ...formData, loanId: id };

    mutate(data);
  }
  // const { transactionDetails , loanAccountDetails} = data
  //   const {
  //   _id: loanAccountId,
  //   memberId,
  //   paymentTerm,
  //   loanAmount,
  //   branchId,
  //   samityId,
  //   profitPercentage,
  //   totalAmount,
  //   numberOfInstallment,
  //   installmentAmount,
  //   openingDate,
  //   expiryDate,
  //   paid,
  //   transactions,
  //   createdAt: loanCreatedAt,
  //   updatedAt: loanUpdatedAt,
  //   __v,
  //   isClosed,
  //   loanFine,
  //   loanFinePaid
  // } = loanAccountDetails;

  //  { _id,
  //   loanId,
  //   amount,
  //   addFineAmount,
  //   fineReason,
  //   payFineAmount,
  //   createdAt} = transactionDetails

  return (
    <>
      {/* Loan Details Section */}
      <section></section>
      {/* Pay Section */}
      <section>
        <h1>{id}</h1>
        <h1>Pay Loan</h1>
        <form>
          <label htmlFor="">Amount</label>
          <input
            onChange={handleChange}
            type="number"
            name="amount"
            className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2"
          />
          <label htmlFor="addFineAmount">Add Fine</label>
          <input
            onChange={handleChange}
            type="number"
            name="addFineAmount"
            className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2"
          />
          <label htmlFor="">Fine Reason</label>
          <input
            onChange={handleChange}
            type="text"
            name="fineReason"
            className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2"
          />
          <label htmlFor="">Pay Fine Amount</label>
          <input
            onChange={handleChange}
            type="number"
            name="payFineAmount"
            className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2"
          />
          <button onClick={handleSubmit}>Add Transaction</button>
        </form>
      </section>
      {/* Transaction Section */}
      {data ? data.transactionDetails.length : 0}
      <section></section>
    </>
  );
};

export default LoanTransactionPostingDetails;
