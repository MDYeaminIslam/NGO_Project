import ManageBankCashNav from "./ManageBankCashNav/ManageBankCashNav";

const BankCashtoDrawer = () => {
  return (
    <div>
      <section>
        <ManageBankCashNav />
      </section>

      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Bank Cash to Drawer</h1>
        <form className="my-8" >
          <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="cash_in_amount">Cash In Amount :</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="cash_in_amount" type="text" placeholder="enter cash in amount" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="cash_out_amount">Cash Out Amount :</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="cash_out_amount" type="text" placeholder="enter cash out amount" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="bank_name">Bank Name :</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="bank_name" type="text" placeholder="enter bank name" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium " htmlFor="branch_name">Branch Name :</label>
              <select className=" input input-bordered input-sm hover:border-teal-500 " >
                <option >branch 1</option>
                <option >branch 2</option>
                <option >branch 3</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium " htmlFor="branch_name">Samity Name :</label>
              <select className=" input input-bordered input-sm hover:border-teal-500 " >
                <option >samity 1</option>
                <option >samity 2</option>
                <option >samity 3</option>
              </select>
            </div>


            <div className="flex flex-col gap-1 ">
              <label className="font-medium" htmlFor="date"> Date :</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="date" type="date" placeholder="" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="source_details">Source Details :</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="source_details" type="text" placeholder="enter source details" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="remarks">Remarks :</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="remarks" type="text" placeholder="" />
            </div>


          </section>

        </form>

        <div className="w-full flex justify-center  m-8">
          <input className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" type="submit" />
        </div>
      </section>
    </div>
  );
};

export default BankCashtoDrawer;