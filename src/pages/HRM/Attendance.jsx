import HRMNav from "./HRMNav/HRMNav";

const Attendance = () => {
  return (
    <div>
      <section>
        <HRMNav/>
      </section>
      
      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Attendance</h1>
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
              <label className="font-medium " htmlFor="status">Status:</label>
              <select id="status" className=" input input-bordered input-sm hover:border-teal-500 " >
                <option>--Select--</option>
                <option>Present</option>
                <option>Absent</option>
              </select>
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

export default Attendance;