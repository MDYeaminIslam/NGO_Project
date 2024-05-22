import { useQuery } from "@tanstack/react-query";
import HRMNav from "./HRMNav/HRMNav";
import { employeeLeaveApplicationAcceptReject, employeeLeaveApplicationPendingList } from "../../../api/admin";
import useMutationHook from "../../../hooks/useMutationHook";

function LeaveApplicationCard({ data }) {
  const { _id, reason, employeeName, branchName, samityName, days } = data;
<<<<<<< HEAD
  console.log(data);
  const { mutate } = useMutationHook(employeeLeaveApplicationAcceptReject, {
=======
  const {mutate} = useMutationHook(employeeLeaveApplicationAcceptReject,{
>>>>>>> 5b2107f2dcfc86bb8a9e0373aaf26ee3558d89d8
    key: ["leave-applications"]
  })
  return (
    <div className="mx-6">
      <div className="card min-h-64 bg-base-100 shadow-xl">
        <div className="card-body mb-10">
          <p className="text-xl font-bold mt-2 mb-4">{employeeName}</p>
          <p className="text-lg "><span className="font-semibold">Samity Name:</span>  {samityName}</p>
          <p className="text-lg "><span className="font-semibold">Branch Name:</span>  {branchName}</p>
          <p className="text-lg "><span className="font-semibold">Leave Needed:</span>  {days} Days</p>
          <p className="text-lg "><span className="font-semibold">Reason:</span>   {reason}</p>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-center">

          <button onClick={() => mutate({ status: 'accepted', id: _id })} className="bg-green-500 hover:bg-green-700 px-4 py-2 ml-2 mb-4 rounded font-medium     text-white">
            Accept
          </button>


          <button onClick={() => mutate({ status: 'rejected', id: _id })} className="bg-red-500 hover:bg-red-700 px-4 py-2 ml-2 mb-4 rounded font-medium     text-white">
            Reject
          </button>

        </div>
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

      </section>
    </div>
  );
};

export default LeaveApplication;

