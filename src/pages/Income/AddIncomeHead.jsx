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
      <section>
        <input type="text" className="border" onChange={handleChange} />

        <button onClick={handleSubmit}>Add</button>
      </section>
      {/* Income Head List */}

      <section>
        {data.length ? (
          data.map((data, idx) => <div key={idx}>{data.head}</div>)
        ) : (
          <div>No data</div>
        )}
      </section>
    </div>
  );
}

export default AddIncomeHead;
