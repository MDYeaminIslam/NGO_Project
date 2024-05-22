import { useQuery } from "@tanstack/react-query";
import HRMNav from "./HRMNav/HRMNav";
import { employeeLeaveApplicationAcceptReject, employeeLeaveApplicationPendingList } from "../../../api/admin";
import useMutationHook from "../../../hooks/useMutationHook";

function LeaveApplicationCard({ data }) {
  const { _id, reason, employeeName, branchName, samityName, days } = data;
  console.log(data);
  const {mutate} = useMutationHook(employeeLeaveApplicationAcceptReject,{
    key: ["leave-applications"]
  })
  return (
    <div>
      <div>
        <p className="text-xl font-bold">{employeeName}</p>
        <p className="text-sm">{samityName}</p>
        <p className="text-sm">{branchName}</p>
        <p className="text-sm">{reason}</p>
        <p className="text-sm">{days} Days</p>
      </div>
       <div className="flex">
       <button onClick={()=>mutate({status: 'accepted',id:_id})} className="bg-green-500 hover:bg-green-700 px-10 py-2 rounded font-medium     text-white">
          Accept
        </button>
      
      
        <button onClick={()=>mutate({status: 'rejected',id:_id})} className="bg-red-500 hover:bg-red-700 px-10 py-2 rounded font-medium     text-white">
          Reject
        </button>
       </div>
     
    </div>
  );
}
const LeaveApplication = () => {
  const { data } = useQuery({
    queryKey: ["leave-applications"],
    queryFn: employeeLeaveApplicationPendingList,
    initialData: [],
  });
  console.log(data);
  return (
    <div>
      <section>
        <HRMNav />
      </section>

      <section className="m-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto  pt-4 border-b-4 pb-2 ">
          {" "}
          Leave Applications{" "}
        </h1>
        <div className="flex flex-col w-fit mt-8">
         {
          data.length ? data.map((data, idx) => <LeaveApplicationCard data={data} key={idx} />) : <div>No data</div>
         }
        </div>
        <div>div</div>
      </section>
    </div>
  );
};

export default LeaveApplication;

