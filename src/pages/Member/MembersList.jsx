import MemberNav from "./MemberNav/MemberNav";
import BranchSamitySelector from "../../component/branchSamitySelector";
import { useState } from "react";
import useMutationHook from "../../../hooks/useMutationHook";
import { getLocalUsersByBranchIdAndSmityId } from "../../../api/admin";
const initalState = {
  branchId: null,
  samityId: null,
};

const MembersList = () => {
  const [formData, setFormData] = useState(initalState);
  const [localUsers, setLocalUsers] = useState([]);

  const { mutate, isPending } = useMutationHook(
    getLocalUsersByBranchIdAndSmityId,
    {
      onSuccess: (data) => {
        setLocalUsers(data.data);
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
        <MemberNav />
      </section>
      <section>
        <BranchSamitySelector callBackFn={setFormData} />
        <button onClick={handleSubmit}>Search</button>
      </section>
      {/* Local User List */}
      <section>
        {localUsers.length
          ? localUsers.map((user, key) => <h1 key={key}>{user.name}</h1>)
          : null}
      </section>
    </div>
  );
};

export default MembersList;
