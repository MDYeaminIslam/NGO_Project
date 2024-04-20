import LoanManagementNav from "./LoanManagementNav/LoanManagementNav";


const LoanReceivedMoney = () => {
    return (
        <div>
            <section>
                <LoanManagementNav />
            </section>

            <section className="m-4">
                <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 "> Loan Received Money</h1>
                <form className="my-8" >
                    <section className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-4">

                        <div className="flex flex-col gap-1">
                            <label className="font-medium " htmlFor="financial_institute_type">Financial Institute Type :</label>
                            <select className=" input input-bordered input-sm hover:border-teal-500 " >
                                <option >Organization</option>
                                <option >Bank</option>
                                <option >Another Financial Institute</option>

                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium" htmlFor="name_of_the_institute">Name of the Institute :</label>
                            <input className="input input-bordered input-sm  hover:border-teal-500  " id="name_of_the_institute" type="text" placeholder="enter name of the institute" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium" htmlFor="duration_of_month">Duration of Month :</label>
                            <input className="input input-bordered input-sm  hover:border-teal-500  " id="duration_of_month" type="text" placeholder="enter number of month" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium" htmlFor="rate">Rate :</label>
                            <input className="input input-bordered input-sm  hover:border-teal-500  " id="rate" type="text" placeholder="%" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium" htmlFor="amount">Amount :</label>
                            <input className="input input-bordered input-sm  hover:border-teal-500  " id="amount" type="text" placeholder="enter amount" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium " htmlFor="currency_type">Currency Type :</label>
                            <select className=" input input-bordered input-sm hover:border-teal-500 " >
                                <option >BDT</option>
                                <option >Other Currency</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium" htmlFor="reason"> Remark :</label>
                            <textarea className="input input-bordered hover:border-teal-500 " id="remark" cols="10" rows="1"></textarea>
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

export default LoanReceivedMoney;