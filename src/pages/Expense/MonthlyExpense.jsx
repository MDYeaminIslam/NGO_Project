import ExpenseNav from "./ExpenseNav/ExpenseNav";

const MonthlyExpense = () => {
  return (
    <div>
      <section>
        <ExpenseNav />
      </section>
      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Monthly Expense </h1>
        <form className="my-8" action="">
          <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

            <div className="flex flex-col gap-1">
              <label className="font-medium " htmlFor="branch_name">Branch Name:</label>
              <select id="branch_name" className=" input input-bordered input-sm hover:border-teal-500 " >
                <option>dummy text</option>
                <option >dummy text</option>
                <option >dummy text</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium " htmlFor="samity_name">Samity Name:</label>
              <select id="samity_name" className=" input input-bordered input-sm hover:border-teal-500 " >
                <option>dummy text</option>
                <option >dummy text</option>
                <option >dummy text</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="date">Date:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="date" type="date" placeholder="" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="office_rent">Office Rent:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="office_rent" type="number" placeholder="Tk" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="salary">Salary:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="salary" type="number" placeholder="Tk" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="stationery">Stationery & Printing:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="stationery" type="text" placeholder="Type here" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="ta/da">TA/DA Allowances:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="ta/da" type="text" placeholder="Enter TA/DA here" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="bill">Any Bill:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="bill" type="text" placeholder="Enter any bill here" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="tax_capital">TAX Capital:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="tax_capital" type="number" placeholder="Enter TAX capital amount here" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="remarks"> Remarks :</label>
              <textarea className="input input-bordered hover:border-teal-500 " id="remarks" cols="10" rows="1"></textarea>
            </div>

          </section>
          <div className="w-full flex justify-center  mt-12">
            <input className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" type="submit" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default MonthlyExpense;