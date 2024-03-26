import LoanManagementNav from "./LoanManagementNav/LoanManagementNav";


const OpenLoanAccount = () => {
    return (
        <div>
            <section>
                <LoanManagementNav />
            </section>

            <section>
                <section className="m-4">
                    <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Open Loan Account</h1>
                    <form className="my-8" >
                        <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">


                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="member_id"  >Member Id : </label>
                                <label className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2">
                                    <input type="text" id="member_id" className="grow  " placeholder="Search" />
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                </label>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="acc_id">Account ID :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="acc_id" type="number" placeholder="Account id" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="cycle_no">Cycle No :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="cycle_no" type="text" placeholder="how many times loan taken" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="loan_amount">Loan Amount :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="loan_amount" type="text" placeholder="" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="profit">Profit :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="profit" type="text" placeholder="%" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="profit_amount">Profit Amount :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="profit_amount" type="text" placeholder="auto calculated" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="no_of_installment">Number of Installment :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="no_of_installment" type="text" placeholder="" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="installment">Installment :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="installment" type="text" placeholder="auto calculated" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium " htmlFor="payment_term">Payment Term :</label>
                                <select className=" input input-bordered input-sm hover:border-teal-500 " >
                                    <option>Daily</option>
                                    <option >Weekly</option>
                                    <option >Fortnightly</option>
                                    <option >Monthly</option>
                                    <option >Quarterly</option>
                                    <option >Half-Yearly</option>
                                    <option >Yearly</option>
                                </select>
                            </div>

                            
                            <div className="flex flex-col gap-1 ">
                                <label className="font-medium" htmlFor="opening_date"> Opening Date :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="opening_date" type="date" placeholder="" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="expiry_date">Expiry Date :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="mature_date" type="date" placeholder="" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="first_due_date"> First Due Date:</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="first_due_date" type="date" placeholder="" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="gurantor_info">Guarantor Info :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="guarantor_info" type="text" placeholder="select the nominee" />
                            </div>

                        </section>

                        <div className="w-full flex justify-center  mt-8">
                            <input className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" type="submit" />
                        </div>

                    </form>
                </section>
            </section>
        </div>
    );
};

export default OpenLoanAccount;