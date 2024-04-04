import EmployeeNav from "./EmployeeNav/EmployeeNav";
import { useState } from "react";

const initialState ={
  employeeAdd: {
    name: "",
    employeeId: "",
    fatherName: "",
    motherName: "",
    spouseName: "",
    presentAddress: "",
    permanentAddress: "",
    educationalQualification: "",
    dateOfBirth: "",
    mobileNumber: "",
    email: "",
    emergencyContactNumber: "",
    religion: "",
    attachPhoto: "",
    status: "",
  },
  previousOrganization: {
    name: "",
    address: "",
    joiningDate: "",
    position: "",
    salary: "",
    switchReason: "",
  },
  presentPosition: {
    designation: "",
    dateOfJoining: "",
    branchName: "",
    samityName: "",
    salaryAmount: "",
    mobileBill: "",
    taDa: "",
    additionalTotal: "",
    employeeSecurityFund: "",
  },
  guarantorDetails: {
    name: "",
    address: "",
    relation: "",
    occupation: "",
  },
  
};

const EmployeeAdd = () => {

  const [getFormData, setFormData] = useState(initialState);
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(getFormData);
    setFormData();
  };

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
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="name" 
                name="name"
                onChange={handleChange}
                type="text" placeholder="enter your name" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="employee_id">Employee Id :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="employee_id" 
                name="employeeId"
                onChange={handleChange}
                type="text" placeholder="enter your id" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="father_name">Father Name :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="father_name" 
                name="fatherName"
                onChange={handleChange}
                type="text" placeholder="enter your father name" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="mother_name">Mother Name :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="mother_name" 
                name="motherName"
                onChange={handleChange}
                type="text" placeholder="enter your mother name" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="spouse_name">Spouse Name :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="spouse_name" 
                name="spouseName"
                onChange={handleChange}
                type="text" placeholder="enter your spouse name" />
              </div>


              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="present_address"> Present Address:</label>
                <textarea className="input input-bordered hover:border-teal-500 " id=" present_address" 
                name="presentAddress"
                onChange={handleChange}
                cols="10" rows="1"></textarea>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="permanent_address"> Permanent Address:</label>
                <textarea className="input input-bordered hover:border-teal-500 " id=" permanent_address" 
                name="permanentAddress"
                onChange={handleChange}
                cols="10" rows="1"></textarea>
              </div>


              <div className="flex flex-col gap-1">
                <label className="font-medium " htmlFor="occupation">Educational Qualification :</label>
                <select 
                name="educationQualification"
                onChange={handleChange}
                className=" input input-bordered input-sm hover:border-teal-500 " >
                  <option disabled defaultValue>--Select--</option>
                  <option value="HSC">HSC</option>
                  <option value="BA">BA</option>
                  <option value="Bcom">Bcom</option>
                  <option value="BBA">BBA</option>
                  <option value="BSc">BSc</option>
                </select>
              </div>


              <div className="flex flex-col gap-1 ">
                <label className="font-medium" htmlFor="dob"> Date of Birth :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="dob" 
                name="dateOfBirth"
                onChange={handleChange}
                type="date" 
                placeholder="" />
              </div>


              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="mobile_no">Mobile Number :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="mobile_no" 
                name="mobileNumber"
                onChange={handleChange}
                type="text" placeholder="enter your mobile number" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="email">Email :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="email" 
                name="email"
                onChange={handleChange}
                type="email" placeholder="enter your email" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="emergency_contact_number">Emergency Contact Number :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="emergency_contact_number" 
                name="emergencyContactNumber"
                onChange={handleChange}
                type="text" placeholder="enter emergency contact number" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium " htmlFor="religion">Religion :</label>
                <select 
                name="religion"
                onChange={handleChange}
                className=" input input-bordered input-sm hover:border-teal-500 " >
                  <option disabled defaultValue>--Select--</option>
                  <option value="Islam">Islam</option>
                  <option value="Hinduism">Hinduism</option>
                  <option value="Christianity">Christianity</option>
                  <option value="Buddhism">Buddhism</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="Attach_Photo ">Attach Photo :</label>
                <input className="input input_bordered  hover:border-teal-500 " id="Attach_Photo "
                name="attachPhoto"
                onChange={handleChange}
                type="file" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium " htmlFor="status">Status :</label>
                <select 
                name="status"
                onChange={handleChange}
                className=" input input-bordered input-sm hover:border-teal-500 " >
                  <option disabled defaultValue>--Select--</option>
                  <option value="Working">Working</option>
                  <option value="Resigned">Resigned</option>
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
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="name" 
                name="name"
                onChange={handleChange}
                type="text" placeholder="enter your name" />
              </div>


              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="address"> Address :</label>
                <textarea className="input input-bordered hover:border-teal-500 " id="address" 
                name="address"
                onChange={handleChange}
                cols="10" rows="1"></textarea>
              </div>

              <div className="flex flex-col gap-1 ">
                <label className="font-medium" htmlFor="joining_date"> Joining Date :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="joining_date" 
                name="joiningDate"
                onChange={handleChange}
                type="date" placeholder="" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="position">Position :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="position" 
                name="position"
                onChange={handleChange}
                type="text" placeholder="" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="salary">Salary :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="salary" 
                name="salary"
                onChange={handleChange}
                type="text" placeholder="" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="switch_reason">Switch Reason :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="switch_reason" 
                name="switchReason"
                onChange={handleChange}
                type="text" placeholder="write your reason here" />
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
                <select 
                name="designation"
                onChange={handleChange}
                className=" input input-bordered input-sm hover:border-teal-500 " >
                  <option disabled defaultValue>--Select--</option>
                  <option value="Senior">dummy</option>
                  <option value="Mid">dummy 2</option>
                  <option value="Junior">dummy 3</option>
                </select>
              </div>

              <div className="flex flex-col gap-1 ">
                <label className="font-medium" htmlFor="date_of_joining"> Date of Joining :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="date_of_joining" 
                name="dateOfJoining"
                onChange={handleChange}
                type="date" placeholder="" />
              </div>


              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="branch_name">Branch Name :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="branch_name" 
                name="branchName"
                onChange={handleChange}
                type="text" placeholder="Enter your branch name" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="samity_name">Samity Name :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="samity_name" 
                name="samityName"
                onChange={handleChange}
                type="text" placeholder="Enter your samity name" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="salary_amount">Salary Amount :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="salary_amount" 
                name="salaryAmount"
                onChange={handleChange}
                type="text" placeholder="auto calculated" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="mobile_bill">Mobile Bill :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="mobile_bill" 
                name="mobileBill"
                onChange={handleChange}
                type="text" placeholder="auto calculated" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="salary_amount">TA/DA :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="salary_amount" 
                name="taDa"
                onChange={handleChange}
                type="text" placeholder="auto calculated" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="additional_total">Additional Total :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="additional_total" 
                name="additionalTotal"
                onChange={handleChange}
                type="text" placeholder="auto calculated" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="employee_security_fund">Employee Security Fund:</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="employee_security_fund" 
                name="employeeSecurityFund"
                onChange={handleChange}
                type="text" placeholder="Enter your security money deposite"/>
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
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="name" 
                name="name"
                onChange={handleChange}
                type="text" placeholder="Enter gurantor name" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="address"> Address :</label>
                <textarea className="input input-bordered hover:border-teal-500 " id=" address" 
                name="address"
                onChange={handleChange}
                cols="10" rows="1"></textarea>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="relation">Relation :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="relation" 
                name="relation"
                onChange={handleChange}
                type="text" placeholder="Enter your relation with gurantor" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="occupation">Occupation :</label>
                <input className="input input-bordered input-sm  hover:border-teal-500  " 
                id="occupation" 
                name="occupation"
                onChange={handleChange}
                type="text" placeholder="Enter gurantor occupation" />
              </div>

            </section>
          </form>
        </section>

        <div className="w-fit mx-auto m-8">
          <button className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium     text-white" 
          onClick={handleSubmit}
          type="submit" >
            Submit
          </button>
          
        </div>
      </section>
    </div>
  );
};

export default EmployeeAdd;