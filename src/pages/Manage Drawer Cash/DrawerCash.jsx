import { useState } from "react";
import ManageDrawerCashNav from "./ManageDrawerCashNav/ManageDrawerCashNav";

const initialState = {
  
    cashInAmount: "",
    cashOutAmount: "",
    branchName: "",
    samityName: "",
    date: "",
    sourceDetails: "",
    remarks: "",
  
};

const DrawerCash = () => {

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
        <ManageDrawerCashNav/>
      </section>
      <section>
          <section className="m-4">
                        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Drawer Cash</h1>
                        <form className="my-8" >
                            <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">


                                <div className="flex flex-col gap-1">
                                    <label className="font-medium" htmlFor="cash_in_amount">Cash in Amount: </label>
                                    <label className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2">
                                        <input 
                                        type="number" 
                                        id="cash_in_amount" 
                                        name = "cashInAmount"
                                        onChange={handleChange}
                                        className="grow  " placeholder="Enter your amount" />
                              
                                    </label>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="font-medium" htmlFor="cash_out_amount">Cash Out Amount:</label>
                                    <input className="input input-bordered input-sm  hover:border-teal-500  " 
                                    id="cash_out_amount"
                                    name = "cashOutAmount"
                                    onChange={handleChange} 
                                    type="number" 
                                    placeholder="Enter your amount" />
                                </div>

                                <div className="flex flex-col gap-1">
                                  <label className="font-medium " htmlFor="branch_name">Branch Name:</label>
                                  <select 
                                  onChange={handleChange}
                                  name = "branchName"
                                  className=" input input-bordered input-sm hover:border-teal-500 " >
                                    <option disabled defaultValue>Select</option>
                                    <option value="branch_1">Branch 1</option>
                                    <option value="branch_2">Branch 2</option>
                                    <option value="branch_2">Branch 3</option>
                                  </select>
                                </div>

                                <div className="flex flex-col gap-1">
                                  <label className="font-medium " htmlFor="samity_name">Samity Name:</label>
                                  <select 
                                  onChange={handleChange}
                                  name="samityName"
                                  className=" input input-bordered input-sm hover:border-teal-500 " >
                                    <option disabled defaultValue>Select</option>
                                    <option value="samity_1">Samity 1</option>
                                    <option value="samity_1">Samity 2</option>
                                    <option value="samity_1">Samity 3</option>
                                  </select>
                                </div>

                                <div className="flex flex-col gap-1 ">
                                    <label className="font-medium" htmlFor="date">Date:</label>
                                    <input className="input input-bordered input-sm  hover:border-teal-500  " 
                                    id="date"
                                    name = "date"
                                    onChange={handleChange} 
                                    type="date" 
                                    placeholder="" />
                                </div>

                                <div className="flex flex-col gap-1">
                                  <label className="font-medium" htmlFor="source_details">Source Details:</label>
                                  <textarea className="input input-bordered hover:border-teal-500 " 
                                  id="source_details" 
                                  name = "sourceDetails"
                                  onChange={handleChange}
                                  cols="10" rows="1"></textarea>
                                </div>

                                <div className="flex flex-col gap-1">
                                  <label className="font-medium" htmlFor="remarks"> Remarks :</label>
                                  <textarea className="input input-bordered hover:border-teal-500 " 
                                  id="remarks" 
                                  name ="remarks"
                                  onChange={handleChange}
                                  cols="10" rows="1"></textarea>
                                </div>


                            </section>
                            
                            <div className="w-full flex justify-center  mt-12">
                              
                                <button className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" type="submit"
                                onClick={handleSubmit}>
                                  Submit
                                </button>
                            </div>

                        </form>
                    </section>
            </section>
    </div>
  );
};

export default DrawerCash;