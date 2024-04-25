import BranchSamitySelector from "../../component/branchSamitySelector";
import ExpenseNav from "./ExpenseNav/ExpenseNav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useMemo, useState } from "react";
import { createPurchaseExpense } from "../../../api/admin";
import useMutationHook from "../../../hooks/useMutationHook";
import toast from "react-hot-toast";

const initialState = {
  branchId: "",
  samityId: "",
  date: "",
  expenseName: "",
  description: "",
  unitAmount: 0,
  unitPrice: 0,
  tds: 0,
  tax: 0,
  vat: 0,
  status: "paid",
  remarks: "",
  totalPayment: 0,
};

const Purchase = () => {
  const [formData, setFormData] = useState(initialState);
  const { mutate, isSuccess, isError, errorMessage, isPending } =
    useMutationHook(createPurchaseExpense, {
      onSuccess: () => {
        toast.success("Purchase added successfully!");
      },
    });
  const totalPayment = useMemo(() => {
    const productCost = formData.unitAmount * formData.unitPrice;
    const total =
      productCost +
      (productCost * formData.tds) / 100 +
      (productCost * formData.vat) / 100 +
      (productCost * formData.tax) / 100;
    setFormData((prev) => ({ ...prev, totalPayment: total }));
    return total;
  }, [
    formData.unitAmount,
    formData.unitPrice,
    formData.tds,
    formData.vat,
    formData.tax,
  ]);
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
          Open Purchase Form{" "}
        </h1>
        <form className="my-8">
          <section className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-4">
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
              <label className="font-medium" htmlFor="expense_name">
                Expense Name:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="expense_name"
                name="expenseName"
                onChange={handleChange}
                type="text"
                placeholder="type expense name here"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="description">
                Description:
              </label>
              <textarea
                className="input input-bordered hover:border-teal-500 "
                id="description"
                name="description"
                onChange={handleChange}
                cols="10"
                rows="1"
              ></textarea>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="unit_amount">
                Unit Amount:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="unit_amount"
                name="unitAmount"
                onChange={handleChange}
                type="number"
                placeholder="type unit amount here"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="unit_price">
                Unit Price:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="unit_price"
                name="unitPrice"
                onChange={handleChange}
                type="number"
                placeholder="Enter unit price here"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="tds">
                TDS:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="tds"
                name="tds"
                onChange={handleChange}
                type="number"
                placeholder="Enter TDS amount here"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="tax">
                TAX:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="tax"
                name="tax"
                onChange={handleChange}
                type="number"
                placeholder="Enter TAX amount here"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="vat">
                VAT:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="vat"
                name="vat"
                onChange={handleChange}
                type="number"
                placeholder="Enter VAT amount here"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="totalPayment">
                Total Payment:
              </label>
              <input
                className="input input-bordered input-sm  hover:border-teal-500  "
                id="totalPayment"
                type="number"
                value={formData.totalPayment}
                disabled
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium " htmlFor="status">
                Status:
              </label>
              <select
                id="status"
                name="status"
                onChange={handleChange}
                className=" input input-bordered input-sm hover:border-teal-500 "
              >
                <option disabled defaultValue>
                  --Select--
                </option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
              </select>
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
              onClick={handleSubmit}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Purchase;
