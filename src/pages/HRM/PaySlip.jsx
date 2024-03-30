import HRMNav from "./HRMNav/HRMNav";

const PaySlip = () => {
  return (
    <div>
      <section>
        <HRMNav />
      </section>

      <section>
        <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 "> Addition : </h1>
          <form className="my-8" >
            <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="employee_id">Employee ID :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="employee_id" type="number" placeholder="enter your id" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="basic_salary">Basic Salary :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="basic_salary" type="text" placeholder="enter your basic salary" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="mobile_bill">Mobile Bill :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="mobile_bill" type="text" placeholder="enter your mobile bill" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="tour_bill">Tour Bill :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="tour_bill" type="text" placeholder="enter your tour bill" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="overtime">Overtime :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="overtime" type="text" placeholder="enter your overtime" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="special_award">Special Award :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="special_award" type="text" placeholder="" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="bonus">Bonus :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="bonus" type="text" placeholder="" />
              </div>

            </section>

          </form>

        </section>

        <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 "> Deduction : </h1>
          <form className="my-8" >
            <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="advance">Advance :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="advance" type="text" placeholder="enter advance" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="ait">AIT :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="ait" type="text" placeholder="enter AIT" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="provident fund">Provident Fund :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="provident_fund" type="text" placeholder="" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="absent">Absent :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="absent" type="text" placeholder="" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="others">Others :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="others" type="text" placeholder="" />
              </div>

            </section>

            <div className="w-fit mx-auto flex justify-center  m-8">
              <input className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" type="submit" />
            </div>

          </form>

        </section>

        <div className="flex gap-6 justify-center items-center mt-6   col-span-2">
          
          <div className="flex w-fit mt-8">
            <button className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" >Save</button>
          </div>
          <div className=" flex w-fit  mt-8">
            <button className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" >Save and Print</button>
          </div>
        </div>

      </section>



    </div>
  );
};

export default PaySlip;