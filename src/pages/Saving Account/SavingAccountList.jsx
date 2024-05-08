import { useState } from "react";
import BranchSamitySelector from "../../component/branchSamitySelector";
import SavingAccountNav from "./SavingAccountNav/SavingAccountNav";
import useMutationHook from "../../../hooks/useMutationHook";
import { searchDepositAccountByBranchAndSamity } from "../../../api/admin";
import toast from "react-hot-toast";
import { data } from "autoprefixer";
import SavingAccountListView from "./SavingAccountListView";
const initialData = {
  branchId: null,
  samityId: null,
};
const SavingAccountList = () => {
  const [formData, setFormData] = useState(initialData);
  const [list, setList] = useState([]);
  const { mutate } = useMutationHook(searchDepositAccountByBranchAndSamity, {
    onSuccess: (data) => {
      setList(data.data)
    },
  });
  function handleSubmit(event) {
    event.preventDefault();
    mutate(formData);
  }
  console.log(list);

  return (
    <div>
      <section>
        <SavingAccountNav />
      </section>
      <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 pl-2 ">Saving Account List</h1>
      <section className=" flex flex-col md:flex-row p-2 gap-2 items-center max-w-5xl mx-auto">
        <BranchSamitySelector callBackFn={setFormData} />
        <button className="bg-teal-600 hover:bg-teal-700 px-10 py-2 rounded font-medium w-fit  text-white mt-8 mx-auto justify-center" onClick={handleSubmit}>Search</button>
      </section>
      <section className="max-w-5xl mx-auto p-2">
        <div className="max-w-5xl mx-auto bg-teal-700 text-white py-4 mt-8 ">
          <tr className="grid grid-cols-5 text-xs md:text-base md:grid-cols-5  items-center justify-center gap-1 text-start">
            <th>Expense Name</th>
            <th>Date</th>
            <th>Total Payment</th>
            <th>status</th>
            <th>action</th>
          </tr>
        </div>
        <div>
          {
            list.length ?
              list.map((data, idx) => <SavingAccountListView data={data} key={idx} />)
              : null
          }
        </div>
      </section>
    </div>
  );
};

export default SavingAccountList;
