import BranchSamitySelector from "../../component/branchSamitySelector";
import ExpenseNav from "./ExpenseNav/ExpenseNav";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useMutationHook from "../../../hooks/useMutationHook";
import toast from "react-hot-toast";
import { addMonthlyExpense } from "../../../api/admin";

const initialState = {
  branchId: "",
  samityId: "",
  date: "",
  officeRent: "",
  salary: "",
  stationaryAndPrinting: "",
  taDaAllowances: "",
  anyBill: "",
  remarks: "",
};

const MonthlyExpense = () => {
  const [formData, setFormData] = useState(initialState);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleChangeDate = (date) => {
    setFormData((prev) => ({
      ...prev,
      date: new Date(date),
    }));
  };

  const { mutate, isSuccess, isError, errorMessage, isPending } =
    useMutationHook(addMonthlyExpense, {
      onSuccess: () => {
        toast.success("Employee added successfully!");
      },
    });
  const handleSubmit = (event) => {
    event.preventDefault();
    mutate(formData);
  };
  useEffect(() => {
    setFormData((prev) => ({ ...prev, date: new Date() }));
  }, []);
  return (
    <div>
      <section>
        <ExpenseNav />
      </section>
      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
          Monthly Expense{" "}
        </h1>
        <form className="my-8" action="">
          <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">
            <BranchSamitySelector callBackFn={setFormData} />
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="date">
                Date(DD/MM/YYYY):
              </label>
              <DatePicker
                selected={formData.date}
                onChange={handleChangeDate}
                className="border-2 hover:border-teal-500 rounded "
                dateFormat="dd/MM/yyyy"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="office_rent">
                Office Rent:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="office_rent"
                name="officeRent"
                onChange={handleChange}
                type="number"
                placeholder="Tk"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="salary">
                Salary:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="salary"
                name="salary"
                onChange={handleChange}
                type="number"
                placeholder="Tk"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="stationery">
                Stationery & Printing:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="stationery"
                name="stationaryAndPrinting"
                onChange={handleChange}
                type="number"
                placeholder="Type here"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="ta/da">
                TA/DA Allowances:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="ta/da"
                name="taDaAllowances"
                onChange={handleChange}
                type="number"
                placeholder="Enter TA/DA here"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="bill">
                Any Bill:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="bill"
                name="anyBill"
                onChange={handleChange}
                type="number"
                placeholder="Enter any bill here"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="remarks">
                {" "}
                Remarks :
              </label>
              <textarea
                className="input input-bordered hover:border-teal-500 "
                id="remarks"
                name="remarks"
                onChange={handleChange}
                cols="10"
                rows="1"
              ></textarea>
            </div>
          </section>
          {isError ? errorMessage : null}
          <div className="w-full flex justify-center  mt-12">
            <button
              className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default MonthlyExpense;
