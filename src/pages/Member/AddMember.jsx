import { useState } from "react";
import MemberNav from "./MemberNav/MemberNav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BranchSamitySelector from "../../component/branchSamitySelector";
import useMutationHook from "../../../hooks/useMutationHook";
import { createMember } from "../../../api/admin";
import toast from "react-hot-toast";

const initialState = {
  name: "",
  branchId: "",
  samityId: "",
  fathersName: "",
  mothersName: "",
  spouseName: "",
  occupation: "",
  religion: "",
  occupationBrief: "",
  presentAddress: "",
  permanentAddress: "",
  dateOfBirth: "",
  nidNumber: "",
  mobileNumber: "",
  educationalQualification: "SSC",
  emergencyContactNumber: "",
  membershipFee: "",
  photo: "",
  status: "Active",
  fromAdmin: true,
  nominee: {
    name: "",
    address: "",
    relation: "",
    share: "",
    occupation: "",
  },
};
const AddMember = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { mutate, isSuccess, isError, errorMessage, isPending } =
    useMutationHook(createMember, {
      key: ["user"],
      onSuccess: () => {
        toast.success("User added successfully!");
      },
    });

  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: type === "file" ? files[0] : value });
  };
  const handleChangeNominie = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevState) => ({
      ...prevState,
      nominee: {
        ...prevState.nominee,
        [name]: value,
      },
    }));
  };
  const handleChangeDate = (date) => {
    setFormData((prev) => ({
      ...prev,
      dateOfBirth: new Date(date),
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };
  return (
    <div>
      <section>
        <MemberNav />
      </section>
      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
          New Member Add{" "}
        </h1>
        <form className="my-8" action="">
          <section className=" grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-4 ">
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="name">
                Name:{" "}
              </label>
              <input
                onChange={handleChange}
                className="input input-bordered input-sm  hover:border-teal-500"
                id="name"
                name="name"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="fathers_name">
                Father’s Name:
              </label>
              <input
                onChange={handleChange}
                className="input input-bordered input-sm  hover:border-teal-500"
                id="fathers_name"
                type="text"
                name="fathersName"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="mothers_name">
                Mother’s Name:
              </label>
              <input
                onChange={handleChange}
                className="input input-bordered input-sm  hover:border-teal-500"
                id="mothers_name"
                type="text"
                name="mothersName"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="spouse_name">
                Spouse Name:
              </label>
              <input
                onChange={handleChange}
                className="input input-bordered input-sm  hover:border-teal-500"
                id="spouse_name"
                type="text"
                name="spouseName"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="occupation">
                Occupation:
              </label>
              <input
                onChange={handleChange}
                className="input input-bordered input-sm  hover:border-teal-500"
                id="occupation"
                type="text"
                name="occupation"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="religion">
                Religion:
              </label>
              <input
                onChange={handleChange}
                className="input input-bordered input-sm  hover:border-teal-500"
                id="religion"
                type="text"
                name="religion"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                className="font-medium"
                htmlFor="short_brief_of_occupation"
              >
                Short Brief of Occupation:
              </label>
              <textarea
                onChange={handleChange}
                name="occupationBrief"
                id="short_brief_of_occupation"
                cols="10"
                rows="2"
                className="input input-bordered input-sm  hover:border-teal-500  "
              ></textarea>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="present_address">
                {" "}
                Present Address:
              </label>
              <textarea
                onChange={handleChange}
                name="presentAddress"
                id=" present_address"
                cols="10"
                rows="2"
                className="input input-bordered input-sm  hover:border-teal-500"
              ></textarea>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor=" permanent_address">
                {" "}
                Permanent Address:
              </label>
              <textarea
                onChange={handleChange}
                name="permanentAddress"
                id="  permanent_address"
                cols="10"
                rows="2"
                className="input input-bordered input-sm  hover:border-teal-500"
              ></textarea>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="nid_number">
                NID Number:
              </label>
              <input
                onChange={handleChange}
                className="input input-bordered input-sm  hover:border-teal-500"
                id="nid_number"
                type="number"
                name="nidNumber"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="mobile_number">
                Mobile Number:
              </label>
              <input
                onChange={handleChange}
                className="input input-bordered input-sm  hover:border-teal-500"
                id="mobile_number"
                type="number"
                placeholder="+880"
                name="mobileNumber"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="emergency_number">
                Emergency Contact Number:
              </label>
              <input
                onChange={handleChange}
                className="input input-bordered input-sm  hover:border-teal-500"
                id="emergency_number"
                type="number"
                placeholder="+880"
                name="emergencyContactNumber"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="membership_fee ">
                Membership Fee:
              </label>
              <input
                onChange={handleChange}
                className="input input-bordered input-sm  hover:border-teal-500"
                id="membership_fee "
                type="number"
                name="membershipFee"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="membership_fee ">
                DOB (DD/MM/YYYY):
              </label>
              <DatePicker
                selected={formData.dateOfBirth}
                onChange={handleChangeDate}
                className="input input-bordered input-sm  hover:border-teal-500 w-full"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="Attach_Photo ">
                Attach Photo:
              </label>
              <input
                onChange={handleChange}
                className="input input_bordered  hover:border-teal-500 "
                id="Attach_Photo "
                type="file"
                name="photo"
              />
            </div>

            {/* Education Qualification */}
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="Attach_Photo ">
                Education Qualification:
              </label>
              <select
                onChange={handleChange}
                className="input input-bordered input-sm  hover:border-teal-500"
                name="educationalQualification"
              >
                <option disabled defaultValue> 
                  --Select Education Qualification--
                </option>
                <option value="SSC">SSC</option>
                <option value="HSC">HSC</option>
                <option value="B.A">B.A</option>
                <option value="M.A">M.A</option>
                <option value="NONE">NONE</option>
              </select>
            </div>

            <BranchSamitySelector callBackFn={setFormData} />
          </section>
          {/* nominee section */}
          <section>
            <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
              Nominee Section
            </h1>
            <section className=" grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-4 my-8">
              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="name">
                  Name:{" "}
                </label>
                <input
                  onChange={handleChangeNominie}
                  className="input input-bordered input-sm  hover:border-teal-500"
                  id="name"
                  type="text"
                  name="name"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor=" permanent_address">
                  {" "}
                  Address:
                </label>
                <input
                  onChange={handleChangeNominie}
                  name="address"
                  id="address"
                  cols="10"
                  rows="2"
                  className="input input-bordered input-sm  hover:border-teal-500  "
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="relation_with_member">
                  Relation with Member:{" "}
                </label>
                <input
                  onChange={handleChangeNominie}
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="relation_with_member"
                  type="text"
                  name="relation"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="share">
                  Share %:{" "}
                </label>
                <input
                  onChange={handleChangeNominie}
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="share"
                  type="number"
                  name="share"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-medium" htmlFor="occupation">
                  Occupation:
                </label>
                <input
                  onChange={handleChangeNominie}
                  className="input input-bordered input-sm  hover:border-teal-500  "
                  id="occupation"
                  type="text"
                  name="occupation"
                />
              </div>
            </section>
          </section>

          <section></section>
          {isError ? errorMessage : null}
          <div className="w-full flex flex-col md:flex-row justify-center  mt-8">
            <button
              onClick={handleSubmit}
              className="bg-teal-600 hover:bg-teal-700 px-20 py-2 rounded font-medium     text-white"
              disabled={isPending}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddMember;
