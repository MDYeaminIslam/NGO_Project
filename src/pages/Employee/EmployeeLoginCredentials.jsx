import EmployeeNav from "./EmployeeNav/EmployeeNav";


const EmployeeLoginCredentials = () => {
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
                            <input className="input input-bordered input-sm  hover:border-teal-500  " id="employee_name" type="text" placeholder="enter your name" />
                        </div>

                        <div className="flex flex-col gap-1 ">
                            <label className="font-medium" htmlFor="id"> ID :</label>
                            <input className="input input-bordered input-sm  hover:border-teal-500  " id="id" type="text" placeholder="enter your id" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium" htmlFor="phone_number">Phone Number :</label>
                            <input className="input input-bordered input-sm  hover:border-teal-500  " id="phone_number" type="text" placeholder="" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium" htmlFor="password">Password :</label>
                            <input className="input input-bordered input-sm  hover:border-teal-500  " id="password" type="password" placeholder="" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium" htmlFor="confirm_password">Confirm Password :</label>
                            <input className="input input-bordered input-sm  hover:border-teal-500  " id="confirm_password" type="password" placeholder="" />
                        </div>



                    </section>

                </form>

                <div className="w-fit mx-auto  m-8">
                    <input className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" type="submit" />
                </div>
                
            </section>
        </div>
    );
};

export default EmployeeLoginCredentials;