import IncomeNav from "./IncomeNav/IncomeNav";
import BranchSamitySelector from "../../component/branchSamitySelector";
import useMutationHook from "../../../hooks/useMutationHook";
import { useState } from "react";
import { getIncome } from "../../../api/admin";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const initalState = {
  date: new Date(),
};

const AnyCharges = () => {
  const [date, setDate] = useState(new Date());
  const { mutate, isPending } = useMutationHook(getIncome);
  function handleSubmit(event) {
    event.preventDefault();
    mutate(date);
  }

  return (
    <div>
      <section>
        <IncomeNav />
      </section>

      <div className="flex flex-col gap-1">
        <label className="font-medium" htmlFor="membership_fee ">
          Select Date:
        </label>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          className="input input-bordered input-sm  hover:border-teal-500 w-full"
          dateFormat="dd/MM/yyyy"
          required
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
};

export default AnyCharges;
