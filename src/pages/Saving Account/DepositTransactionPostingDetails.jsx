import { useParams } from "react-router-dom";
import SavingAccountNav from "./SavingAccountNav/SavingAccountNav";
import { useQuery } from "@tanstack/react-query";
import {
  depositTransactionList,
  getDepositAccountDetailsById,
  makeDeposit,
  makeWithdraw,
  withdrawTransactionList,
} from "../../../api/admin";
import { SavingAccountPerUserDetails } from "./SavingAccountListDetails";
import { useState } from "react";
import useMutationHook from "../../../hooks/useMutationHook";
import { dateToString } from "../../utils/DateHelper";
import toast from "react-hot-toast";
const initialData = {
  date: new Date(),
  amount: 0,
  id: null,
  description: "",
};
const DepositTransactionPostingDetails = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: [`saving-account-${id}`],
    queryFn: () => getDepositAccountDetailsById(id),
    initialData: [],
    enabled: !!id,
  });
  const { data: transactions } = useQuery({
    queryKey: [`transactions-${id}`],
    queryFn: () => depositTransactionList(id),
    initialData: null,
  });
  const { data: withdraws } = useQuery({
    queryKey: [`withdraws-${id}`],
    queryFn: () => withdrawTransactionList(id),
    initialData: null,
  });

  return (
    <>
      <section>
        <SavingAccountNav />
      </section>
      <section>
        <h1>{id}</h1>
        {data.length ? <SavingAccountPerUserDetails data={data[0]} /> : null}
      </section>
      <section>
        <AddMoney id={id} />
        <WithdrawMoney id={id} />
      </section>
      <section>
        <div className="grid  md:grid-cols-2 ">
          <section>
            <div className="md:m-8">
              <h1 className="md:text-lg md:font-medium mt-3 text-center ">
                Transactions Table
              </h1>
              <div className="divider"></div>
              <table className="w-full  ">
                <tr className="grid grid-cols-3  text-xs md:text-base bg-teal-700  py-4 text-white md:grid-cols-3 items-center justify-center gap-1 text-center">
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Description</th>
                </tr>
                {transactions
                  ? transactions.map((data, idx) => (
                      <TransactionsTable data={data} key={idx} />
                    ))
                  : null}
              </table>
            </div>
          </section>
          <section>
            <div className="md:m-8">
              <h1 className="md:text-lg md:font-medium mt-4 text-center ">
                Withdraws Table
              </h1>
              <div className="divider"></div>
              <table className="w-full  ">
                <tr className="grid grid-cols-2  text-xs md:text-base bg-teal-700  py-4 text-white md:grid-cols-2 items-center justify-center gap-1 text-center">
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
                {withdraws
                  ? withdraws.map((data, idx) => (
                      <WithdrawsTable data={data} key={idx} />
                    ))
                  : null}
              </table>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
function AddMoney({ id }) {
  const [formData, setFormData] = useState(initialData);
  const { mutate } = useMutationHook(makeDeposit, {
    key: [`saving-account-${id}`],
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
    console.log("clicked");
    let data = {
      ...formData,
      id: id,
    };
    mutate(data);
  }
  return (
    <section className="m-4">
      <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2">
        Add Money
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
            <label htmlFor="addFineAmount">Description</label>
            <input
              onChange={handleChange}
              type="text"
              name="description"
              className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2"
            />
          </div>
        </div>

        <div className="w-full flex justify-center  mt-12">
          <button
            className="bg-teal-600 hover:bg-teal-700 px-20 py-2 rounded font-medium  text-white"
            onClick={handleSubmit}
          >
            Add Money
          </button>
        </div>
      </form>
    </section>
  );
}
function WithdrawMoney({ id }) {
  const [formData, setFormData] = useState(initialData);
  const { mutate } = useMutationHook(makeWithdraw, {
    key: [`saving-account-${id}`],
    onError: () => {
      toast.error("wrong");
    },
    onSuccess: () => {
      toast.success("Succ");
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
    let data = {
      ...formData,
      id: id,
    };
    mutate(data);
  }
  return (
    <section className="m-4">
      <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2">
        Withdraw Money
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
            <label htmlFor="addFineAmount">Description</label>
            <input
              onChange={handleChange}
              type="text"
              name="description"
              className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2"
            />
          </div>
        </div>

        <div className="w-full flex justify-center  mt-12">
          <button
            className="bg-teal-600 hover:bg-teal-700 px-20 py-2 rounded font-medium  text-white"
            onClick={handleSubmit}
          >
            WithDraw Money
          </button>
        </div>
      </form>
    </section>
  );
}
function TransactionsTable({ data }) {
  console.log(data);

  const { date, amount, description, _id } = data;

  return (
    <div>
      <tr className="grid grid-cols-3 text-xs md:text-base bg-gray-100  border-b-4   md:grid-cols-3 items-center w-full justify-between text-center py-3">
        <td>{dateToString(date)}</td>
        <td>{amount}</td>
        <td className="hidden md:block">{description}</td>
      </tr>
    </div>
  );
}

function WithdrawsTable({ data }) {
  const { date, amount, description, _id } = data;
  return (
    <div>
      <tr className="grid grid-cols-2 text-xs md:text-base bg-gray-100  border-b-4   md:grid-cols-2 items-center w-full justify-between text-center py-3">
        <td>{dateToString(date)}</td>
        <td>{amount}</td>
      </tr>
    </div>
  );
}

export default DepositTransactionPostingDetails;
