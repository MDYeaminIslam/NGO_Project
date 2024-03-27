import { useState } from "react";
import BranchSelector from "../../component/branchSelector";
import BranchesNav from "./BranchesNav/BranchesNav";
import useMutationHook from "../../../hooks/useMutationHook";
import { addSamity } from "../../../api/admin";
const initialState = {
  samityName: "",
  samityCode: "",
  address: "",
  branchId: "",
};
const AddNewSamity = () => {
  const [formData, setFormData] = useState();
  const { mutate, isSuccess, isError, errorMessage, isPending } =
    useMutationHook(addSamity, {
      key: ["samity"],
    });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <section>
        <BranchesNav />
      </section>

      <section className="m-4 ">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
          Add New Samity
        </h1>
        <div className="grid grid-cols-2 max-w-5xl mx-auto gap-4 my-8">
          {/* <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="name">
              Branch Name:{" "}
            </label>
            <input
              className="border-2 hover:border-teal-500 rounded "
              id="name"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="relation_with_member">
              Branch Code:{" "}
            </label>
            <input
              className="border-2 hover:border-teal-500 rounded "
              id="relation_with_member"
              type="text"
              
            />
          </div> */}
          <BranchSelector callBackFn={setFormData} />

          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="name">
              Samity Name:{" "}
            </label>
            <input
              className="border-2 hover:border-teal-500 rounded "
              id="name"
              type="text"
              name="samityName"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="relation_with_member">
              Samity Code:{" "}
            </label>
            <input
              className="border-2 hover:border-teal-500 rounded "
              id="relation_with_member"
              type="text"
              name="samityCode"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="share">
              Address:{" "}
            </label>
            <input
              className="border-2 hover:border-teal-500 rounded "
              id="share"
              type="text"
              name="address"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="occupation">
              Status:
            </label>
            <select className="border-2 hover:border-teal-500">
              <option>Active</option>
              <option>Deactive</option>
            </select>
          </div>
        </div>

        <div className="w-full flex justify-center  mt-12">
          <input
            className="bg-teal-600 hover:bg-teal-700 px-20 py-2 rounded font-medium     text-white"
            type="submit"
          />
        </div>
      </section>
    </div>
  );
};

export default AddNewSamity;
