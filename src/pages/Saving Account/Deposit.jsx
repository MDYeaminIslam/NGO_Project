import SavingAccountNav from "./SavingAccountNav/SavingAccountNav";

const Deposit = () => {
  return (
    <div>
      <section>
        <SavingAccountNav />
      </section>

      <section>
        {/* input container */}
        <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Open Deposit Account Form </h1>
          <form className="my-8" >
            <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">


              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="member_id"  >Member Id : </label>
                <label className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2">
                  <input type="text" id="member_id" className="grow  " placeholder="Search" />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="acc_id">Account ID :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="acc_id" type="number" placeholder="Account id" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium " htmlFor="occupation">Status :</label>
                <select className=" input input-bordered input-sm hover:border-teal-500 " >
                  <option>Daily</option>
                  <option >Weekly</option>
                  <option >Fortnightly</option>
                  <option >Monthly</option>
                  <option >Quarterly</option>
                  <option >Half-Yearly</option>
                  <option >Yearly</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="period_of_time">Period of time :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="period_of_time" type="text" placeholder="In months" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="per_installment">Per installment :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="per_installment" type="number" placeholder="money amount" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="profit">Profit :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="profit" type="number" placeholder="%" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="on_mature_amount"> On Mature amount :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="on_mature_amount" type="number" placeholder="500 tk" />
              </div>

              <div className="flex flex-col gap-1 ">
                <label className="font-medium" htmlFor="opening_date"> Opening Date :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="opening_date" type="date" placeholder="" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="mature_date">Mature Date :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="mature_date" type="date" placeholder="" />
              </div>

              <div className="flex flex-col gap-1 col-span-3">
                <label className="font-medium" htmlFor="first_due_date"> First Due Date :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="first_due_date" type="date" placeholder="" />
              </div>

            </section>

            <div className="w-full flex justify-center  mt-8">
              <input className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" type="submit" />
            </div>

          </form>
        </section>
      </section>
    </div>
  );
};

export default Deposit;