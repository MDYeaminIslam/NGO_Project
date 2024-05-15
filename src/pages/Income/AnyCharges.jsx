import IncomeNav from "./IncomeNav/IncomeNav";
import BranchSamitySelector from "../../component/branchSamitySelector";
import useMutationHook from "../../../hooks/useMutationHook";
import { useState } from "react";
import { getIncome } from "../../../api/admin";
const initalState = {
  branchId: null,
  samityId: null,
};

const AnyCharges = () => {
  const [formData, setFormData] = useState(initalState);
  const [data, setData] = useState(null);
  const { mutate, isPending } = useMutationHook(getIncome, {
    onSuccess: (data) => {
      console.log(data);
      setData(data.data);
    },
  });
  function handleSubmit(event) {
    event.preventDefault();
    mutate(formData);
  }

  return (
    <div>
      <section>
        <IncomeNav />
      </section>
      <h1 className=" bg-teal-700  text-white pl-4 rounded-b-lg text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
        Income
      </h1>
      <section className="flex flex-col md:flex-row gap-4 p-2 my-8 pb-8 max-w-5xl items-center  border-b-2 mx-4 md:mx-auto">
        <BranchSamitySelector callBackFn={setFormData} />

        <button
          className="mx-auto mt-5 bg-teal-600 hover:bg-teal-700 px-20 py-2 rounded font-medium text-white"
          onClick={handleSubmit}
        >
          Search
        </button>
      </section>

      {data ? (
        <div className="max-w-5xl mx-auto">

          <table className="w-full mt-4 ">
            <tr className="grid bg-teal-700 text-white grid-cols-3  md:grid-cols-5 items-center justify-center gap-1 text-center border">
              <th>Loan Profit</th>
              <th>Member Fees</th>
              <th className="hidden md:block">Penalty</th>
              <th className="hidden md:block">Any Charges</th>
              <th>Total Profit</th>
            </tr>
            <tr className="grid border-b-2 grid-cols-3 md:grid-cols-5 items-center w-full justify-between text-center">
              <td>{data.totalProfit}</td>
              <td>{data.membershipFee}</td>
              <td className="hidden md:block">0</td>
              <td className="hidden md:block">0</td>
              <td>{data.totalProfit + data.membershipFee}</td>
            </tr>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default AnyCharges;
