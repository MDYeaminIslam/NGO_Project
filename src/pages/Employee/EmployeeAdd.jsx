import EmployeeNav from "./EmployeeNav/EmployeeNav";

const EmployeeAdd = () => {
  return (
    <div>
      <section>
        <EmployeeNav />
      </section>

      <section>
        <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Employee Add </h1>
          <form className="my-8" >
            <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="name">Name :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="name" type="text" placeholder="enter your name" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="employee_id">Employee Id :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="employee_id" type="text" placeholder="enter your id" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="father_name">Father Name :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="father_name" type="text" placeholder="enter your father name" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="mother_name">Mother Name :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="mother_name" type="text" placeholder="enter your mother name" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="spouse_name">Spouse Name :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="spouse_name" type="text" placeholder="enter your spouse name" />
              </div>


              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="present_address"> Present Address:</label>
                <textarea className="input input-bordered hover:border-teal-500 " id=" present_address" cols="10" rows="1"></textarea>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="permanent_address"> Permanent Address:</label>
                <textarea className="input input-bordered hover:border-teal-500 " id=" permanent_address" cols="10" rows="1"></textarea>
              </div>


              <div className="flex flex-col gap-1">
                <label className="font-medium " htmlFor="occupation">Educational Qualification :</label>
                <select className=" input input-bordered input-sm hover:border-teal-500 " >
                  <option >HSC</option>
                  <option >BA</option>
                  <option >Bcom</option>
                  <option >BBA</option>
                  <option >BSc</option>
                </select>
              </div>


              <div className="flex flex-col gap-1 ">
                <label className="font-medium" htmlFor="dob"> Date of Birth :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="dob" type="date" placeholder="" />
              </div>


              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="mobile_no">Mobile Number :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="mobile_no" type="text" placeholder="enter your mobile number" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="email">Email :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="email" type="email" placeholder="enter your email" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="emergency_contact_number">Emergency Contact Number :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="emergency_contact_number" type="text" placeholder="enter emergency contact number" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium " htmlFor="religion">Religion :</label>
                <select className=" input input-bordered input-sm hover:border-teal-500 " >
                  <option >Islam</option>
                  <option >Hinduism</option>
                  <option >Christianity</option>
                  <option >Buddhism</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="Attach_Photo ">Attach Photo :</label>
                <input className="input input_bordered  hover:border-teal-500 " id="Attach_Photo " type="file" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium " htmlFor="status">Status :</label>
                <select className=" input input-bordered input-sm hover:border-teal-500 " >
                  <option >Working</option>
                  <option >Resigned</option>
                </select>
              </div>

            </section>

          </form>
        </section>

        {/* Previous Organization Section */}
        <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Previous Organization </h1>
          <form className="my-8" >
            <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="name">Name :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="name" type="text" placeholder="enter your name" />
              </div>


              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="address"> Address :</label>
                <textarea className="input input-bordered hover:border-teal-500 " id="address" cols="10" rows="1"></textarea>
              </div>

              <div className="flex flex-col gap-1 ">
                <label className="font-medium" htmlFor="joining_date"> Joining Date :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="joining_date" type="date" placeholder="" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="position">Position :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="position" type="text" placeholder="" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="salary">Salary :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="salary" type="text" placeholder="" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="switch_reason">Switch Reason :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="switch_reason" type="text" placeholder="write your reason here" />
              </div>

            </section>

          </form>
        </section>

        {/* Present Position Section */}
        <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Present Position </h1>
          <form className="my-8" >
            <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">

              <div className="flex flex-col gap-1">
                <label className="font-medium " htmlFor="designation">Designation :</label>
                <select className=" input input-bordered input-sm hover:border-teal-500 " >
                  <option >dummy</option>
                  <option >dummy 2</option>
                  <option >dummy 3</option>
                </select>
              </div>

              <div className="flex flex-col gap-1 ">
                <label className="font-medium" htmlFor="date_of_joining"> Date of Joining :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="date_of_joining" type="date" placeholder="" />
              </div>


              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="branch_name">Branch Name :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="branch_name" type="text" placeholder="Enter your branch name" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="samity_name">Samity Name :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="samity_name" type="text" placeholder="Enter your samity name" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="salary_amount">Salary Amount :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="salary_amount" type="text" placeholder="auto calculated" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="mobile_bill">Mobile Bill :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="mobile_bill" type="text" placeholder="auto calculated" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="salary_amount">TA/DA :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="salary_amount" type="text" placeholder="auto calculated" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="additional_total">Additional Total :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="additional_total" type="text" placeholder="auto calculated" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="employee_security_fund">Employee Security Fund:</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="employee_security_fund" type="text" placeholder="Enter your security money deposite"/>
              </div>

            </section>
          </form>
        </section>

        {/* Gurantor Section */}
        <section className="m-4">
          <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">Guarantor Details </h1>
          <form className="my-8" >
            <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">


              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="name">Name :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="name" type="text" placeholder="Enter gurantor name" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="address"> Address :</label>
                <textarea className="input input-bordered hover:border-teal-500 " id=" address" cols="10" rows="1"></textarea>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="relation">Relation :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="relation" type="text" placeholder="Enter your relation with gurantor" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="occupation">Occupation :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " id="occupation" type="text" placeholder="Enter gurantor occupation" />
              </div>

            </section>
          </form>
        </section>

        <div className="w-fit mx-auto m-8">
          <input className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" type="submit" />
        </div>
      </section>
    </div>
  );
};

export default EmployeeAdd;