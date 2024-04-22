import MemberNav from "./MemberNav/MemberNav";
import BranchSamitySelector from "../../component/branchSamitySelector";
import { useState } from "react";
import useMutationHook from "../../../hooks/useMutationHook";
import { getLocalUsersByBranchIdAndSmityId } from "../../../api/admin";
import ListView from "../../component/ListView";
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
      <section className="p-4 grid gap-1 grid-cols-2">

        <BranchSamitySelector callBackFn={setFormData} />

      </section>
      <div className="w-fit mx-auto">

        <button className="bg-teal-600 hover:bg-teal-700 px-20 py-2 rounded font-medium text-white mt-8" onClick={handleSubmit}>Search</button>
      </div>
      {/* Local User List */}
      <section>
        {localUsers.length
          ? localUsers.map((user, key) => <h1 key={key}>{user.name}</h1>)
          : null}
      </section>

      <section>
        <ListView/>
      </section>
    </div>
  );
};

export default MembersList;
