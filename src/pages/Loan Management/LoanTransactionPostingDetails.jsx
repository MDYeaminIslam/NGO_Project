import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  getLoanTransactionDetailsById,
  payLoanAccount,
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
const Mockdata = ({ data }) => {
  const { _id, memberId, paymentTerm, loanAmount, profitPercentage, totalAmount, numberOfInstallment, installmentAmount, openingDate, expiryDate, paid, loanFine, loanFinePaid } = data;
  console.log(installmentAmount);


  return (
    // <div>
    //   <h1>Member Id: {memberId}</h1>
    //   <p>Payment Term: <span>{paymentTerm}</span></p>
    //   <p>Loan Amount: <span>{loanAmount}</span></p>
    //   <p>Profit Percentage: <span>{profitPercentage}</span></p>
    //   <p >Total amount: <span>{totalAmount}</span></p>
    //   <p>Number of Installment: <span>{numberOfInstallment}</span></p>
    //   <p>Installment Amount: <span>{installmentAmount}</span></p>
    //   <p>Opening Date: <span>{openingDate}</span></p>
    //   <p>Expiry Date <span>{expiryDate}</span></p>
    //   <p>Paid: <span>{paid}</span></p>
    //   <p>Loan Fine: <span>{loanFine}</span></p>
    //   <p>Loan Fine Paid: <span>{loanFinePaid}</span></p>
    // </div>
    <div>
      <h1 className='border-b-4 bg-teal-100 text-gray-600 text-lg pl-6 font-medium rounded-b-md pb-2 pt-1 flex items-center gap-2'><span><img className='w-8' src="./../../../public/Admin Dashboard icon/Total members.png" alt="" /></span> User Details</h1>
      <div className=' border-b-4 text-base font-medium tracking-wide divide-y-1 space-y-3 grid grid-cols-1 leading-6 p-6 py-3 bg-teal-50 rounded-b-md '>
        <p className='flex items-center gap-2'><span><img className='w-4' src="/NGO Dashboard icon/Member.png" alt="" /></span> Member Name : <span className='font-normal pl-2'>Mr. Yo </span></p>
        <p className='flex items-center gap-2'> <img className='w-5' src="/NGO Dashboard icon/expense.png" alt="" />Member Id: <span className='font-normal px-2 bg-green-500 text-white rounded'>{memberId}</span></p>
        <p className='flex items-center gap-2'> <img className='w-5' src="./../../../public/NGO Dashboard icon/report.png" alt="" />Payment Term: <span className='font-normal text-white rounded px-2 bg-teal-500'>{paymentTerm}</span></p>
        <p className='flex items-center gap-2'> <img className='w-5' src="./../../../public/NGO Dashboard icon/payroll.png" alt="" />Loan Amount: <span className='font-normal pl-2'>{loanAmount} $</span></p>
        <p className='flex items-center gap-2'> <img className='w-5' src="./../../../public/NGO Dashboard icon/bank-building.png" alt="" />Profit Percentage: <span className='font-normal pl-2'>{profitPercentage} %</span></p>
        <p className='flex items-center gap-2'> <img className='w-5' src="./../../../public/NGO Dashboard icon/manage-drawer-cash.png" alt="" />Total Amount : <span className='font-normal pl-2'>{totalAmount}$</span></p>
        <p className='flex items-center gap-2'> <img className='w-5' src="./../../../public/NGO Dashboard icon/manage-drawer-cash.png" alt="" />Number of Installment : <span className='font-normal pl-2'>{numberOfInstallment}</span></p>
        <p className='flex items-center gap-2'> <img className='w-5' src="./../../../public/NGO Dashboard icon/manage-drawer-cash.png" alt="" />Installment Amount: <span className='font-normal pl-2'>{installmentAmount}</span></p>
        <p className='flex items-center gap-2'> <img className='w-5' src="./../../../public/NGO Dashboard icon/manage-drawer-cash.png" alt="" />Paid: <span className='font-normal pl-2'>{paid}</span></p>
        <p className='flex items-center gap-2'> <img className='w-5' src="./../../../public/NGO Dashboard icon/manage-drawer-cash.png" alt="" />Loan Fine: <span className='font-normal pl-2'>{loanFine}</span></p>
        <p className='flex items-center gap-2'> <img className='w-5' src="./../../../public/NGO Dashboard icon/manage-drawer-cash.png" alt="" />Loan Fine Paid: <span className='font-normal pl-2'>{loanFinePaid}</span></p>
        <div className='flex flex-wrap  gap-4 border-t-2 pt-2'>
          <p className='flex items-center gap-2 '><span><img width="22" height="22" src="https://img.icons8.com/ios/50/calendar--v1.png" alt="calendar--v1" /></span>Opening Date : <span className='font-normal '>{dateToString(openingDate)} </span></p>
          <p className='flex items-center gap-2'><span><img width="22" height="22" src="https://img.icons8.com/ios/50/calendar--v1.png" alt="calendar--v1" /></span>Update Date : <span className='font-normal '>{dateToString(expiryDate)} </span></p>
        </div>
      </div>
    </div>
  )

}


const TransactionDetailsTable = ({ data }) => {
  const { _id, loanId, amount, addFineAmount, fineReason, payFineAmount, createdAt, updatedAt, } = data;


  return (
    // <div>
    //   <p>Hello {_id}</p>
    //   <p>Loan Id: {loanId}</p>
    //   <p>amount: {amount}</p>
    //   <p>Add Fine Amount: {addFineAmount}</p>
    //   <p>Fine Reason: {fineReason}</p>
    //   <p>Pay Fine Amount: {payFineAmount}</p>
    //   <p>Created At: {createdAt}</p>
    //   <p>Updated At: {updatedAt}</p>
    // </div>

    <div className="md:m-8">
     

        <tr className="grid grid-cols-3 text-xs md:text-base bg-gray-100  border-b-4   md:grid-cols-5 items-center w-full justify-between text-center py-3">
          <td>{loanId}</td>
          <td>{amount}</td>
          <td className="hidden md:block">{addFineAmount}</td>
          <td className="hidden md:block">{fineReason}</td>
          <td className="hidden md:block">{dateToString(createdAt)}</td>
 
          {/* <td>
            <Link
              to={`/members_details/${mobileNumber}`}
              className="btn btn-xs md:btn btn-info text-white"
            >
              View
            </Link>
          </td> */}
        </tr>
    </div>



  )
}

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
    console.log(data);
  }


  return (
    <>
      <section>
        <LoanManagementNav />
      </section>
      <section>
        {data ?
          <Mockdata data={data.loanAccountDetails} /> : null
        }
      </section>
      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2">Pay Loan</h1>
        <form >
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

            <button className="bg-teal-600 hover:bg-teal-700 px-20 py-2 rounded font-medium  text-white" onClick={handleSubmit}>Add Transaction</button>
          </div>
        </form>
      </section>
    

      <section>
       
          <table className="w-full mt-12 ">
          <tr className="grid grid-cols-3  text-xs md:text-base bg-teal-700  py-4 text-white md:grid-cols-5 items-center justify-center gap-1 text-center">
            <th>Loan Id</th>
            <th>Amount</th>
            <th>Fine Amount</th>
            <th className="hidden md:block">Fine Reason</th>
            <th className="hidden md:block">Created At</th>
          </tr>
  
          {data ? data.transactionDetails.map((data, idx) => <TransactionDetailsTable key={idx} data={data} />) : null}
         
        </table>
      </section>
    </>
  );
};

export default LoanTransactionPostingDetails;
