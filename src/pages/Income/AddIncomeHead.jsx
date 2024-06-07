import React, { useState } from "react";
import IncomeNav from "./IncomeNav/IncomeNav";
import useMutationHook from "../../../hooks/useMutationHook";
import { useQuery } from "@tanstack/react-query";
import { createIncomeHead, getAllIncomeHead } from "../../../api/admin";
import toast from "react-hot-toast";
function AddIncomeHead() {
  const [incomeHead, setIncomeHead] = useState("");
  const { mutate } = useMutationHook(createIncomeHead, {
    key: ["income-head"],
    onSuccess: () => {
      toast.success("Income head added successfully");
    },
  });
  const { data } = useQuery({
    queryKey: ["income-head"],
    queryFn: getAllIncomeHead,
    initialData: [],
  });
  function handleChange(e) {
    const { value } = e.target;
    setIncomeHead(value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    mutate({ head: incomeHead });
  }
  console.log(data);

  return (
    <div>
      <section>
        <IncomeNav />
      </section>
      {/* Add income head */}
      <section className="max-w-5xl mx-auto p-4">
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto   border-b-4 pb-2 my-4 ">
          Income Head
        </h1>
        <div className="w-full flex justify-between gap-4">
          <input type="text" className="input input-sm input-bordered w-full " placeholder="Add Income Head Here.." onChange={handleChange} />
          <button className="btn btn-sm " onClick={handleSubmit}>Submit</button>
        </div>
        {/* Income Head List */}
        <section className="mt-4">
          <div className="grid grid-cols-2 gap-2 ">

            {data.length ? (
              data.map((data, idx) => <div className="bg-teal-500 rounded mb-1 text-white font-medium p-2 text-center " key={idx}>{data.head}</div>)
            ) : (
              <div>No data</div>
            )}
          </div>
        </section>
      </section>



    </div>
  );
}

export default AddIncomeHead;
