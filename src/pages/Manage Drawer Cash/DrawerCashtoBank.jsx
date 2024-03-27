import ManageDrawerCashNav from "./ManageDrawerCashNav/ManageDrawerCashNav";

const DrawerCashtoBank = () => {
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
                                    <input type="text" id="branch_name" className="grow  " placeholder="Enter branch name here" />
                                   
                                </label>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="samity_name">Samity Name:</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="samit_name" type="text" placeholder="Enter samity name here" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="cash_in_amount">Cash in Amount:</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="cash_in_amount" type="number" placeholder="Enter your amount" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="cash_out_amount">Cash Out Amount:</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="cash_out_amount" type="number" placeholder="Enter your amount" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-medium" htmlFor="bank_name">Bank Name:</label>
                                <input className="input input-bordered input-sm  hover:border-teal-500  " id="bank_name" type="text" placeholder="Enter bank name here" />
                            </div>

                        </section>

                        <div className="w-full flex justify-center  mt-12">
                            <input className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" type="submit" />
                        </div>

                    </form>
                </section>
            </section>
    </div>
  );
};

export default DrawerCashtoBank;