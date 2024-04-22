import { useState } from "react";
import EmployeeNav from "./EmployeeNav/EmployeeNav";
import useMutationHook from "../../../hooks/useMutationHook";
import { getAllEmployeeByBranchIdAndSmityId } from "../../../api/admin";
import BranchSamitySelector from "../../component/branchSamitySelector";
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
      <section>
        <BranchSamitySelector callBackFn={setFormData} />
        <button onClick={handleSubmit}>Search</button>
      </section>
      {/* Local User List */}
      <section>
        {employee.length
          ? employee.map((user, key) => <h1 key={key}>{user.name}</h1>)
          : null}
      </section>
    </div>
  );
};

export default EmployeeList;
