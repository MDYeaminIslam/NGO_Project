import { useState } from "react";
import BranchSamitySelector from "../../component/branchSamitySelector";
import ExpenseNav from "./ExpenseNav/ExpenseNav";
import { getAllExpenses } from "../../../api/admin";
import useMutationHook from "../../../hooks/useMutationHook";
import Purchase from "../../component/Purchase";
import Expense from "../../component/Expense";
const initalState = {
  branchId: null,
  samityId: null,
  type: null,
};
const AllExpense = () => {
  const [formData, setFormData] = useState(initalState);
  const [expenses, setExpenses] = useState([]);
  const { mutate, isPending } = useMutationHook(getAllExpenses, {
    onSuccess: (data) => {
      setExpenses(data);
    },
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    mutate(formData);
  }
  return (
    <div>
      <section>
        <ExpenseNav />
      </section>

      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
          All Expense{" "}
        </h1>
      </section>
      <section className="p-4 grid gap-1 grid-cols-3 ">
        <BranchSamitySelector callBackFn={setFormData} />
        <div className="flex flex-col gap-1">
          <label className="font-medium " htmlFor="payment_term">
            Expense Type :
          </label>
          <select
            onChange={handleChange}
            name="type"
            className=" input input-bordered input-sm hover:border-teal-500 "
          >
            <option disabled>Select a Value</option>
            <option value="monthly">Monthly</option>
            <option value="purchase">Purchase</option>
          </select>
        </div>
      </section>
      <div className="w-fit mx-auto">
        <button
          className="bg-teal-600 hover:bg-teal-700 px-20 py-2 rounded font-medium text-white "
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
      <section>
        {formData.type
          ? formData.type === "purchase"
            ? expenses.map((data, idx) => <Purchase data={data} key={idx} />)
            : expenses.map((data, idx) => <Expense data={data} key={idx} />)
          : null}
      </section>
    </div>
  );
};

export default AllExpense;
