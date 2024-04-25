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
      <section className="p-4 grid gap-1 grid-cols-2">
        <BranchSamitySelector callBackFn={setFormData} />
      </section>
      <section className="w-full flex items-center">
        <button
          className="mx-auto bg-teal-600 hover:bg-teal-700 px-20 py-2 rounded font-medium text-white"
          onClick={handleSubmit}
        >
          Search
        </button>
      </section>
      {/* Local User List */}
      <section>
        <div>
          <table className="w-full mt-8 ">
            <tr className="grid grid-cols-5 items-center justify-center gap-1 text-center">
              <th>Member Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Present Address</th>
            </tr>
            {employee.length
              ? employee.map((user, key) => (
                  <EmployeeListView key={key} data={user} />
                ))
              : null}
          </table>
        </div>
      </section>
    </div>
  );
};

export default EmployeeList;
