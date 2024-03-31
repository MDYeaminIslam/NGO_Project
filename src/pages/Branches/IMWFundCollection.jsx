import BranchesNav from "./BranchesNav/BranchesNav";

const IMWFundCollection = () => {
  return (
    <div>
      <section>
        <BranchesNav/>
      </section>


      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">IMW Fund Collection</h1>


        <h3 className="text-lg font-bold text-start max-w-5xl mx-auto  pt-8 pb-2 ">Insurance</h3>


        <form className="my-8" action="">
          <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

          <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="member_id">Member Id:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="member_id" type="text" placeholder="Enter your id here" />
          </div>

          <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="date">Date:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="date" type="date" placeholder=""/>
          </div>

          <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="insurance_amount">Insurance Amount:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500" id="insurance_amount" type="number" placeholder="Enter your amount"/>
          </div>

          <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="installment_amount">Installment Amount:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500" id="installment_amount" type="number" placeholder="Enter how many times you paid"/>
          </div>

          <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="remarks">Remarks:</label>
                <textarea className="input input-bordered hover:border-teal-500 " id="remarks" cols="10" rows="1"></textarea>
          </div>


          </section>
          
        </form>

        <h3 className="text-lg font-bold text-start max-w-5xl mx-auto  pt-4 pb-2 ">Member Welfare Fund</h3>


        <form className="my-8" action="">
          <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

          <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="fund_amount">Fund Amount:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500" id="fund_amount" type="number" placeholder="Enter your amount"/>
          </div>

          <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="date">Date:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500  " id="date" type="date" placeholder=""/>
          </div>

          <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="installment_amount">Installment Amount:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500" id="installment_amount" type="number" placeholder="Enter how many times you paid"/>
          </div>

          <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="insurance_remarks">Insurance Remarks:</label>
                <textarea className="input input-bordered hover:border-teal-500 " id="insurance_remarks" cols="10" rows="1"></textarea>
          </div>

          </section>
          
        </form>

        <div className="w-full flex justify-center  mt-12">
          <input className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" type="submit" />
        </div>

      </section>
    
    </div>
  );
};

export default IMWFundCollection;