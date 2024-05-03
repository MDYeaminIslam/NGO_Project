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
        console.log(data);
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
      <section className="p-4 w-full  gap-1 flex md:flex-col">
        <BranchSamitySelector callBackFn={setFormData} />
      </section>
      <div className="w-fit mx-auto">
        <button
          className="bg-teal-600 hover:bg-teal-700 px-20 py-2 rounded font-medium text-white mt-8"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
      {/* Local User List */}
      <section>
        <div className="m-10">
          <table className="w-full mt-8 ">
            <tr className="grid grid-cols-1 bg-teal-700  py-4 text-white md:grid-cols-5 items-center justify-center gap-1 text-center">
              <th>Member Name</th>
              <th>Phone Number</th>
              <th>Occupation</th>
              <th>Present Address</th>
            </tr>

            {localUsers.length
              ? localUsers.map((user, key) => (
                <ListView key={key} data={user} />
              ))
              : null}
          </table>
        </div>
      </section>
    </div>
  );
};

export default MembersList;
