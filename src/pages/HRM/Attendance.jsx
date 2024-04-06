import { useState } from "react";
import HRMNav from "./HRMNav/HRMNav";

const initialState ={
  employeeId: "",
  date: "",
  status: "",
};

const Attendance = () => {

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
        <HRMNav/>
      </section>
      
      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Attendance</h1>
        <form className="my-8" action="">
          <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

          <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="employee_id">Employee Id:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " 
              id="employee_id" 
              name="employeeId"
              onChange={handleChange}
              type="text" placeholder="Enter your id here" />
          </div>

          <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="date">Date:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " 
              id="date" 
              name="date"
              onChange={handleChange}
              type="date" placeholder=""/>
          </div>

          <div className="flex flex-col gap-1">
              <label className="font-medium " htmlFor="status">Status:</label>
              <select 
              name="status"
              onChange={handleChange}
              id="status" className=" input input-bordered input-sm hover:border-teal-500 " >
                <option disabled defaultValue>--Select--</option>
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
              </select>
            </div>

          </section>
          
        </form>

        <div className="w-full flex justify-center  mt-12">
          <button  className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" 
          onClick={handleSubmit}
          type="submit">
            Submit
          </button>
   
        </div>

      </section>
    </div>
  );
};

export default Attendance;