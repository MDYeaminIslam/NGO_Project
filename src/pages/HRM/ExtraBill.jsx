import HRMNav from "./HRMNav/HRMNav";

const ExtraBill = () => {
  return (
    <div>
      <section>
        <HRMNav/>
      </section>

      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Extra Bill</h1>
        <form className="my-8" action="">
          <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

          <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="employee_id">Employee Id:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="employee_id" type="text" placeholder="Enter your id here" />
          </div>

          <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="date">Date:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="date" type="date" placeholder=""/>
          </div>

          <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="paying_amount">Paying Amount:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500" id="paying_amount" type="number" placeholder="Enter your amount"/>
          </div>

          <div className="flex flex-col gap-1">
              <label className="font-medium " htmlFor="reason">Reason:</label>
              <select id="reason" className=" input input-bordered input-sm hover:border-teal-500 " >
                <option>--Select--</option>
                <option>Tour Bill</option>
                <option>Overtime</option>
                <option>Special Award</option>
                <option>Bonus</option>
                <option>Others</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="grant_amount">Grant Amount:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500" id="grant_amount" type="number" placeholder="Enter your total amount"/>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="adjustment_duration">Adjustment Duration:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="adjustment_duration" type="date" placeholder=""/>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="adjustment_amount">Adjustment Amount:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500" id="adjustment_amount" type="number" placeholder="Enter your amount"/>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="starting_month">Starting Month:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500" id="starting_month" type="date" placeholder=""/>
            </div>

            


          </section>
          
        </form>

        <div className="w-full flex justify-center  mt-12">
          <input className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" type="submit" />
        </div>

      </section>
      
    </div>
  );
};

export default ExtraBill;