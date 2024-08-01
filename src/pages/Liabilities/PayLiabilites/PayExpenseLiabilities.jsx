// PayExpenseLiabilities.jsx
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import BranchSamitySelector from "../../../component/branchSamitySelector";
import { getExpenseLiabilityByBranchIdAndSmityId } from "../../../../api/admin";
import ExpenseLiabilitiesTable from "./ExpenseLiabilitiesTable";

const initialState = {
  branchId: null,
  samityId: null,
};

export default function PayExpenseLiabilities() {
  const [formData, setFormData] = useState(initialState);
  let [searchParams, setSearchParams] = useSearchParams();

  const { data } = useQuery({
    queryKey: ["member-list"],
    queryFn: () => getExpenseLiabilityByBranchIdAndSmityId(formData),
    enabled: !!formData.branchId && !!formData.samityId,
    initialData: null,
  });

  useEffect(() => {
    const branchId = searchParams.get("branchId");
    const samityId = searchParams.get("samityId");
    if (branchId && samityId) {
      setFormData({ branchId, samityId });
    }
  }, [searchParams]);

  useEffect(() => {
    if (formData.branchId && formData.samityId) {
      setSearchParams({
        branchId: formData.branchId,
        samityId: formData.samityId,
      });
    }
  }, [formData, setSearchParams]);

  return (
    <section className="m-2">
      <h1 className="text-xl font-bold text-start max-w-5xl mx-auto pt-4 border-b-4 pb-2">
        Expense List
      </h1>

      <section className="flex flex-col md:flex-row gap-4 my-8 pb-8 md:max-w-5xl mx-auto items-center border-b-2">
        <div className="w-full flex flex-col md:flex-row gap-4">
          <BranchSamitySelector callBackFn={setFormData} />
        </div>
      </section>

      <section className="md:m-2 xl:m-8">
        <div className="overflow-x-auto">
          <table className="w-full mb-24">
            <thead>
              <tr className="bg-teal-700 text-white">
                <th className="py-2 px-4 text-left">SL</th>
                <th className="py-2 px-4 text-left">Head</th>
                <th className="py-2 px-4 text-right">Amount</th>
                <th className="py-2 px-4 text-center">Pay</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((item, index) => (
                <ExpenseLiabilitiesTable key={index} data={item} idx={index} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
