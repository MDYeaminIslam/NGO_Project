import LoanManagementNav from "./LoanManagementNav/LoanManagementNav";


const LoanAccountClosing = () => {
    return (
        <div>
            <section>
                <LoanManagementNav/>
            </section>

            <section>
                <section className="m-4">
                    <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Account Closing</h1>
                    <form className="my-8" >
                        <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">


                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="acc_id"  >Account Id : </label>
                                <label className="input input-sm hover:border-teal-500 input-bordered flex items-center gap-2">
                                    <input type="text" id="acc_id" className="grow  " placeholder="Search" />
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                </label>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="member_name">Member Name :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="member_name" type="text" placeholder="auto refill" />
                            </div>



                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="description">Description :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="description" type="text" placeholder="write description here" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="closing_tk">Closing Tk :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="closing_tk" type="text" placeholder="auto refill" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="total_amount">Total Amount :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="total_amount" type="text" placeholder="auto refill" />
                            </div>

                            <div className="flex flex-col gap-1 ">
                                <label className="font-medium" htmlFor="date"> Date :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="date" type="date" placeholder="" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="payment_term">Payment Term :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="payment_term" type="text" placeholder="auto refill" />
                            </div>


                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="installment_payment">Installment Payment :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="installment_payment" type="text" placeholder="auto refill" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="profit">Profit :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="profit" type="number" placeholder="%" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="balance"> Profit Amount :</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="balance" type="text" placeholder="" />
                            </div>



                        </section>

                        <div className="w-full flex justify-center  mt-12 gap-6">
                            <input className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" type="submit" value="Save" />
                            <button  className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white">Save and Print</button>
                            
                        </div>


                    </form>
                </section>
            </section>
        </div>
    );
};

export default LoanAccountClosing;