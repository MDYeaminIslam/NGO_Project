import React, { useState } from "react";
import IncomeNav from "./IncomeNav/IncomeNav";
import { useQuery } from "@tanstack/react-query";
import { getAllIncomeHead } from "../../../api/admin";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const initialState = {
  date: new Date(),
  amount: 0,
};
export default function AddIncomeStatement() {
  const [formData, setFormData] = useState(initialState);

  function handleChangeDate(date) {
    setFormData((prev) => ({ ...prev, date: date }));
  }
  function handleChange(e) {
    const { value } = e.target;
    console.log(value);
    setFormData((prev) => ({ ...prev, amount: Number(value) }));
  }

  return (
    <div>
      {" "}
      <section>
        <IncomeNav />
      </section>
      <section>
        <IncomeStatementSelector />
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

        <div className="flex flex-col gap-1">
          <label className="font-medium" htmlFor="amount">
            Religion:
          </label>
          <input
            onChange={handleChange}
            className="input input-bordered input-sm  hover:border-teal-500"
            id="amount"
            type="number"
            name="amount"
            required
          />
        </div>
      </section>
    </div>
  );
}

function IncomeStatementSelector() {
  const { data } = useQuery({
    queryFn: getAllIncomeHead,
    queryKey: ["income-head"],
    initialData: [],
  });
  function handleChange(e) {
    const { value } = e.target;
    console.log(value);
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
