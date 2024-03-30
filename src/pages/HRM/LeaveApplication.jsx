import HRMNav from "./HRMNav/HRMNav";

const LeaveApplication = () => {
  return (
    <div>
      <section>
        <HRMNav />
      </section>

      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 "> Leave Application </h1>
        <form className="my-8" >
          <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="employee_id">Employee ID :</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="employee_id" type="number" placeholder="enter your phone number" />
            </div>

            <div className="flex flex-col gap-1 ">
              <label className="font-medium" htmlFor="date"> Date :</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="date" type="date" placeholder="" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="praying_leave">Praying Leave :</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="praying_leave" type="text" placeholder="how many days" />
            </div>


            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="reason"> Reason :</label>
              <textarea className="input input-bordered hover:border-teal-500 " id="reason" cols="10" rows="1"></textarea>
            </div>

          </section>

        </form>

        <div className="flex gap-6 justify-center items-center mt-6   col-span-2">
          <label className="font-medium pt-10" htmlFor="grant_leave">Grant Leave:</label>
          <div className="flex w-fit mt-8">
            <button className="bg-green-500 hover:bg-green-700 px-10 py-2 rounded font-medium     text-white" >Accept</button>
          </div>
          <div className=" flex w-fit  mt-8">
            <button className="bg-red-500 hover:bg-red-700 px-10 py-2 rounded font-medium     text-white" >Reject</button>
          </div>
        </div>

      </section>
    </div>
  );
};

export default LeaveApplication;