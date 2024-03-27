import { useState } from "react";
import { getAllBranches } from "../../api/admin";
import { useQuery } from "@tanstack/react-query";
import axiosAdmin from "../../axios/admin";
export default function BranchSelector({ callBackFn }) {
  const { data, isFetched } = useQuery({
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
    console.log(event.target.value);
  };
  return (
    <div className="flex gap-1">
      {/* Branch List */}
      <div>
        <label className="font-medium" htmlFor="name">
          Branch Name:{" "}
        </label>
        <select
          onChange={handleBranchChange}
          className="select select-bordered w-full max-w-xs"
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
      <div>
        <label className="font-medium" htmlFor="name">
          Samity Name:{" "}
        </label>
        <select
          onChange={handleSamityChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Select Branch
          </option>
          {samityList.map((samity) => (
            <option key={samity._id} value={samity._id}>
              {samity.samityName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
