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
  return (
    <div>
      <section>
        <SavingAccountNav />
      </section>
      <section>
        <BranchSamitySelector callBackFn={setFormData} />
        <button onClick={handleSubmit}>Search</button>
      </section>
    </div>
  );
};

export default SavingAccountList;
