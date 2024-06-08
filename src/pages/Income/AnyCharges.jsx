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
  const [income, setIncome] = useState({})
  const { mutate, isPending } = useMutationHook(getIncome, {
    onSuccess: (data) => {
      console.log(data.data);
      setIncome(data.data)
    }
  });
  function handleSubmit(event) {
    event.preventDefault();
    mutate(date);
  }
  console.log(income);

  return (
    <div>
      <section>
        <IncomeNav />
      </section>

      <section className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-1 mt-4">
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
          <button className="btn btn-sm w-fit bg-teal-500 text-white hover:bg-teal-700 mx-auto mt-4" onClick={handleSubmit}>Search</button>
        </div>
      </section>
    </div>
  );
};

export default AnyCharges;
