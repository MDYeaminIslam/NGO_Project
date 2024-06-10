import { useMemo, useState } from "react";
import LoanManagementNav from "./LoanManagementNav/LoanManagementNav";
import useMutationHook from "../../../hooks/useMutationHook";
import { ngoLoansCreate } from "../../../api/admin";
import toast from "react-hot-toast";
const initialState = {
  institute: "organization",
  nameOfInstitute: null,
  durationInMonth: 0,
  interestRate: 0,
  amount: 0,
  totalAmount: 0,
  perInstallment: 0,
  date: new Date(),
  remark: "",
};
const LoanReceivedMoney = () => {
  const [formData, setFormData] = useState(initialState);
  const { mutate, isError, errorMessage } = useMutationHook(ngoLoansCreate, {
    key: ["ngo-loan"],
    onSuccess: () => {

      {/**Rafi */ }
      setFormData(initialState);
      swal("Received Loan Money Successfully!");
    },
  });
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    console.log(name, value);
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };
  function handleSubmit(e) {
    e.preventDefault();
    mutate(formData);
  }
  const totalAmount = useMemo(() => {
    const profit = formData.amount * (formData.interestRate / 100);
    const totalAmount = formData.amount + profit;
    const perInstallment = totalAmount / formData.durationInMonth;
    console.log(profit, totalAmount);
    setFormData((prev) => ({ ...prev, totalAmount, perInstallment }));
  }, [formData.durationInMonth, formData.interestRate, formData.amount]);
  return (
    <div>
      <section>
        <LoanManagementNav />
      </section>

      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
          {" "}
          Loan Received Money
        </h1>
        <form className="my-8">
          <section className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-4">
            <div className="flex flex-col gap-1">
              <label
                className="font-medium "
                htmlFor="financial_institute_type"
              >
                Financial Institute Type:
              </label>
              <select
                name="institute"
                onChange={handleChange}
                className=" input input-bordered input-sm hover:border-teal-500 "
              >
                <option value="organization">Organization</option>
                <option value="bank">Bank</option>
                <option value="another">Another Financial Institute</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="name_of_the_institute">
                Name of the Institute:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="name_of_the_institute"
                type="text"
                name="nameOfInstitute"
                onChange={handleChange}
                placeholder="enter name of the institute"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="duration_of_month">
                Duration of Month:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="duration_of_month"
                type="number"
                name="durationInMonth"
                placeholder="enter number of month"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="rate">
                Rate (%):
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="rate"
                type="number"
                name="interestRate"
                placeholder="%"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="amount">
                Amount:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="amount"
                type="number"
                name="amount"
                placeholder="enter amount"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="amount">
                Total Amount:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="amount"
                value={formData.totalAmount}
                disabled
                placeholder="enter amount"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="amount">
                Per Installment:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="amount"
                value={formData.perInstallment}
                disabled
                placeholder="enter amount"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="reason">
                {" "}
                Remark:
              </label>
              <textarea
                className="input input-bordered hover:border-teal-500 "
                id="remark"
                cols="10"
                rows="1"
                name="remark"
                onChange={handleChange}
              ></textarea>
            </div>
          </section>
        </form>
        {isError ? errorMessage : null}

        <div className="w-fit mx-auto  m-8">
          <button
            onClick={handleSubmit}
            className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white"
          >
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default LoanReceivedMoney;
