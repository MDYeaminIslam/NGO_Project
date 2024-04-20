import { useState } from "react";
import HRMNav from "./HRMNav/HRMNav";

const initialState={
  addition: {
    employyeId: "",
    basicSalary: "",
    mobileBill: "",
    tourBill: "",
    overTime: "",
    specialAward: "",
    bonus: "",
  },
  deduction: {
    advance: "",
    ait: "",
    providentFund: "",
    absent: "",
    others: "",
  },
};

const PaySlip = () => {

  const [getFormData, setFormData] = useState(initialState);
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (event,buttonAction) => {
    event.preventDefault();
    console.log(getFormData);
    if (buttonAction === "save") {
      console.log("Saved");
    } else if (buttonAction === "saveAndPrint") {
      console.log("Saved and printed");
    }
    window.print();
    setFormData();
  };

  return (
    <div>
      <section>
        <HRMNav />
      </section>

      <section>
        <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 "> Addition</h1>
          <form className="my-8" >
            <section className="grid  grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-4">

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="employee_id">Employee ID :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="employee_id" 
                name = "employeeId"
                onChange={handleChange}
                type="number" placeholder="enter your id" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="basic_salary">Basic Salary :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="basic_salary" 
                name = "basicSalary"
                onChange={handleChange}
                type="text" placeholder="enter your basic salary" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="mobile_bill">Mobile Bill :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="mobile_bill" 
                name = "mobileBill"
                onChange={handleChange}
                type="text" placeholder="enter your mobile bill" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="tour_bill">Tour Bill :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="tour_bill" 
                name = "tourBill"
                onChange={handleChange}
                type="text" placeholder="enter your tour bill" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="overtime">Overtime :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="overtime" 
                name = "overtime"
                onChange={handleChange}
                type="text" placeholder="enter your overtime" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="special_award">Special Award :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="special_award" 
                name = "specialAward"
                onChange={handleChange}
                type="text" placeholder="" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="bonus">Bonus :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="bonus" 
                name = "bonus"
                onChange={handleChange}
                type="text" placeholder="" />
              </div>

            </section>

          </form>

        </section>

        <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 "> Deduction</h1>
          <form className="my-8" >
            <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="advance">Advance :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="advance" 
                name = "advance"
                onChange={handleChange}
                type="text" placeholder="enter advance" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="ait">AIT :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="ait"
                name = "ait"
                onChange={handleChange} 
                type="text" placeholder="enter AIT" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="provident fund">Provident Fund :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="provident_fund" 
                name = "providentFund"
                onChange={handleChange}
                type="text" placeholder="" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="absent">Absent :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="absent" 
                name = "absent"
                onChange={handleChange}
                type="text" placeholder="" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="others">Others :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="others" 
                name = "others"
                onChange={handleChange}
                type="text" placeholder="" />
              </div>

            </section>

            <div className="w-fit mx-auto flex justify-center  m-8">
              <button className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" 
              onClick={handleSubmit}
              type="submit" >
                Submit
              </button>
              
            </div>

          </form>

        </section>

        <div className="flex gap-6 justify-center items-center mt-6   col-span-2">
          
          <div className="flex w-fit mt-8">
            <button className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" 
            onClick={(e) => handleSubmit(e, "save")} >
              Save
            </button>
          </div>
          <div className=" flex w-fit  mt-8">
            <button className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" onClick={(e) => handleSubmit(e, "saveAndPrint")}>
              Save and Print
            </button>
          </div>
        </div>

      </section>



    </div>
  );
};

export default PaySlip;