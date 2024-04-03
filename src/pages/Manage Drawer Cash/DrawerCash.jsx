import ManageDrawerCashNav from "./ManageDrawerCashNav/ManageDrawerCashNav";

const DrawerCash = () => {
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
                                        <input type="number" id="cash_in_amount" className="grow  " placeholder="Enter your amount" />
                              
                                    </label>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="font-medium" htmlFor="cash_out_amount">Cash Out Amount:</label>
                                    <input className="input input-bordered input-sm  hover:border-teal-500  " id="cash_out_amount" type="number" placeholder="Enter your amount" />
                                </div>

                                <div className="flex flex-col gap-1">
                                  <label className="font-medium " htmlFor="branch_name">Branch Name:</label>
                                  <select className=" input input-bordered input-sm hover:border-teal-500 " >
                                    <option >Select</option>
                                    <option >Branch 1</option>
                                    <option >Branch 2</option>
                                    <option >Branch 3</option>
                                  </select>
                                </div>

                                <div className="flex flex-col gap-1">
                                  <label className="font-medium " htmlFor="samity_name">Samity Name:</label>
                                  <select className=" input input-bordered input-sm hover:border-teal-500 " >
                                    <option >Select</option>
                                    <option >Samity 1</option>
                                    <option >Samity 2</option>
                                    <option >Samity 3</option>
                                  </select>
                                </div>

                                <div className="flex flex-col gap-1 ">
                                    <label className="font-medium" htmlFor="date">Date:</label>
                                    <input className="input input-bordered input-sm  hover:border-teal-500  " id="date" type="date" placeholder="" />
                                </div>

                                <div className="flex flex-col gap-1">
                                  <label className="font-medium" htmlFor="source_details">Source Details:</label>
                                  <textarea className="input input-bordered hover:border-teal-500 " id="source_details" cols="10" rows="1"></textarea>
                                </div>

                                <div className="flex flex-col gap-1">
                                  <label className="font-medium" htmlFor="remarks"> Remarks :</label>
                                  <textarea className="input input-bordered hover:border-teal-500 " id="remarks" cols="10" rows="1"></textarea>
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

export default DrawerCash;