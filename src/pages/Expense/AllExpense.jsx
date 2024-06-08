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
  type: "monthly",
};
const AllExpense = () => {
  const [formData, setFormData] = useState(initalState);
  const [expenses, setExpenses] = useState([]);
  const { mutate, isPending } = useMutationHook(getAllExpenses, {
    onSuccess: (data) => {
      setExpenses(data);
      setFormData(initalState);
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
      <section className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-4 my-8 px-4">
        <BranchSamitySelector callBackFn={setFormData} />
        <div className="flex flex-col gap-1">
          <label className="font-medium " htmlFor="payment_term">
            Expense Type:
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

      <section className="px-4">
        {expenses.length ? (
          formData.type === "purchase" ? (
            <section>
              <section>
                <div className="max-w-5xl mx-auto bg-teal-700 text-white py-4 mt-8 ">
                  <tr className="grid grid-cols-5 text-xs md:text-base md:grid-cols-5  items-center justify-center gap-1 text-start">
                    <th>Expense Name</th>
                    <th>Date</th>
                    <th>Total Payment</th>
                    <th>status</th>
                    <th>action</th>
                  </tr>
                </div>
              </section>
              <section>
                {expenses.map((data, idx) => (
                  <Purchase data={data} key={idx} />
                ))}
              </section>
            </section>
          ) : (
            <section>
              <section>
                <div className="max-w-5xl mx-auto bg-teal-700 text-white py-4 mt-8 ">
                  <tr className="text-xs md:text-base  grid grid-cols-3 md:grid-cols-3  items-center justify-center gap-1 text-start">
                    <th>Date</th>
                    <th>Total Bill</th>
                    <th>action</th>
                  </tr>
                </div>
              </section>
              <section>
                {expenses.map((data, idx) => (
                  <Expense data={data} key={idx} />
                ))}
              </section>
            </section>
          )
        ) : null}
      </section>
    </div>
  );
};

export default AllExpense;
