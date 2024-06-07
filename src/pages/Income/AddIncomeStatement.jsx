import React, { useState } from "react";
import IncomeNav from "./IncomeNav/IncomeNav";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createIncomeHeadTransaction,
  getAllIncomeHead,
} from "../../../api/admin";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useMutationHook from "../../../hooks/useMutationHook";
import toast from "react-hot-toast";
const initialState = {
  headId: "",
  date: new Date(),
  amount: "",
};
export default function AddIncomeStatement() {
  const [formData, setFormData] = useState(initialState);
  const { mutate } = useMutationHook(createIncomeHeadTransaction, {
    onSuccess: () => {
      toast.success("Done!");
    },
  });

  function handleChangeDate(date) {
    setFormData((prev) => ({ ...prev, date: date }));
  }
  function handleChange(e) {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, amount: Number(value) }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    mutate(formData);
  }

  return (
    <div>
      {" "}
      <section>
        <IncomeNav />
      </section>
      <section className="grid grid-cols-2 items-center justify-center gap-4 max-w-5xl mx-auto p-4">
        <div><IncomeStatementSelector callbackFn={setFormData} /></div>
        <div className="flex flex-col gap-1">
          <label className="font-medium" htmlFor="membership_fee ">
            DOB (DD/MM/YYYY):
          </label>
          <DatePicker
            selected={formData.date}
            onChange={handleChangeDate}
            className="input input-bordered input-sm  hover:border-teal-500 w-full"
            dateFormat="dd/MM/yyyy"
            required
          />
        </div>

        <div className="flex flex-col gap-1 col-span-2">
          <label className="font-medium" htmlFor="amount">
            Amount:
          </label>
          <input
            onChange={handleChange}
            className="input input-bordered input-sm  hover:border-teal-500"
            id="amount"
            type="number"
            name="amount"
            value={formData.amount}
          />
        </div>

      </section>
      <div className=" max-w-5xl mx-auto p-4 flex items-center justify-center">
        <button className="btn  btn-sm hover:bg-teal-400 bg-teal-700 text-white" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

function IncomeStatementSelector({ callbackFn }) {
  const { data } = useQuery({
    queryFn: getAllIncomeHead,
    queryKey: ["income-head"],
    initialData: [],
  });
  function handleChange(e) {
    const { value } = e.target;
    callbackFn((prev) => ({ ...prev, headId: value }));
  }
  return (
    <>
      <div className="flex flex-col gap-1 w-full">
        <label className="font-medium" htmlFor="name">
          Head:
        </label>
        <select
          onChange={handleChange}
          className="input input-bordered input-sm hover:border-teal-500"
        >
          {data.length ? <option selected>Select Samity</option> : null}
          {data?.map((income) => (
            <option key={income._id} value={income._id}>
              {income.head}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
