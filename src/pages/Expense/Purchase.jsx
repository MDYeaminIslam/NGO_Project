import ExpenseNav from "./ExpenseNav/ExpenseNav";
import { useState } from "react";

const initialState = {
  branchName: "",
  samityName: "",
  date: "",
  expenseName: "",
  description: "",
  unitAmount: "",
  unitPrice: "",
  tds: "",
  tax: "",
  vat: "",
  status: "",
  remarks: "",

};

const Purchase = () => {

  const [getFormData, setFormData] = useState(initialState);
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(getFormData);
    setFormData();
  };

  return (
    <div>
      <section>
        <ExpenseNav />
      </section>
      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Open Purchase Form </h1>
        <form className="my-8" >
          <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

            <div className="flex flex-col gap-1">
              <label className="font-medium " htmlFor="branch_name">Branch Name:</label>
              <select 
              id="branch_name" 
              name = "branchName"
              onChange={handleChange}
              className=" input input-bordered input-sm hover:border-teal-500 " >
                <option disabled defaultValue>--Select--</option>
                <option value="Branch_1">dummy text</option>
                <option value="Branch_2">dummy text</option>
                <option value="Branch_3">dummy text</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium " htmlFor="samity_name">Samity Name:</label>
              <select 
              id="samity_name"
              name="samityName"
              onChange={handleChange} 
              className=" input input-bordered input-sm hover:border-teal-500 " >
                <option disabled defaultValue>--Select--</option>
                <option value="Samity_1">dummy text</option>
                <option value="Samity_2">dummy text</option>
                <option value="Samity_3">dummy text</option>
              </select>
            </div>

            {/* <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="samity_name">Samity Name:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="samity_name" type="number" placeholder="enter samity name here" />
            </div> */}

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="date">Date:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " 
              id="date" 
              name="date"
              onChange={handleChange}
              type="date" 
              placeholder="" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="expense_name">Expense  Name:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " 
              id="expense_name"
              name="expenseName"
              onChange={handleChange} 
              type="text" 
              placeholder="type expense name here" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="description">Description:</label>
              <textarea className="input input-bordered hover:border-teal-500 " id="description" 
              name="description"
              onChange={handleChange}
              cols="10" rows="1"></textarea>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="unit_amount">Unit Amount:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " 
              id="unit_amount" 
              name="unitAmount"
              onChange={handleChange}
              type="number" 
              placeholder="type unit amount here" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="unit_price">Unit Price:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " 
              id="unit_price"
              name="unitPrice"
              onChange={handleChange} 
              type="number" 
              placeholder="Enter unit price here" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="tds">TDS:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " 
              id="tds" 
              name="tds"
              onChange={handleChange}
              type="number" 
              placeholder="Enter TDS amount here" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="tax">TAX:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " 
              id="tax" 
              name="tax"
              onChange={handleChange}
              type="number" 
              placeholder="Enter TAX amount here" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="vat">VAT:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " 
              id="vat" 
              name="vat"
              onChange={handleChange}
              type="number" 
              placeholder="Enter VAT amount here" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium " htmlFor="status">Status:</label>
              <select 
              id="status" 
              name="status"
              onChange={handleChange}
              className=" input input-bordered input-sm hover:border-teal-500 " >
                <option disabled defaultValue>--Select--</option>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="remarks"> Remarks :</label>
              <textarea className="input input-bordered hover:border-teal-500 " id="remarks" 
              name="remarks"
              onChange={handleChange}
              cols="10" rows="1"></textarea>
            </div>

          </section>

          <div className="w-full flex justify-center  mt-12">
            <button className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" 
            onClick={handleSubmit}
            type="submit">
              Submit
            </button>
          
          </div>

        </form>
      </section>
    </div>
  );
};

export default Purchase;