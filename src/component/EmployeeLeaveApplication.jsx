import { useState } from "react";
const initialState = {
    days: null,
    reason: '',

};

const EmployeeLeaveApplication = () => {
    const [formData, setFormData] = useState(initialState);
    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData((prev) => ({ ...prev, [name]: value }));
    }
    console.log(formData);
    return (
        <div>
            <section>
                <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
                    Leave Application
                </h1>
                <section className=" px-4 grid grid-cols-1 md:grid-cols-1 max-w-5xl mx-auto gap-4 my-8">
                    <div className="flex flex-col gap-1">
                        <label className="font-medium" htmlFor="number_of_days">
                            Number of Days:
                        </label>
                        <input

                            className="input input-bordered input-sm  hover:border-teal-500"
                            id="days"
                            type="number"
                            name="days"
                            onChange={onChangeHandle}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-medium" htmlFor="reason">
                            Reason:
                        </label>

                        <textarea
                            name="reason"
                            id="reason"
                            onChange={onChangeHandle}
                            className="input input-bordered input-lg  hover:border-teal-500  "
                            cols="30" rows="10">
                        </textarea>
                    </div>

                </section>
                <div className="w-full flex flex-col md:flex-row justify-center  mt-8">
                    <button
                        className="bg-teal-600 hover:bg-teal-700 px-20 py-2 rounded font-medium     text-white">
                        Submit
                    </button>
                </div>
            </section>
        </div>
    );
};

export default EmployeeLeaveApplication;