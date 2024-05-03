import { useState } from "react";
import { getAllBranches } from "../../api/admin";
import { useQuery } from "@tanstack/react-query";
import axiosAdmin from "../../axios/admin";
export default function BranchSamitySelector({ callBackFn }) {
  const { data, isFetched } = useQuery({
    queryKey: ["branches"],
    queryFn: getAllBranches,
  });
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSamity, setSelectedSamity] = useState("");
  const [samityList, setSamityList] = useState([]);
  const handleBranchChange = async (event) => {
    setSelectedBranch(event.target.value);
    const samityList = await axiosAdmin.get(
      `/samity/all/${event.target.value}`
    );
    setSamityList(samityList.data.data);
  };
  const handleSamityChange = (event) => {
    setSelectedSamity(event.target.value);
    callBackFn((prev) => ({
      ...prev,
      samityId: event.target.value,
      branchId: selectedBranch,
    }));
  };
  return (
    <>
      {/* Branch List */}

      <div className="flex flex-col gap-1 w-full">
        <label className="font-medium" htmlFor="name">
          Branch Name:
        </label>
        <select
          onChange={handleBranchChange}
          className="input input-bordered input-sm hover:border-teal-500  "
        >
          <option disabled selected>
            Select Branch
          </option>
          {isFetched
            ? data.map((branch) => (
                <option key={branch._id} value={branch._id}>
                  {branch.branchName}
                </option>
              ))
            : null}
        </select>
      </div>
      {/* Samity List */}
      <div className="flex flex-col gap-1">
        <label className="font-medium" htmlFor="name">
          Samity Name:
        </label>
        <select
          onChange={handleSamityChange}
          className="input input-bordered input-sm hover:border-teal-500  "
        >
          <option disabled selected>
            Select Samity
          </option>
          {samityList.map((samity) => (
            <option key={samity._id} value={samity._id}>
              {samity.samityName}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
