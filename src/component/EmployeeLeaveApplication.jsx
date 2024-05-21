

const EmployeeLeaveApplication = () => {
    return (
        <div>
            <section>
                <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
                    Leave Application
                </h1>
                <section className=" grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-4 my-8">
                    <div className="flex flex-col gap-1">
                        <label className="font-medium" htmlFor="number_of_days">
                            Number of Days:
                        </label>
                        <input

                            className="input input-bordered input-sm  hover:border-teal-500"
                            id="number_of_days"
                            type="number"
                            name="number_of_days"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-medium" htmlFor="reason">
                            Reason:
                        </label>
                        <input

                            name="reason"
                            id="reason"
                            type="text"
                            className="input input-bordered input-sm  hover:border-teal-500  "
                        />
                    </div>

                </section>
                <div className="w-full flex flex-col md:flex-row justify-center  mt-8">
                    <button
                        
                        className="bg-teal-600 hover:bg-teal-700 px-20 py-2 rounded font-medium     text-white"
                        
                    >
                        Submit
                    </button>
                </div>
            </section>
        </div>
    );
};

export default EmployeeLeaveApplication;