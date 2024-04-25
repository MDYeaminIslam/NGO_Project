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
      setData(data);
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
      <section>
        <BranchSamitySelector callBackFn={setFormData} />
        <button onClick={handleSubmit}>Search</button>
      </section>
      {data ? (
        <div>
          <table className="w-full mt-8 ">
            <tr className="grid grid-cols-5 items-center justify-center gap-1 text-center border">
              <th>Loan Profit</th>
              <th>Member Fees</th>
              <th>Penalty</th>
              <th>Any Charges</th>
              <th>Total Profit</th>
            </tr>
            <tr className="grid grid-cols-5 items-center w-full justify-between text-center">
              <td>{data.totalProfit}</td>
              <td>{data.membershipFee}</td>
              <td>0</td>
              <td>0</td>

              <td>{data.totalProfit + data.membershipFee}</td>
            </tr>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default AnyCharges;
