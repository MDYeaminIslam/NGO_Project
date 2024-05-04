import { useState } from "react";
import FixedAssetNav from "./FixedAssetNav/FixedAssetNav";
import BranchSamitySelector from "../../../component/branchSamitySelector";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addAsset } from "../../../../api/admin";
import useMutationHook from "../../../../hooks/useMutationHook";
import toast from "react-hot-toast";
const initialState = {
  branchId: "",
  samityId: "",
  type: "fixed",
  productName: "",
  quantity: "",
  amount: "",
  description: "",
  remarks: "",
  date: new Date(),
  depreciation: "",
};

const EditFixedAsset = () => {
  const [formData, setFormData] = useState(initialState);
  const { mutate, isSuccess, isError, errorMessage, isPending } =
    useMutationHook(addAsset, {
      onSuccess: () => {
        toast.success("Asset Added Successfully!");
      },
    });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    mutate(formData);
  };
  const handleChangeDate = (date) => {
    setFormData((prev) => ({
      ...prev,
      date: new Date(date),
    }));
  };

  return (
    <div>
      <section>
        <FixedAssetNav />
      </section>

      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
          Edit Asset
        </h1>
        <form className="my-8">
          <section className="grid grid-cols-3 max-w-5xl mx-auto gap-4">
            <BranchSamitySelector callBackFn={setFormData} />
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="membership_fee ">
                Date (DD/MM/YYYY):
              </label>
              <DatePicker
                selected={formData.date}
                onChange={handleChangeDate}
                className="input input-bordered input-sm hover:border-teal-500 w-full"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium " htmlFor="type">
                Type:
              </label>
              <select
                name="type"
                onChange={handleChange}
                className=" input input-bordered input-sm hover:border-teal-500 "
              >
                <option disabled defaultValue>
                  --Select--
                </option>
                <option value="fixed">Fixed</option>
                <option value="temporary">Temporary</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="name">
                Product Name:
              </label>
              <input
                onChange={handleChange}
                className="input input-bordered input-sm hover:border-teal-500 "
                id="name"
                type="text"
                name="productName"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="measure">
                Measurement/Quantity:
              </label>
              <input
                onChange={handleChange}
                className="input input-bordered input-sm hover:border-teal-500 "
                id="measure"
                type="number"
                name="quantity"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="amount">
                Amount:
              </label>
              <input
                onChange={handleChange}
                className="input input-bordered input-sm hover:border-teal-500 "
                id="amount"
                type="number"
                name="amount"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="des">
                Depreciation:
              </label>
              <input
                onChange={handleChange}
                className="input input-bordered input-sm hover:border-teal-500 "
                id="des"
                type="number"
                name="depreciation"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="des">
                Description:
              </label>
              <input
                onChange={handleChange}
                className="input input-bordered input-sm hover:border-teal-500 "
                id="des"
                type="text"
                name="description"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="remarks">
                Remarks:
              </label>
              <input
                onChange={handleChange}
                className="input input-bordered input-sm hover:border-teal-500 "
                id="remarks"
                type="text"
                name="remarks"
              />
            </div>
          </section>
        </form>

        {isError ? errorMessage : null}
        <div className="w-fit mx-auto  m-8">
          <button
            className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium  mt-12   text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default EditFixedAsset;
