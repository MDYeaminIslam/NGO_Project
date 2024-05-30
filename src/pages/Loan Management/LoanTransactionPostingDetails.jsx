import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  getLoanTransactionDetailsById,
  payLoanAccount,
  payLoanFromDepositAccount,
} from "../../../api/admin";
import useMutationHook from "../../../hooks/useMutationHook";
import toast from "react-hot-toast";
import { useState } from "react";
import LoanManagementNav from "./LoanManagementNav/LoanManagementNav";
import { dateToString } from "../../utils/DateHelper";
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
  console.log(data);
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

  return (
    <>
      <section>
        <LoanManagementNav />
      </section>
      <section>
        {data ? <Mockdata data={data.loanAccountDetails} /> : null}
      </section>

      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2">
          Pay Loan
        </h1>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-4 my-8">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Amount</label>
              <input
                onChange={handleChange}
                type="number"
                name="amount"
                className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="addFineAmount">Add Fine</label>
              <input
                onChange={handleChange}
                type="number"
                name="addFineAmount"
                className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="">Fine Reason</label>
              <input
                onChange={handleChange}
                type="text"
                name="fineReason"
                className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="">Pay Fine Amount</label>
              <input
                onChange={handleChange}
                type="number"
                name="payFineAmount"
                className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2"
              />
            </div>
          </div>

          <div className="w-full flex justify-center  mt-12">
            <button
              className="bg-teal-600 hover:bg-teal-700 px-20 py-2 mb-4 rounded font-medium  text-white"
              onClick={handleSubmit}
            >
              Add Transaction
            </button>
          </div>

        </form>

      </section>
      <section>
        {data ? (
          <PayFromDepositAccounts data={data.depositAccounts} loanId={id} />
        ) : null}
      </section>
      <section className="m-10">
        <table className="w-full mt-12 ">
          <tr className="grid grid-cols-3  text-xs md:text-base bg-teal-700  py-4 text-white md:grid-cols-5 items-center justify-center gap-1 text-center">
            <th>Loan Id</th>
            <th>Amount</th>
            <th>Fine Amount</th>
            <th className="hidden md:block">Fine Reason</th>
            <th className="hidden md:block">date</th>
          </tr>

          {data
            ? data.transactionDetails.map((data, idx) => (
              <TransactionDetailsTable key={idx} data={data} />
            ))
            : null}
        </table>
      </section>
    </>
  );
};
const DepositAccountCard = ({ data, callBackFn }) => {
  const { _id, balance } = data;

  return (

    <section>
      <div>
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2">
          Paying from Deposit Account
        </h1>
      </div>

      <div className="border-2 m-10" onClick={() => callBackFn(_id)}>
        <p className="font-bold m-4">Account Id: <span className="font-bold text-emerald-500">{_id}</span></p>
        <p className="font-bold m-4">Total Balance: <span className="font-bold text-emerald-500">{balance}</span></p>
      </div>
    </section>

  );
};
const PayFromDepositAccounts = ({ data, loanId }) => {
  const [amount, setAmount] = useState(0);
  const [id, setId] = useState(null);
  const { mutate } = useMutationHook(payLoanFromDepositAccount, {
    key: [`loan-transaction-${loanId}`],
    onSuccess: () => {
      toast.success("Done");
    },
    onError: (data) => {
      toast.error(data.response.data.message);
    },
  });
  function handleSubmit(e) {
    e.preventDefault();
    const body = {
      depositAccountId: id,
      loanAccountId: loanId,
      amount: amount,
    };
    if (!id) {
      return toast.error("Please Choose A Account");
    }
    mutate(body);
  }

  function handleChange(e) {
    const { value } = e.target;
    setAmount(Number(value));
  }

  return (
    <div>
      {data.map((data, idx) => (
        <DepositAccountCard data={data} key={idx} callBackFn={setId} />
      ))}



      <div className="m-10">
        <div className="flex flex-col gap-1">
          <label htmlFor="">Account ID</label>
          <input
            disabled
            placeholder={id}
            type="number"
            name="acountid"
            className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            name="amount"
            onChange={handleChange}
            className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2"
          />
        </div>

        <div className="w-full flex justify-center  mt-12">
          <button className="bg-teal-600 hover:bg-teal-700 px-20 py-2 rounded font-medium  text-white" onClick={handleSubmit}>Pay From Loan</button>
        </div>



      </div>
    </div>
  );
};
const Mockdata = ({ data }) => {
  const {
    _id,
    memberId,
    paymentTerm,
    loanAmount,
    profitPercentage,
    totalAmount,
    numberOfInstallment,
    installmentAmount,
    openingDate,
    expiryDate,
    paid,
    loanFine,
    loanFinePaid,
  } = data;

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="border-b-4  text-gray-600 text-lg pl-6 font-medium  pb-2 pt-1 flex items-center gap-2">
        <span>
          <img
            className="w-8"
            src="/Admin Dashboard icon/Total members.png"
            alt=""
          />
        </span>{" "}
        User Details
      </h1>
      <div className=" border-b-4 text-base font-medium tracking-wide divide-y-1 space-y-3 grid grid-cols-2 leading-6 p-6 py-3 bg-teal-50 rounded-md ">
        <p className="flex items-center gap-2">
          <span>
            <img className="w-4" src="/NGO Dashboard icon/Member.png" alt="" />
          </span>{" "}
          Member Name : <span className="font-normal pl-2">Mr. Yo </span>
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <img className="w-5" src="/NGO Dashboard icon/expense.png" alt="" />
          Member Id:{" "}
          <span className="font-normal px-2 bg-green-500 text-white rounded">
            {memberId}
          </span>
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <img className="w-5" src="/NGO Dashboard icon/report.png" alt="" />
          Payment Term:{" "}
          <span className="font-normal text-white rounded px-2 bg-teal-500">
            {paymentTerm}
          </span>
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <img className="w-5" src="/NGO Dashboard icon/payroll.png" alt="" />
          Loan Amount: <span className="font-normal pl-2">{loanAmount} </span>
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <img
            className="w-5"
            src="/NGO Dashboard icon/bank-building.png"
            alt=""
          />
          Profit Percentage:{" "}
          <span className="font-normal pl-2">{profitPercentage} %</span>
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <img
            className="w-5"
            src="/NGO Dashboard icon/manage-drawer-cash.png"
            alt=""
          />
          Total Amount : <span className="font-normal pl-2">{totalAmount}</span>
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <img
            className="w-5"
            src="/NGO Dashboard icon/manage-drawer-cash.png"
            alt=""
          />
          Number of Installment :{" "}
          <span className="font-normal pl-2">{numberOfInstallment}</span>
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <img
            className="w-5"
            src="/NGO Dashboard icon/manage-drawer-cash.png"
            alt=""
          />
          Installment Amount:{" "}
          <span className="font-normal pl-2">{installmentAmount}</span>
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <img
            className="w-5"
            src="/NGO Dashboard icon/manage-drawer-cash.png"
            alt=""
          />
          Paid: <span className="font-normal pl-2">{paid}</span>
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <img
            className="w-5"
            src="/NGO Dashboard icon/manage-drawer-cash.png"
            alt=""
          />
          Loan Fine: <span className="font-normal pl-2">{loanFine}</span>
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <img
            className="w-5"
            src="/NGO Dashboard icon/manage-drawer-cash.png"
            alt=""
          />
          Loan Fine Paid:{" "}
          <span className="font-normal pl-2">{loanFinePaid}</span>
        </p>
        <p className="flex items-center gap-2 ">
          <span>
            <img
              width="22"
              height="22"
              src="https://img.icons8.com/ios/50/calendar--v1.png"
              alt="calendar--v1"
            />
          </span>
          Opening Date :{" "}
          <span className="font-normal ">{dateToString(openingDate)} </span>
        </p>
      </div>
    </div>
  );
};

const TransactionDetailsTable = ({ data }) => {
  const {
    _id,
    loanId,
    amount,
    addFineAmount,
    fineReason,
    payFineAmount,
    createdAt,
    updatedAt,
  } = data;

  return (
    <div className="">
      <tr className="px-2 grid grid-cols-3 text-xs md:text-base bg-gray-100  border-b-4   md:grid-cols-5 items-center w-full justify-between text-center py-3">
        <td>{loanId}</td>
        <td>{amount}</td>
        <td className="hidden md:block">{addFineAmount}</td>
        <td className="hidden md:block">{fineReason}</td>
        <td className="hidden md:block">{dateToString(createdAt)}</td>
      </tr>
    </div>
  );
};

export default LoanTransactionPostingDetails;
