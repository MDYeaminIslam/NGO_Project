import { useState } from "react";
import FixedAssetNav from "./FixedAssetNav/FixedAssetNav";
import BranchSamitySelector from "../../../component/branchSamitySelector";
import useMutationHook from "../../../../hooks/useMutationHook";
import { getAllAssets } from "../../../../api/admin";
import AssetCard from "../../../component/AssetCard";
const initialState = {
  branchId: null,
  samityId: null,
};
const FixedAssetList = () => {
  const [formData, setFormData] = useState(initialState);
  const [data, setData] = useState([]);
  const { mutate, isPending } = useMutationHook(getAllAssets, {
    onSuccess: (data) => {
      setData(data);
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
        <section className="p-4 max-w-5xl mx-auto flex flex-col md:flex-row">
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
        <div className="max-w-5xl mx-auto bg-teal-700 text-white py-4 ">
          <tr className="grid grid-cols-1 md:grid-cols-5  items-center justify-center gap-1 text-start">
            <th>Product Name</th>
            <th>Measurement /Quantity</th>
            <th>Amount</th>
            <th>Action</th>

          </tr>
        </div>
        <div>
          {data.length
            ? data.map((item, idx) => <AssetCard data={item} key={idx} />)
            : null}
        </div>
      </section>
    </div>
  );
};

export default FixedAssetList;
