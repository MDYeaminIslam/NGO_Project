import { useState } from "react";
import ManageDrawerCashNav from "./ManageDrawerCashNav/ManageDrawerCashNav";


const initialState ={
    branchName: "",
    samityName: "",
    cashInAmount: "",
    cashOutAmount: "",
    bankName: "",
};

const DrawerCashtoBank = () => {

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
                    <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Drawer Cash to Bank</h1>
                    <form className="my-8" >
                        <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">


                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="branch_name"  >Branch Name: </label>
                                <label className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2">
                                    <input type="text" 
                                    id="branch_name" 
                                    name="branchName"
                                    onChange={handleChange}
                                    className="grow  " placeholder="Enter branch name here" />
                                   
                                </label>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="samity_name">Samity Name:</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                                id="samity_name" 
                                name="samityName"
                                onChange={handleChange}
                                type="text" placeholder="Enter samity name here" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="cash_in_amount">Cash in Amount:</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                                id="cash_in_amount"
                                name="cashInAmount"
                                onChange={handleChange} 
                                type="number" placeholder="Enter your amount" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="cash_out_amount">Cash Out Amount:</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                                id="cash_out_amount" 
                                name="cashOutAmount"
                                onChange={handleChange}
                                type="number" placeholder="Enter your amount" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="bank_name">Bank Name:</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                                id="bank_name" 
                                name="bankName"
                                onChange={handleChange}
                                type="text" placeholder="Enter bank name here" />
                            </div>

                        </section>

                        <div className="w-full flex justify-center  mt-12">
                            <button className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" 
                            onClick={handleSubmit}
                            type="submit">
                                Submit
                            </button>
                           
                        </div>

                    </form>
                </section>
            </section>
    </div>
  );
};

export default DrawerCashtoBank;