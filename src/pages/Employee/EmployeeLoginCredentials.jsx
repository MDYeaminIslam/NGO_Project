import EmployeeNav from "./EmployeeNav/EmployeeNav";
import { useState } from "react";

const initialState ={
    employeeName: "",
    id: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
};


const EmployeeLoginCredentials = () => {

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
                <EmployeeNav />
            </section>

            <section className="m-4">
                <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Employee Login Credentials </h1>
                <form className="my-8" >
                    <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

                        <div className="flex flex-col gap-1">
                            <label className="font-medium" htmlFor="employee_name">Employee Name :</label>
                            <input className="input input-bordered input-sm  hover:border-teal-500  " 
                            id="employee_name" 
                            name = "employeeName"
                            onChange={handleChange}
                            type="text" placeholder="enter your name" />
                        </div>

                        <div className="flex flex-col gap-1 ">
                            <label className="font-medium" htmlFor="id"> ID :</label>
                            <input className="input input-bordered input-sm  hover:border-teal-500  " 
                            id="id" 
                            name = "id"
                            onChange={handleChange}
                            type="text" placeholder="enter your id" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium" htmlFor="phone_number">Phone Number :</label>
                            <input className="input input-bordered input-sm  hover:border-teal-500  " 
                            id="phone_number" 
                            name = "phoneNumber"
                            onChange={handleChange}
                            type="text" placeholder="" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium" htmlFor="password">Password :</label>
                            <input className="input input-bordered input-sm  hover:border-teal-500  " 
                            id="password" 
                            name = "password"
                            onChange={handleChange}
                            type="password" placeholder="" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium" htmlFor="confirm_password">Confirm Password :</label>
                            <input className="input input-bordered input-sm  hover:border-teal-500  " 
                            id="confirm_password" 
                            name = "confirmPassword"
                            onChange={handleChange}
                            type="password" placeholder="" />
                        </div>



                    </section>

                </form>

                <div className="w-fit mx-auto  m-8">
                    <button className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" 
                    onClick={handleSubmit}
                    type="submit" >
                        Submit
                    </button>
                 
                </div>
                
            </section>
        </div>
    );
};

export default EmployeeLoginCredentials;