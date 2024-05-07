import { useState } from "react";
import BranchSamitySelector from "../../component/branchSamitySelector";
import SavingAccountNav from "./SavingAccountNav/SavingAccountNav";
import useMutationHook from "../../../hooks/useMutationHook";
import { searchDepositAccountByBranchAndSamity } from "../../../api/admin";
import toast from "react-hot-toast";
import { data } from "autoprefixer";
const initialData = {
  branchId: null,
  samityId: null,
};
const SavingAccountList = () => {
  const [formData, setFormData] = useState(initialData);
  const [list, setList] = useState([]);
  const { mutate } = useMutationHook(searchDepositAccountByBranchAndSamity, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
  function handleSubmit(event) {
    event.preventDefault();
    mutate(formData);
  }
  console.log(formData);

  return (
    <div>
      <section>
        <SavingAccountNav />
      </section>
      <section className=" flex flex-col md:flex-row p-2">
        <BranchSamitySelector callBackFn={setFormData} />
        <button className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium w-fit  text-white mt-8 mx-auto justify-center" onClick={handleSubmit}>Search</button>
      </section>
    </div>
  );
};

export default SavingAccountList;
