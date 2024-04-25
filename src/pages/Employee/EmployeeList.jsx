import { useState } from "react";
import EmployeeNav from "./EmployeeNav/EmployeeNav";
import useMutationHook from "../../../hooks/useMutationHook";
import { getAllEmployeeByBranchIdAndSmityId } from "../../../api/admin";
import BranchSamitySelector from "../../component/branchSamitySelector";
import EmployeeListView from "./EmployeeListView";
const initalState = {
  branchId: null,
  samityId: null,
};
const EmployeeList = () => {
  const [formData, setFormData] = useState(initalState);
  const [employee, setEmployee] = useState([]);
  const { mutate, isPending } = useMutationHook(
    getAllEmployeeByBranchIdAndSmityId,
    {
      onSuccess: (data) => {
        setEmployee(data.data);
      },
    }
  );

  function handleSubmit(event) {
    event.preventDefault();
    mutate(formData);
  }
  return (
    <div>
      <section>
        <EmployeeNav />
      </section>
      <section className="flex items-center justify-around gap-2 my-8 pb-8 border-b-2 max-w-5xl mx-auto">
        <BranchSamitySelector callBackFn={setFormData} />
        <button className="btn bg-teal-700 text-white mt-4 " onClick={handleSubmit}>Search</button>
      </section>
      {/* Local User List */}
      <section>
        <div className="max-w-5xl mx-auto bg-teal-700 text-white py-4">
          <tr className="grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-1 text-center">
            <th>employee Name</th>
            <th>Phone Number</th>
            <th>Email</th>

          </tr>
        </div>
        <div>
          {employee.length
            ? employee.map((user, key) => <EmployeeListView key={key} data={user} />)
            : null}
        </div>
      </section>
    </div>
  );
};

export default EmployeeList;
