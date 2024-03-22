
import MemberNav from "./MemberNav/MemberNav";

const AddMember = () => {
  return (
    <div>
      <section>
        <MemberNav />
      </section>
      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">New Member Adding  Form </h1>
        <form className="my-8" action="">
          <section className=" grid grid-cols-3 max-w-5xl mx-auto gap-4 ">

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="name"  >Name: </label>
              <input className="border-2 hover:border-black rounded " id="name" name="name" type="text" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="fathers_name">Father’s Name:</label>
              <input className="border-2 hover:border-black rounded " id="fathers_name" type="text" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="mothers_name">Mother’s Name:</label>
              <input className="border-2 hover:border-black rounded " id="mothers_name" type="text" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="spouse_name">Spouse Name:</label>
              <input className="border-2 hover:border-black rounded " id="spouse_name" type="text" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="occupation">Occupation:</label>
              <input className="border-2 hover:border-black rounded " id="occupation" type="text" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="religion">Religion:</label>
              <input className="border-2 hover:border-black rounded " id="religion" type="text" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="short_brief_of_occupation">Short Brief of Occupation:</label>
              <textarea name="" id="short_brief_of_occupation" cols="10" rows="2" className="border-2 hover:border-black rounded "></textarea>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="present_address"> Present Address:</label>
              <textarea name="" id=" present_address" cols="10" rows="2" className="border-2 hover:border-black rounded "></textarea>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor=" permanent_address">  Permanent Address:</label>
              <textarea name="" id="  permanent_address" cols="10" rows="2" className="border-2 hover:border-black rounded "></textarea>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="nid_number">NID Number:</label>
              <input className="border-2 hover:border-black rounded " id="nid_number" type="text" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="mobile_number">Mobile Number:</label>
              <input className="border-2 hover:border-black rounded " id="mobile_number" type="text" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="emergency_number">Emergency Contact Number:</label>
              <input className="border-2 hover:border-black rounded " id="emergency_number" type="text" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="membership_fee ">Membership Fee:</label>
              <input className="border-2 hover:border-black rounded " id="membership_fee " type="number" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="Attach_Photo ">Attach Photo</label>
              <input className="border-2 hover:border-black rounded " id="Attach_Photo " type="file" />
            </div>

          </section>
          {/* nominee section */}
          <section>
            <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Nominee Section</h1>
            <section className=" grid grid-cols-2 max-w-5xl mx-auto gap-4 my-8" >

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="name"  >Name: </label>
                <input className="border-2 hover:border-black rounded " id="name" type="text" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="relation_with_member"  >Relation with Member: </label>
                <input className="border-2 hover:border-black rounded " id="relation_with_member" type="text" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="share"  >Share % </label>
                <input className="border-2 hover:border-black rounded " id="share" type="number" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="occupation">Occupation:</label>
                <input className="border-2 hover:border-black rounded " id="occupation" type="text" />
              </div>

            </section>
          </section>
          <div className="w-full flex  pl-3 mt-8">
            <input className="bg-sky-500 hover:bg-sky-600 px-20 py-2 rounded font-medium     text-white" type="submit" />
          </div>
        </form>


      </section>

    </div>
  );
};

export default AddMember;