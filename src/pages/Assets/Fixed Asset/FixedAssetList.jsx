import { useState } from "react";
import FixedAssetNav from "./FixedAssetNav/FixedAssetNav";
import BranchSamitySelector from "../../../component/branchSamitySelector";
import useMutationHook from "../../../../hooks/useMutationHook";
import { getAllAssets } from "../../../../api/admin";
const initialState = {
  branchId: null,
  samityId: null,
};
const FixedAssetList = () => {
  const [formData, setFormData] = useState(initialState);
  const { mutate, isPending } = useMutationHook(getAllAssets, {
    onSuccess: (data) => {

      console.log(data);
    },
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    mutate(formData);
  };

  return (
    <div>
      <section>
        <FixedAssetNav />
      </section>

      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
          Asset List
        </h1>
        <section className="p-4 grid gap-1 grid-cols-2">
          <BranchSamitySelector callBackFn={setFormData} />
        </section>
        <div className="w-fit mx-auto">
          <button
            className="bg-teal-600 hover:bg-teal-700 px-20 py-2 rounded font-medium text-white "
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </section>
      <section>

      </section>
    </div>
  );
};

export default FixedAssetList;
