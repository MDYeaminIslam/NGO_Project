import { useState } from "react";
import BranchSamitySelector from "../../component/branchSamitySelector";
import LoanManagementNav from "./LoanManagementNav/LoanManagementNav";
import { getAllLoanAccountByBranchIdAndSmityId } from "../../../api/admin";
import useMutationHook from "../../../hooks/useMutationHook";
import LoanCard from "../../component/LoanCard";
const initialState = {
  branchId: null,
  samityId: null,
  paymentTerm: null,
};
const LoanAccountList = () => {
  const [formData, setFormData] = useState(initialState);
  const [loanList, setLoanList] = useState([]);
  const { mutate, isPending } = useMutationHook(
    getAllLoanAccountByBranchIdAndSmityId,
    {
      onSuccess: (data) => {
        console.log(data);
        setLoanList(data);
      },
    }
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    mutate(formData);
  }
  return (
    <div>
      <section>
        <LoanManagementNav />
      </section>
      <section className="p-4 w-full flex flex-col md:flex-row">
        <BranchSamitySelector callBackFn={setFormData} />
        {/* <div className="flex flex-col gap-1">
          <label className="font-medium " htmlFor="payment_term">
            Payment Term :
          </label>
          <select
            onChange={handleChange}
            name="paymentTerm"
            className=" input input-bordered input-sm hover:border-teal-500 "
          >
            <option disabled>Select a Value</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Fortnightly">Fortnightly</option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Half-Yearly">Half-Yearly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div> */}
      </section>
      <section className="w-full flex items-center">
        <button
          className="mx-auto bg-teal-600 hover:bg-teal-700 px-20 py-2 rounded font-medium text-white
          mt-6"
          onClick={handleSubmit}
        >
          Search
        </button>
      </section>
      <section className="mt-8">
        {loanList.length
          ? loanList.map((loan, idx) => <LoanCard data={loan} key={idx} />)
          : null}
      </section>
    </div>
  );
};

export default LoanAccountList;
