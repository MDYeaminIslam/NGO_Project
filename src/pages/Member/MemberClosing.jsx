import MemberNav from "./MemberNav/MemberNav";

const MemberClosing = () => {
  return (
    <div>
      <section><MemberNav /></section>
      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Member Closing</h1>
        <form className="my-8" action="">
          <section className=" grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-4 ">

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="member_id"  >Member Id: </label>
              <input placeholder="Enter member id here" className="input input-bordered input-sm  hover:border-teal-500" id="member_id" type="text" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="closing_date">Closing Date:</label>
              <input className="input input-bordered input-sm  hover:border-teal-500" id="closing_date" type="date" />
            </div>

            <div className="flex flex-col gap-1 col-span-2">
              <label className="font-medium" htmlFor="closing_reason">Closing Reason:</label>
              <textarea placeholder="Explain your reason" id="closing_reason" cols="10" rows="2" className="input input-bordered input-sm  hover:border-teal-500  "></textarea>
            </div>
          </section>

          {/* Submit button */}

          <div className="w-full flex   mt-8 justify-center">
            <input className="input input-bordered input-sm  hover:border-teal-500  " type="submit" />
          </div>
        </form>

      </section>
    </div>
  );
};

export default MemberClosing;