import { useState } from "react";
import HRMNav from "./HRMNav/HRMNav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BranchSamitySelector from "../../component/branchSamitySelector";
import useMutationHook from "../../../hooks/useMutationHook";
import { salarySheetList } from "../../../api/admin";
const initialData = {
  branchId: "",
  samityId: "",
  date: new Date(),
};
const SalarySheet = () => {
  const [formData, setFormData] = useState(initialData);
  const { mutate } = useMutationHook(salarySheetList, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
  function handleSubmit(e) {
    e.preventDefault();
    mutate(formData);
  }
  return (
    <div>
      <section>
        <HRMNav />
      </section>
      <div className="flex justify-center items-center">
        <BranchSamitySelector callBackFn={setFormData} />
        <div>
          <label htmlFor="" className="font-medium">
            Year And Month
          </label>
          <DatePicker
            dateFormat="MM/yyyy"
            selected={formData.date}
            onChange={(date) => setFormData((prev) => ({ ...prev, date }))}
            showMonthYearPicker
            showFullMonthYearPicker
            className="input input-bordered input-sm  hover:border-teal-500 w-full"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-700 px-4 py-2 ml-2 mb-4 rounded font-medium text-white mt-5"
        >
          Search
        </button>
      </div>
      <section></section>
    </div>
  );
};

export default SalarySheet;
